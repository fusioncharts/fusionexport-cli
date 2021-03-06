const path = require('path');
const fs = require('fs');
const tmp = require('tmp');
const { ExportConfig, ExportManager } = require('fusionexport-node-client'); // eslint-disable-line
const FileSaver = require('./FileSaver');
const log = require('../log');
const utils = require('../utils');

class LocalExporter {
  constructor(options) {
    this.options = options;
    this.exportClient = new ExportManager({
      host: this.options.host,
      port: this.options.port,
    });
    this.exportClient.clientName = 'CLI';
  }

  async render() {
    const exportOptions = this.buildExportOptions();

    try {
      const exportConfig = LocalExporter.populateExportConfig(exportOptions);
      const tmpDir = tmp.dirSync().name;
      const outputFiles = await this.exportClient.export(exportConfig, tmpDir, true);
      this.populateOutputFileBag(outputFiles, tmpDir);
    } catch (err) {
      log.error(err.toString());
      return;
    }

    this.encloseOutputFiles();

    const fileSaver = new FileSaver({
      outputTo: this.options.outputTo,
      outputFile: this.options.outputFile,
      ftpConfig: this.options.ftpConfig,
      s3Config: this.options.s3Config,
      outputFileBag: this.outputFileBag,
    });

    await fileSaver.saveOutputFiles();
  }

  encloseOutputFiles() {
    const outputDir = path.dirname(this.options.outputFile);
    this.outputFileBag = this.outputFileBag.map((opf) => {
      const reOpf = opf;
      let relPath = utils.removeCommonPath(reOpf.realName, outputDir);
      if (this.outputFileBag.length > 1) {
        relPath = path.join('fusioncharts_export', relPath);
      }
      reOpf.realName = relPath;
      return reOpf;
    });
  }

  static populateExportConfig(exportOptions) {
    const exportConfig = new ExportConfig();
    Object.keys(exportOptions).forEach((keyName) => {
      const value = exportOptions[keyName];
      if (value) {
        if (keyName === 'chartConfig') {
          exportConfig.set(keyName, JSON.stringify(value));
        } else if (keyName === 'resourceFilePath') {
          if (typeof value === 'object') {
            const tmpFile = tmp.fileSync();
            fs.writeFileSync(tmpFile.name, JSON.stringify(value));
            exportConfig.set(keyName, tmpFile.name);
          } else {
            throw new Error('resourceFilePath should be an object.');
          }
        } else {
          exportConfig.set(keyName, value);
        }
      }
    });
    return exportConfig;
  }

  populateOutputFileBag(outputFiles, tmpDir = '') {
    const base64Encode =
      file => fs.readFileSync(file).toString('base64');

    this.outputFileBag = [];
    outputFiles.forEach((file) => {
      const realName = utils.removeCommonPath(file, tmpDir);
      this.outputFileBag.push({
        fileContent: base64Encode(file),
        realName,
      });
    });
  }

  buildExportOptions() {
    const exportOptions = {
      libraryDirectoryPath: this.options.libraryPath && path.resolve(this.options.libraryPath),
      asyncCapture: this.options.asyncCapture,
      maxWaitForCaptureExit: this.options.asyncCaptureTimeout,
      dashboardLogo: this.options.dashboardLogo ? path.resolve(this.options.dashboardLogo) : null,
      dashboardHeading: this.options.dashboardHeading,
      dashboardSubheading: this.options.dashboardSubheading,
      type: this.options.type.substr(1),
      quality: this.options.quality,
      outputFile: this.options.outputFile,
      exportAsZip: this.options.outputAsZip,
      outputFileDefinition: this.options.outputFileDefinition,
    };

    if (this.options.resources) {
      exportOptions.resourceFilePath = this.options.resources;
    }

    if (this.options.chartConfig) {
      exportOptions.chartConfig = this.options.chartConfig;
    } else if (this.options.inputFile) {
      exportOptions.inputSVG = this.options.inputFile;
    }

    if (this.options.template) {
      exportOptions.templateFilePath = this.options.template;
    }

    if (this.options.callbacks) {
      exportOptions.callbackFilePath = this.options.callbacks;
    }


    return exportOptions;
  }
}

module.exports = LocalExporter;
