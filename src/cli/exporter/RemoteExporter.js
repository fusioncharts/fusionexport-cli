const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const tmp = require('tmp');
const request = require('request');
const JSZip = require('node-zip');
const AdmZip = require('adm-zip');
const jsdom = require('jsdom');
const ProgressBar = require('progress');
const FileSaver = require('./FileSaver');
const log = require('../log');

const TotalUnit = 3;
const FakeUnit = 60;
const Total = TotalUnit + FakeUnit;
class RemoteExporter {
  constructor() {
    this.mimeTypes = {
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      png: 'image/png',
      svg: 'image/svg+xml',
      xls: 'application/vnd.ms-excel',
      pdf: 'application/pdf',
      zip: 'application/zip',
      csv: 'text/csv',
      html: 'text/html',
    };
    // eslint-disable-next-line no-console
    console.log();
    this.progressBar = new ProgressBar('Completed |:bar | :percent :customMsg ', {
      total: Total,
      width: 60,
      complete: '⬜',
      incomplete: '-',
    });
  }

  zipOutputFiles(fileName, dataPath) {
    const zip = new JSZip();
    zip.file(fileName, fs.readFileSync(dataPath));
    const content = zip.generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    const zipFile = tmp.fileSync({ postfix: '.zip' });
    fs.writeFileSync(zipFile.name, content, 'binary');
    this.outputFileBag.push({
      realName: 'archive.zip',
      tmpPath: zipFile.name,
    });
  }

  unzipOutputFiles(dataPath) {
    const zip = new AdmZip(dataPath);
    zip.getEntries().forEach((entry) => {
      const tmpFile = tmp.fileSync();
      fs.writeFileSync(tmpFile.name, entry.getData(), 'binary');
      this.outputFileBag.push({
        realName: entry.entryName,
        tmpPath: tmpFile.name,
      });
    });
  }

  async render(options) {
    this.options = options;

    this.findResources();
    this.generateResourceData();
    this.reReferenceTemplateUrls();

    this.progressBar.tick({
      customMsg: 'Connecting to the remote',
    });

    try {
      const resp = await this.sendRequest();
      this.resp = resp;
    } catch (err) {
      log.error('HTTP request failed:', err);
    }

    const tmpPath = tmp.fileSync();
    fs.writeFileSync(tmpPath.name, this.resp.body);

    const ext = _.findKey(
      this.mimeTypes,
      _.matches(this.resp.headers['content-type']),
    );

    const contentDisposition = this.resp.headers['content-disposition'];
    const searchString = 'filename=';
    const nameStartIndex = contentDisposition.indexOf(searchString) + searchString.length;
    const filename = contentDisposition.slice(nameStartIndex);
    const { name } = path.parse(filename);

    const realName = path.format({
      name,
      ext: `.${ext}`,
    });

    this.outputFileBag = [];

    if (this.options.outputAsZip && ext !== 'zip') {
      this.zipOutputFiles(realName, tmpPath.name);
    } else if (!this.options.outputAsZip && ext === 'zip') {
      this.unzipOutputFiles(tmpPath.name);
    } else {
      this.outputFileBag.push({
        realName,
        tmpPath: tmpPath.name,
      });
    }

    if (this.outputFileBag.length && path.extname(this.outputFileBag[0].realName) === '.zip') {
      this.outputFileBag[0].realName = 'fusioncharts_export.zip';
    }

    const fileSaver = new FileSaver({
      outputFile: this.options.outputFile,
      outputTo: this.options.outputTo,
      outputFileBag: this.outputFileBag,
    });

    await fileSaver.saveOutputFiles();
  }

  sendRequest() {
    return new Promise((resolve, reject) => {
      const req = request.post({
        url: this.options.exportUrl,
        formData: this.buildParams(),
        encoding: null,
      }, (err, resp) => {
        if (err) {
          reject(err);
          return;
        }
        if (resp.statusCode !== 200) {
          reject(new Error(`${resp.statusCode} ${resp.statusMessage}`));
        }
        resolve(resp);
      });

      req.on('request', () => {
        this.fakeCounter = 0;
        this.timer = setInterval(() => {
          this.fakeCounter += 1;
          if (this.fakeCounter < FakeUnit) {
            this.progressBar.tick({
              customMsg: 'Waiting',
            });
          } else {
            this.almostReached = true;
            this.progressBar.update(0.9);
          }
        }, 500);
      });

      req.on('complete', () => {
        clearInterval(this.timer);
        const remaining = Total - this.fakeCounter;
        if (this.almostReached) {
          this.progressBar.update(1, {
            customMsg: 'Export done',
          });
          return;
        }
        this.progressBar.tick(remaining, {
          customMsg: 'Export done',
        });

        if (this.progressBar.complete) {
          // eslint-disable-next-line no-console
          console.log('\n');
        }
      });
    });
  }

