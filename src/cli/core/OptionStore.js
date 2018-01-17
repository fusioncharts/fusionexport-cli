const _ = require('lodash');
const path = require('path');
const helpers = require('../helpers');
const utils = require('../utils');
const config = require('../config');

class OptionStore {
  constructor() {
    this.defaultOptions = config('clidefaults');
    this.finalOptions = {};
  }

  populate(cliOptions) {
    this.cliOptions = cliOptions;

    this.finalOptions.config = utils.sanitizeConfig({
      config: this.config,
    });

    this.finalOptions.chartConfig = utils.sanitizeChartConfig({
      chartConfig: this.chartConfig,
      chartConfigOptions: this.chartConfigOptions,
      width: this.width,
      height: this.height,
    });

    this.finalOptions.outputTo = this.outputTo;

    this.finalOptions.outputFile = utils.sanitizeOutputFile({
      outputFile: this.outputFile,
      defaultOutputFile: this.defaultOptions.outputFile,
    });

    this.finalOptions.type = utils.sanitizeType({
      type: this.type,
    });
  }

  pack() {
    return {
      config: this.config,
      chartConfig: this.chartConfig,
      chartConfigOptions: this.chartConfigOptions,
      inputFile: this.inputFile,
      outputFile: this.outputFile,
      outputFileDefinition: this.outputFileDefinition,
      outputAsZip: this.outputAsZip,
      outputTo: this.outputTo,
      type: this.type,
      width: this.finalOptions.width, // Exception, needs to be resolved
      height: this.finalOptions.height, // Exception, needs to be resolved
      callbacks: this.callbacks,
      template: this.template,
      resources: this.resources,
      asyncCapture: this.asyncCapture,
      asyncCaptureTimeout: this.asyncCaptureTimeout,
      libraryPath: this.libraryPath,
      dashboardLogo: this.dashboardLogo,
      dashboardHeading: this.dashboardHeading,
      dashboardSubheading: this.dashboardSubheading,
      logDest: this.logDest,
      logFile: this.logFile,
      logLevel: this.logLevel,
      remoteExportEnabled: this.remoteExportEnabled,
      exportUrl: this.exportUrl,
    };
  }

  get config() {
    if (this.finalOptions.config) {
      return this.finalOptions.config;
    }

    const cliConfig = helpers.parseObject(this.cliOptions.config);
    if (cliConfig) {
      this.finalOptions.config = cliConfig;
      this.configBasePath = path.dirname(path.resolve(this.cliOptions.config));
      return this.finalOptions.config;
    }

    const defConfig = helpers.parseObject(this.defaultOptions.config, true);
    if (defConfig) {
      this.finalOptions.config = defConfig;
      this.configBasePath = path.dirname(path.resolve(this.defaultOptions.config));
      return this.finalOptions.config;
    }

    return undefined;
  }

  get chartConfig() {
    if (this.finalOptions.chartConfig) {
      return this.finalOptions.chartConfig;
    }

    const cliChartConfig = utils.parseChartConfig(this.cliOptions.chartConfig);
    if (cliChartConfig) {
      this.finalOptions.chartConfig = cliChartConfig;
      return this.finalOptions.chartConfig;
    }

    const secChartConfig = utils.parseChartConfig(this.config.chartConfig, false, this.configBasePath);
    if (secChartConfig) {
      this.finalOptions.chartConfig = secChartConfig;
      return this.finalOptions.chartConfig;
    }

    const defChartConfig = utils.parseChartConfig(this.defaultOptions.chartConfig, true);
    if (defChartConfig) {
      this.finalOptions.chartConfig = defChartConfig;
      return this.finalOptions.chartConfig;
    }

    return undefined;
  }

  get chartConfigOptions() {
    if (this.finalOptions.chartConfigOptions) {
      return this.finalOptions.chartConfigOptions;
    }

    const cliChartConfigOptions = helpers.parseObject(this.cliOptions.chartConfigOptions);
    if (cliChartConfigOptions) {
      this.finalOptions.chartConfigOptions = cliChartConfigOptions;
      return this.finalOptions.chartConfigOptions;
    }

    const secChartConfigOptions = helpers.parseObject(this.config.chartConfigOptions, false, this.configBasePath);
    if (secChartConfigOptions) {
      this.finalOptions.chartConfigOptions = secChartConfigOptions;
      return this.finalOptions.chartConfigOptions;
    }

    const defChartConfigOptions = helpers.parseObject(this.defaultOptions.chartConfigOptions, true);
    if (defChartConfigOptions) {
      this.finalOptions.chartConfigOptions = defChartConfigOptions;
      return this.finalOptions.chartConfigOptions;
    }

    return undefined;
  }

