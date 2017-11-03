const path = require('path');
const fileUrl = require('file-url');
const ProgressBar = require('progress');
const FileSaver = require('./FileSaver');
const FcExportNodeClient = require('fc-export-node-client');
const log = require('../log');
const { calculateTotalUnits } = require('../helpers');

const TOTAL_UNIT = 6;

class LocalExporter {
  constructor() {
    this.exportClient = new FcExportNodeClient();
    this.listenToStateChange();
  }

  async render(options) {
    this.options = options;
    const exportOptions = this.buildExportOptions();
    const actualTotal = calculateTotalUnits(exportOptions, TOTAL_UNIT);
    // eslint-disable-next-line no-console
    console.log();
    this.progressBar = new ProgressBar('Exporting |:bar | :percent :customMsg ', {
      total: actualTotal,
      width: 60,
      complete: '⬜',
      incomplete: '-',
      renderThrottle: 1,
    });

    try {
      const outputFileBag = await this.exportClient.export(exportOptions);
      this.outputFileBag = outputFileBag;
    } catch (err) {
      log.error(err);
      return;
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
      if (this.progressBar.complete) {
        // eslint-disable-next-line no-console
        console.log('\n');
      }
    });
  }
}

module.exports = LocalExporter;
