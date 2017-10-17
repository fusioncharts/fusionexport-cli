const fileUrl = require('file-url');
const FileSaver = require('./FileSaver');
const ExportManager = require('../../../fc-export-node-client');
const log = require('../log');

class LocalExporter {
  constructor() {
    this.exportManager = new ExportManager({
      workerCount: 1,
    }).boot();
  }

  async render(options) {
    log.verbose('Starting export.');
    this.options = options;
    const exportOptions = this.buildExportOptions();

    try {
      const outputFileBag = await this.exportManager.export(exportOptions);
      this.outputFileBag = outputFileBag;
    } catch (err) {
      log.error(err);
      this.exportManager.dispose();
      return;
    }

    this.exportManager.dispose();

    const fileSaver = new FileSaver({
      outputTo: this.options.outputTo,
      outputFile: this.options.outputFile,
      outputFileBag: this.outputFileBag,
    });

    await fileSaver.saveOutputFiles();
  }

  buildExportOptions() {
    const exportOptions = {
      libraryDirectoryPath: this.options.libraryPath,
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

  async saveOutputFiles() {
    if (this.options.outputTo === 'local') {
      await this.saveToLocal();
      return;
    }

    if (this.options.outputTo === 's3') {
      await this.saveToS3();
      return;
    }

    if (this.options.outputTo === 'ftp') {
      await this.saveToFTP();
    }
  }
}

module.exports = LocalExporter;