  get inputFile() {
    if (this.finalOptions.inputFile) {
      return this.finalOptions.inputFile;
    }

    if (this.chartConfig) {
      this.finalOptions.inputFile = undefined;
      return this.finalOptions.inputFile;
    }

    const cliInputFile = helpers.ifExists(this.cliOptions.inputFile);
    if (cliInputFile) {
      this.finalOptions.inputFile = cliInputFile;
      return this.finalOptions.inputFile;
    }

    const secInputFile = helpers.ifExists(this.config.inputFile, false, this.configBasePath);
    if (secInputFile) {
      this.finalOptions.inputFile = secInputFile;
      return this.finalOptions.inputFile;
    }

    const defInputFile = helpers.ifExists(this.defaultOptions.inputFile, true);
    if (defInputFile) {
      this.finalOptions.inputFile = defInputFile;
      return this.finalOptions.inputFile;
    }

    return undefined;
  }

  get outputFile() {
    if (this.finalOptions.outputFile) {
      return this.finalOptions.outputFile;
    }

    const cliOutputFile = this.cliOptions.outputFile;
    if (cliOutputFile) {
      this.finalOptions.outputFile = cliOutputFile;
      return this.finalOptions.outputFile;
    }

    const secOutputFile = utils.resolveOutputFile(this.config.outputFile, this.configBasePath);
    if (secOutputFile) {
      this.finalOptions.outputFile = secOutputFile;
      return this.finalOptions.outputFile;
    }

    const defOutputFile = this.defaultOptions.outputFile;
    if (defOutputFile) {
      this.finalOptions.outputFile = defOutputFile;
      return this.finalOptions.outputFile;
    }

    return undefined;
  }

  get outputFileDefinition() {
    if (this.finalOptions.outputFileDefinition) {
      return this.finalOptions.outputFileDefinition;
    }

    const cliOutputFileDefinition = helpers.ifExists(this.cliOptions.outputFileDefinition);
    if (cliOutputFileDefinition) {
      this.finalOptions.outputFileDefinition = cliOutputFileDefinition;
      return this.finalOptions.outputFileDefinition;
    }

    const secOutputFileDefinition = helpers.ifExists(this.config.outputFileDefinition, false, this.configBasePath);
    if (secOutputFileDefinition) {
      this.finalOptions.outputFileDefinition = secOutputFileDefinition;
      return this.finalOptions.outputFileDefinition;
    }

    const defOutputFileDefinition = helpers.ifExists(this.defaultOptions.outputFileDefinition, true);
    if (defOutputFileDefinition) {
      this.finalOptions.outputFileDefinition = defOutputFileDefinition;
      return this.finalOptions.outputFileDefinition;
    }

    return undefined;
  }

  get outputAsZip() {
    if (this.finalOptions.outputAsZip) {
      return this.finalOptions.outputAsZip;
    }

    const cliOutputAsZip = this.cliOptions.outputAsZip;
    if (!_.isUndefined(cliOutputAsZip)) {
      this.finalOptions.outputAsZip = helpers.parseBool(cliOutputAsZip);
      return this.finalOptions.outputAsZip;
    }

    const secOutputAsZip = this.config.outputAsZip;
    if (!_.isUndefined(secOutputAsZip)) {
      this.finalOptions.outputAsZip = helpers.parseBool(secOutputAsZip);
      return this.finalOptions.outputAsZip;
    }

    const defOutputAsZip = this.defaultOptions.outputAsZip;
    if (!_.isUndefined(defOutputAsZip)) {
      this.finalOptions.outputAsZip = helpers.parseBool(defOutputAsZip);
      return this.finalOptions.outputAsZip;
    }

    return undefined;
  }

  get outputTo() {
    if (this.finalOptions.outputTo) {
      return this.finalOptions.outputTo;
    }

    if (this.outputFile.startsWith('s3:')) {
      this.finalOptions.outputTo = 's3';
      return this.finalOptions.outputTo;
    }

    if (this.outputFile.startsWith('ftp:')) {
      this.finalOptions.outputTo = 'ftp';
      return this.finalOptions.outputTo;
    }

    this.finalOptions.outputTo = 'local';
    return this.finalOptions.outputTo;
  }

