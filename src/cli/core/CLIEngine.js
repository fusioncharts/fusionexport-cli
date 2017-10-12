const OptionStore = require('./OptionStore');
const log = require('../log');

class CLIEngine {
  constructor() {
    this.optionStore = new OptionStore();
  }

  process(program) {
    this.optionStore.populate(program);

    this.validateMinimumRequirements();
    this.validateSVGExport();
    this.validateIndividualChartExport();
    this.validateDashboardExport();

    return this.optionStore.pack();
  }

  validateMinimumRequirements() {
    if (!this.optionStore.chartConfig
        && !this.optionStore.inputFile
        && !this.optionStore.template) {
      log.error('Minimum requirements not satisfied. Need either a valid chart-config or input-file.');
      process.exit(1);
    }
  }

  validateSVGExport() {
    if (!this.optionStore.inputFile) {
      return;
    }

    if (this.optionStore.type.search(/^(\.*)(png|jpg|jpeg|pdf|html|svg)$/i) < 0) {
      log.error(`SVG export as ${this.optionStore.type} is not supported.`);
      process.exit(1);
    }
  }

  validateIndividualChartExport() {
    if (!this.optionStore.chartConfig) {
      return;
    }

    if (this.optionStore.type.search(/^(\.*)(png|jpg|jpeg|pdf|svg|csv|xls|xlsx|html)$/i) < 0) {
      log.error(`Export format ${this.optionStore.type} is not supported.`);
      process.exit(1);
    }
  }

  validateDashboardExport() {
    if (!this.optionStore.template) {
      return;
    }

    if (this.optionStore.type.search(/^(\.*)(png|jpg|jpeg|pdf|html)$/i) < 0) {
      log.error(`Dashboard export as ${this.optionStore.type} is not supported.`);
      process.exit(1);
    }
  }
}

module.exports = CLIEngine;