  buildParams() {
    const params = {
      parameters: this.getParameters(this.options),
      meta_bgColor: '#FFF',
      log_enabled: 'true',
    };

    if (this.options.inputFile) {
      params.stream_type = 'SVG';
      params.stream = fs.readFileSync(this.options.inputFile).toString();
      params.is_single_export = 'true';

      return params;
    }

    params.stream_type = 'CHART-DATA';
    params.stream = JSON.stringify(this.options.chartConfig);
    params.is_single_export = this.options.chartConfig.length > 1 ? 'true' : 'false';

    const zipFile = this.generateZip();
    if (zipFile) {
      params.files = fs.createReadStream(zipFile.name);
    }

    if (this.options.dashboardHeading) {
      params.dashboard_heading = this.options.dashboardHeading;
    }

    if (this.options.dashboardSubheading) {
      params.dashboard_subheading = this.options.dashboardSubheading;
    }

    return params;
  }

  findResources() {
    if (!this.options.template) {
      return;
    }

    const html = fs.readFileSync(this.options.template).toString();
    const { JSDOM } = jsdom;
    const { window: { document } } = new JSDOM(html);

    let links = [...document.querySelectorAll('link')];
    let scripts = [...document.querySelectorAll('script')];
    let imgs = [...document.querySelectorAll('img')];

    links = links.map(link => link.href);
    scripts = scripts.map(script => script.src);
    imgs = imgs.map(img => img.src);

    const resources = {
      images: imgs,
      stylesheets: links,
      javascripts: scripts,
    };

    if (!this.options.resources) {
      this.options.resources = resources;
      return;
    }

    Object.keys(resources).forEach((key) => {
      this.options.resources[key] =
        _.uniq(resources[key].concat(this.options.resources[key] || []));
    });
  }

  generateResourceData() {
    let templateContext;

    if (!this.options.resources) {
      return;
    }

    const resourceData = _.clone(this.options.resources);

    templateContext = '';
    if (this.options.template) {
      templateContext = path.dirname(path.resolve(this.options.template));
    }

    Object.keys(resourceData).forEach((key) => {
      resourceData[key] = resourceData[key].map((v) => {
        const tmpFile = tmp.tmpNameSync({ postfix: path.extname(v) });

        const ob = {
          real: v,
          abs: path.resolve(templateContext, v),
          zipPath: path.join(`resources/${key}`, path.basename(tmpFile)),
        };

        return ob;
      });
    });

    this.options.resourceData = resourceData;
    this.deDuplicateResourceData();

    const resources = _.clone(this.options.resourceData);
    Object.keys(resources).forEach((key) => {
      resources[key] = resources[key].map(v => v.zipPath);
    });
    this.options.resources = resources;
  }

  reReferenceTemplateUrls() {
    let html;

    if (!this.options.template) {
      return;
    }

    html = fs.readFileSync(this.options.template);
    Object.keys(this.options.resourceData).forEach((key) => {
      this.options.resourceData[key].forEach((v) => {
        html = html.toString().replace(new RegExp(v.real, 'g'), v.zipPath);
      });
    });

    const tmpTemplateFile = tmp.fileSync({ postfix: '.html' });
    fs.writeFileSync(tmpTemplateFile.name, html);

    this.options.template = tmpTemplateFile.name;
  }

  generateZip() {
    if (!this.options.template
        && !this.options.callbacks
        && !this.options.resources) {
      return undefined;
    }

    const zip = new JSZip();

    if (this.options.template) {
      zip.file('template.html', fs.readFileSync(this.options.template));
    }

    if (this.options.callbacks) {
      zip.file('callbacks.js', fs.readFileSync(this.options.callbacks));
    }

    if (this.options.dashboardLogo) {
      const logoFileName = path.format({
        name: 'logo',
        ext: path.extname(this.options.dashboardLogo),
      });

      zip.file(logoFileName, fs.readFileSync(this.options.dashboardLogo));
    }

    if (this.options.resourceData) {
      Object.keys(this.options.resourceData).forEach((key) => {
        this.options.resourceData[key].forEach((v) => {
          zip.file(v.zipPath, fs.readFileSync(v.abs));
        });
      });
    }


    const content = zip.generate({ type: 'nodebuffer', compression: 'DEFLATE' });

    const zipFile = tmp.fileSync({ postfix: '.zip' });

    fs.writeFileSync(zipFile.name, content, 'binary');

    return zipFile;
  }

  getParameters() {
    const basename = path.basename(this.options.outputFile).split('.')[0];

    const exportfilename = `exportfilename=${basename}`;
    const exportformat = `exportformat=${this.options.type.slice(1)}`;
    const exportactionnew = 'exportactionnew=download';
    const exportaction = 'exportaction=download';

    return [exportfilename, exportformat, exportaction, exportactionnew].join('|');
  }

  deDuplicateResourceData() {
    Object.keys(this.options.resourceData).forEach((key) => {
      this.options.resourceData[key] = this.options.resourceData[key].map((val) => {
        const curr = val;
        const prev = this.options.resourceData[key].find(v => v.abs === curr.abs);
        if (prev) {
          curr.zipPath = prev.zipPath;
        }
        return curr;
      });
    });
  }
}

module.exports = RemoteExporter;