  get type() {
    if (this.finalOptions.type) {
      return this.finalOptions.type;
    }

    const cliType = this.cliOptions.type;
    if (cliType) {
      this.finalOptions.type = cliType;
      return this.finalOptions.type;
    }

    const secType = this.config.type;
    if (secType) {
      this.finalOptions.type = secType;
      return this.finalOptions.type;
    }

    const outputFileType = path.extname(this.outputFile);
    if (outputFileType) {
      this.finalOptions.type = outputFileType;
      return this.finalOptions.type;
    }

    const defType = this.defaultOptions.type;
    if (defType) {
      this.finalOptions.type = defType;
      return this.finalOptions.type;
    }

    return undefined;
  }

  get width() {
    if (this.finalOptions.width) {
      return this.finalOptions.width;
    }

    const cliWidth = helpers.parseDimension(this.cliOptions.width);
    if (cliWidth) {
      this.finalOptions.width = cliWidth;
      return this.finalOptions.width;
    }

    const secWidth = helpers.parseDimension(this.config.width);
    if (secWidth) {
      this.finalOptions.width = secWidth;
      return this.finalOptions.width;
    }

    const defWidth = helpers.parseDimension(this.defaultOptions.width, true);
    if (defWidth) {
      this.finalOptions.width = defWidth;
      return this.finalOptions.width;
    }

    return undefined;
  }

  get height() {
    if (this.finalOptions.height) {
      return this.finalOptions.height;
    }

    const cliHeight = helpers.parseDimension(this.cliOptions.height);
    if (cliHeight) {
      this.finalOptions.height = cliHeight;
      return this.finalOptions.height;
    }

    const secHeight = helpers.parseDimension(this.config.height);
    if (secHeight) {
      this.finalOptions.height = secHeight;
      return this.finalOptions.height;
    }

    const defHeight = helpers.parseDimension(this.defaultOptions.height, true);
    if (defHeight) {
      this.finalOptions.height = defHeight;
      return this.finalOptions.height;
    }

    return undefined;
  }

  get callbacks() {
    if (this.finalOptions.callbacks) {
      return this.finalOptions.callbacks;
    }

    const cliCallbacks = helpers.ifExists(this.cliOptions.callbacks);
    if (cliCallbacks) {
      this.finalOptions.callbacks = cliCallbacks;
      return this.finalOptions.callbacks;
    }

    const secCallbacks = helpers.ifExists(this.config.callbacks, false, this.configBasePath);
    if (secCallbacks) {
      this.finalOptions.callbacks = secCallbacks;
      return this.finalOptions.callbacks;
    }

    const defCallbacks = helpers.ifExists(this.defaultOptions.callbacks, true);
    if (defCallbacks) {
      this.finalOptions.callbacks = defCallbacks;
      return this.finalOptions.callbacks;
    }

    return undefined;
  }

  get template() {
    if (this.finalOptions.template) {
      return this.finalOptions.template;
    }

    const cliTemplate = helpers.ifExists(this.cliOptions.template);
    if (cliTemplate) {
      this.finalOptions.template = cliTemplate;
      return this.finalOptions.template;
    }

    const secTemplate = helpers.ifExists(this.config.template, false, this.configBasePath);
    if (secTemplate) {
      this.finalOptions.template = secTemplate;
      return this.finalOptions.template;
    }

    const defTemplate = helpers.ifExists(this.defaultOptions.template, true);
    if (defTemplate) {
      this.finalOptions.template = defTemplate;
      return this.finalOptions.template;
    }

    return undefined;
  }

  get resources() {
    if (this.finalOptions.resources) {
      return this.finalOptions.resources;
    }

    const cliResources = helpers.parseObject(this.cliOptions.resources);
    if (cliResources) {
      this.finalOptions.resources = cliResources;
      return this.finalOptions.resources;
    }

    const secResources = helpers.parseObject(this.config.resources, false, this.configBasePath);
    if (secResources) {
      this.finalOptions.resources = secResources;
      return this.finalOptions.resources;
    }

    const defResources = helpers.parseObject(this.defaultOptions.resources, true);
    if (defResources) {
      this.finalOptions.resources = defResources;
      return this.finalOptions.resources;
    }

    return undefined;
  }

