const path = require('path');
const fileUrl = require('file-url');
const ProgressBar = require('progress');
const FileSaver = require('./FileSaver');
const FcExportNodeClient = require('fc-export-node-client');
const config = require('../config');
const log = require('../log');
const { calculateTotalUnits } = require('../helpers');

class LocalExporter {
  constructor() {
    this.exportClient = new FcExportNodeClient();
    this.listenToStateChange();
  }

  createProgressBar(exportOptions) {
    this.barOptions = config('progressbar');
    const actualTotal = calculateTotalUnits(exportOptions);
    // eslint-disable-next-line no-console
    console.log();
    this.progressBar = new ProgressBar(this.barOptions.bar, {
      total: actualTotal,
      width: this.barOptions.width,
      complete: this.barOptions.complete,
      incomplete: this.barOptions.incomplete,
    });
  }

  async render(options) {
    this.options = options;
    const exportOptions = this.buildExportOptions();

    this.createProgressBar(exportOptions);

    try {
      const outputFileBag = await this.exportClient.export(exportOptions);
      this.outputFileBag = outputFileBag;
    } catch (err) {
      log.error(err);
      return;
    }

    if (this.outputFileBag.length > 1) {
      const ofp = path.parse(this.options.outputFile);
      this.options.outputFile = path.join(ofp.dir, 'fusioncharts_export', ofp.base);
    }

    const fileSaver = new FileSaver({
      outputTo: this.options.outputTo,
      outputFile: this.options.outputFile,
      outputFileBag: this.outputFileBag,
    });

    await fileSaver.saveOutputFiles();
  }

  buildExportOptions() {
    const exportOptions = {
      libraryDirectoryPath: this.options.libraryPath && path.resolve(this.options.libraryPath),
      resources: this.options.resources,
      asyncCapture: this.options.asyncCapture,
      maxWaitForCaptureExit: this.options.asyncCaptureTimeout,
      dashboardLogo: this.options.dashboardLogo ? fileUrl(this.options.dashboardLogo) : null,
      dashboardHeading: this.options.dashboardHeading,
      dashboardSubheading: this.options.dashboardSubheading,
      type: this.options.type.substr(1),
      exportFile: this.options.outputFile,
      exportAsZip: this.options.outputAsZip,
      outputFileDefinition: this.options.outputFileDefinition,
    };

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

  listenToStateChange() {
    this.exportClient.on('exportStateChange', (meta) => {
      if (meta.weight) {
        if (meta.customMsg) {
          this.progressBar.tick({
            customMsg: meta.customMsg,
          });
        } else {
          this.progressBar.tick();
        }
      }
      if (meta.error) {
        this.progressBar.interrupt(meta.error);
        process.exit(1);
      }
      if (this.progressBar.complete) {
        // eslint-disable-next-line no-console
        console.log('\n');
      }
    });
  }
}

module.exports = LocalExporter;