  get asyncCapture() {
    if (this.finalOptions.asyncCapture) {
      return this.finalOptions.asyncCapture;
    }

    const cliAsyncCapture = this.cliOptions.asyncCapture;
    if (!_.isUndefined(cliAsyncCapture)) {
      this.finalOptions.asyncCapture = helpers.parseBool(cliAsyncCapture);
      return this.finalOptions.asyncCapture;
    }

    const secAsyncCapture = this.config.asyncCapture;
    if (!_.isUndefined(secAsyncCapture)) {
      this.finalOptions.asyncCapture = helpers.parseBool(secAsyncCapture);
      return this.finalOptions.asyncCapture;
    }

    const defAsyncCapture = this.defaultOptions.asyncCapture;
    if (!_.isUndefined(defAsyncCapture)) {
      this.finalOptions.asyncCapture = helpers.parseBool(defAsyncCapture);
      return this.finalOptions.asyncCapture;
    }

    return undefined;
  }

  get asyncCaptureTimeout() {
    if (this.finalOptions.asyncCaptureTimeout) {
      return this.finalOptions.asyncCaptureTimeout;
    }

    const cliAsTimeout = parseInt(this.cliOptions.asyncCaptureTimeout, 10);
    if (cliAsTimeout) {
      this.finalOptions.asyncCaptureTimeout = cliAsTimeout;
      return this.finalOptions.asyncCaptureTimeout;
    }

    const secAsTimeout = parseInt(this.config.asyncCaptureTimeout, 10);
    if (secAsTimeout) {
      this.finalOptions.asyncCaptureTimeout = secAsTimeout;
      return this.finalOptions.asyncCaptureTimeout;
    }

    const defAsyncCaptureTimeout = parseInt(this.defaultOptions.asyncCaptureTimeout, 10);
    if (defAsyncCaptureTimeout) {
      this.finalOptions.asyncCaptureTimeout = defAsyncCaptureTimeout;
      return this.finalOptions.asyncCaptureTimeout;
    }

    return undefined;
  }

  get libraryPath() {
    if (this.finalOptions.libraryPath) {
      return this.finalOptions.libraryPath;
    }

    const cliLibraryPath = this.cliOptions.libraryPath;
    if (cliLibraryPath) {
      this.finalOptions.libraryPath = cliLibraryPath;
      return this.finalOptions.libraryPath;
    }

    const secLibraryPath = this.config.libraryPath;
    if (secLibraryPath) {
      this.finalOptions.libraryPath = secLibraryPath;
      return this.finalOptions.libraryPath;
    }

    const defLibraryPath = this.defaultOptions.libraryPath;
    if (defLibraryPath) {
      this.finalOptions.libraryPath = defLibraryPath;
      return this.finalOptions.libraryPath;
    }

    return undefined;
  }

  get dashboardLogo() {
    if (this.finalOptions.dashboardLogo) {
      return this.finalOptions.dashboardLogo;
    }

    const cliDashboardLogo = helpers.ifExists(this.cliOptions.dashboardLogo);
    if (cliDashboardLogo) {
      this.finalOptions.dashboardLogo = cliDashboardLogo;
      return this.finalOptions.dashboardLogo;
    }

    const secDashboardLogo = helpers.ifExists(this.config.dashboardLogo, false, this.configBasePath);
    if (secDashboardLogo) {
      this.finalOptions.dashboardLogo = secDashboardLogo;
      return this.finalOptions.dashboardLogo;
    }

    const defDashboardLogo = helpers.ifExists(this.defaultOptions.dashboardLogo, true);
    if (defDashboardLogo) {
      this.finalOptions.dashboardLogo = defDashboardLogo;
      return this.finalOptions.dashboardLogo;
    }

    return undefined;
  }

  get dashboardHeading() {
    if (this.finalOptions.dashboardHeading) {
      return this.finalOptions.dashboardHeading;
    }

    const cliDashboardHeading = this.cliOptions.dashboardHeading;
    if (cliDashboardHeading) {
      this.finalOptions.dashboardHeading = cliDashboardHeading;
      return this.finalOptions.dashboardHeading;
    }

    const secDashboardHeading = this.config.dashboardHeading;
    if (secDashboardHeading) {
      this.finalOptions.dashboardHeading = secDashboardHeading;
      return this.finalOptions.dashboardHeading;
    }

    const defDashboardHeading = this.defaultOptions.dashboardHeading;
    if (defDashboardHeading) {
      this.finalOptions.dashboardHeading = defDashboardHeading;
      return this.finalOptions.dashboardHeading;
    }

    return undefined;
  }

  get dashboardSubheading() {
    if (this.finalOptions.dashboardSubheading) {
      return this.finalOptions.dashboardSubheading;
    }

    const cliDashboardSubheading = this.cliOptions.dashboardSubheading;
    if (cliDashboardSubheading) {
      this.finalOptions.dashboardSubheading = cliDashboardSubheading;
      return this.finalOptions.dashboardSubheading;
    }

    const secDashboardSubheading = this.config.dashboardSubheading;
    if (secDashboardSubheading) {
      this.finalOptions.dashboardSubheading = secDashboardSubheading;
      return this.finalOptions.dashboardSubheading;
    }

    const defDashboardSubheading = this.defaultOptions.dashboardSubheading;
    if (defDashboardSubheading) {
      this.finalOptions.dashboardSubheading = defDashboardSubheading;
      return this.finalOptions.dashboardSubheading;
    }

    return undefined;
  }

  get logDest() {
    if (this.finalOptions.logDest) {
      return this.finalOptions.logDest;
    }

    const cliLogDest = this.cliOptions.logDest;
    if (cliLogDest) {
      this.finalOptions.logDest = cliLogDest;
      return this.finalOptions.logDest;
    }

    const secLogDest = helpers.resolvePath(this.config.logDest, this.configBasePath);
    if (secLogDest) {
      this.finalOptions.logDest = secLogDest;
      return this.finalOptions.logDest;
    }

    const defLogDest = this.defaultOptions.logDest;
    if (defLogDest) {
      this.finalOptions.logDest = defLogDest;
      return this.finalOptions.logDest;
    }

    return undefined;
  }

  get logFile() {
    if (this.finalOptions.logFile) {
      return this.finalOptions.logFile;
    }

    const cliLogFile = this.cliOptions.logFile;
    if (cliLogFile) {
      this.finalOptions.logFile = cliLogFile;
      return this.finalOptions.logFile;
    }

    const secLogFile = this.config.logFile;
    if (secLogFile) {
      this.finalOptions.logFile = secLogFile;
      return this.finalOptions.logFile;
    }

    const defLogFile = this.defaultOptions.logFile;
    if (defLogFile) {
      this.finalOptions.logFile = defLogFile;
      return this.finalOptions.logFile;
    }

    return undefined;
  }

  get logLevel() {
    if (this.finalOptions.logLevel) {
      return this.finalOptions.logLevel;
    }

    const cliLogLevel = this.cliOptions.logLevel;
    if (cliLogLevel) {
      this.finalOptions.logLevel = cliLogLevel;
      return this.finalOptions.logLevel;
    }

    const secLogLevel = this.config.logLevel;
    if (secLogLevel) {
      this.finalOptions.logLevel = secLogLevel;
      return this.finalOptions.logLevel;
    }

    const defLogLevel = this.defaultOptions.logLevel;
    if (defLogLevel) {
      this.finalOptions.logLevel = defLogLevel;
      return this.finalOptions.logLevel;
    }

    return undefined;
  }

  get remoteExportEnabled() {
    if (this.finalOptions.remoteExportEnabled) {
      return this.finalOptions.remoteExportEnabled;
    }

    const cliRemoteExportEnabled = this.cliOptions.remoteExportEnabled;
    if (!_.isUndefined(cliRemoteExportEnabled)) {
      this.finalOptions.remoteExportEnabled = helpers.parseBool(cliRemoteExportEnabled);
      return this.finalOptions.remoteExportEnabled;
    }

    const secRemoteExportEnabled = this.config.remoteExportEnabled;
    if (!_.isUndefined(secRemoteExportEnabled)) {
      this.finalOptions.remoteExportEnabled = helpers.parseBool(secRemoteExportEnabled);
      return this.finalOptions.remoteExportEnabled;
    }

    const defRemoteExportEnabled = this.defaultOptions.remoteExportEnabled;
    if (!_.isUndefined(defRemoteExportEnabled)) {
      this.finalOptions.remoteExportEnabled = helpers.parseBool(defRemoteExportEnabled);
      return this.finalOptions.remoteExportEnabled;
    }

    return undefined;
  }

  get exportUrl() {
    if (this.finalOptions.exportUrl) {
      return this.finalOptions.exportUrl;
    }

    const cliExportUrl = this.cliOptions.exportUrl;
    if (cliExportUrl) {
      this.finalOptions.exportUrl = cliExportUrl;
      return this.finalOptions.exportUrl;
    }

    const secExportUrl = this.config.exportUrl;
    if (secExportUrl) {
      this.finalOptions.exportUrl = secExportUrl;
      return this.finalOptions.exportUrl;
    }

    const defExportUrl = this.defaultOptions.exportUrl;
    if (defExportUrl) {
      this.finalOptions.exportUrl = defExportUrl;
      return this.finalOptions.exportUrl;
    }

    return undefined;
  }
}

module.exports = OptionStore;
