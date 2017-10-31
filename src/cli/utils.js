const _ = require('lodash');
const path = require('path');
const mkdirp = require('mkdirp');
const glob = require('glob');
const helpers = require('./helpers');
const log = require('./log');

_.mixin({
  deeply(map) {
    return (obj, fn) => map(
      _.mapValues(
        obj,
        v => (_.isPlainObject(v) ? _.deeply(map)(v, fn) : v),
      ),
      fn,
    );
  },
});

function convertKeysToLowercase(obj) {
  return _.deeply(_.mapKeys)(obj, (val, key) => key.toLowerCase());
}

function makeArray(ob) {
  if (!ob) {
    return ob;
  }

  if (!Array.isArray(ob)) {
    return [ob];
  }

  return ob;
}

function parseChartConfig(chartConfig) {
  if (typeof chartConfig !== 'string') {
    return chartConfig;
  }

  const ob = helpers.parseObject(chartConfig, true);
  if (ob === 'object') {
    return makeArray(ob);
  }

  const pattern = `{${chartConfig.split(' ').join(',')}}`;
  const fileList = glob.sync(pattern);

  const confList = [];
  fileList.forEach((file) => {
    let confs;

    try {
      confs = makeArray(helpers.parseObject(file));
    } catch (e) {
      log.warn(e);
    }

    if (confs === 'object') {
      confs = makeArray(confs);
    }

    let group = '';
    if (confs.length > 1) {
      group = path.parse(file).name;

      const predicate = conf => conf.group === group;
      let start = 1;
      let index = _.findIndex(confList, predicate);
      while (index > -1) {
        start += 1;
        group = `${group}_${start}`;
        index = _.findIndex(confList, predicate);
      }
    }

    confs = confs.map((con) => {
      const fcon = con;
      fcon.group = group;
      return fcon;
    });

    confList.push(...confs);
  });

  return confList;
}

function sanitizeConfig(options) {
  if (!options.config) {
    return {};
  }

  let { config } = options;

  config = helpers.renameProperty(config, 'chart-config', 'chartConfig');
  config = helpers.renameProperty(config, 'chart-config-options', 'chartConfigOptions');
  config = helpers.renameProperty(config, 'input-file', 'inputFile');
  config = helpers.renameProperty(config, 'output-file', 'outputFile');
  config = helpers.renameProperty(config, 'output-file-definition', 'outputFileDefinition');
  config = helpers.renameProperty(config, 'output-as-zip', 'outputAsZip');
  config = helpers.renameProperty(config, 'library-path', 'libraryPath');
  config = helpers.renameProperty(config, 'dashboard-logo', 'dashboardLogo');
  config = helpers.renameProperty(config, 'dashboard-heading', 'dashboardHeading');
  config = helpers.renameProperty(config, 'dashboard-subheading', 'dashboardSubheading');
  config = helpers.renameProperty(config, 'log-dest', 'logDest');
  config = helpers.renameProperty(config, 'log-file', 'logFile');
  config = helpers.renameProperty(config, 'log-level', 'logLevel');
  config = helpers.renameProperty(config, 'remote-export-enabled', 'remoteExportEnabled');
  config = helpers.renameProperty(config, 'export-url', 'exportUrl');
  config = helpers.renameProperty(config, 'export-log-url', 'exportLogUrl');

  return config;
}

function sanitizeChartConfig(options) {
  if (!options.chartConfig) {
    return options.chartConfig;
  }

  let chartConfig = _.clone(options.chartConfig);
  let chartConfigOptions = _.clone(options.chartConfigOptions);

  chartConfigOptions = chartConfigOptions || {};

  chartConfigOptions.width = options.width || chartConfigOptions.width;
  chartConfigOptions.height = options.height || chartConfigOptions.height;

  const dotSeparated = helpers.findDotSeparated(chartConfigOptions);

  if (!Array.isArray(chartConfig)) {
    chartConfig = [chartConfig];
  }

  chartConfig = chartConfig.map((chConf) => {
    let c = chConf;

    dotSeparated.forEach((key) => {
      c = _.set(c, key, chartConfigOptions[key]);
    });

    return c;
  });

  dotSeparated.forEach((key) => {
    delete chartConfigOptions[key];
  });

  chartConfig = chartConfig.map(chConf =>
    _.merge(chConf, chartConfigOptions));

  chartConfig = chartConfig.map((chConf) => {
    const fChConf = chConf;
    fChConf.dataSource = convertKeysToLowercase(fChConf.dataSource);
    return fChConf;
  });

  return chartConfig;
}

function sanitizeOutputFile(options) {
  let outputFile;

  const lastChar = options.outputFile.slice(-1);
  if (lastChar === '/' || lastChar === '\\') {
    outputFile = path.join(options.outputFile, options.defaultOutputFile);
  } else {
    outputFile = options.outputFile;
  }

  const splitParts = outputFile.split(':');
  if (splitParts.length > 1) {
    outputFile = splitParts[1];
  }

  outputFile = path.parse(outputFile);
  return path.format({
    dir: outputFile.dir,
    name: outputFile.name,
  });
}

function sanitizeType(options) {
  const type = options.type.toLowerCase();

  if (type.substr(0, 1) === '.') {
    return type;
  }

  return `.${type}`;
}

function configureLogger(options) {
  if (options.logDest == null) {
    log.setLogLevel('error');
    return;
  }

  log.setLogLevel(options.logLevel);

  mkdirp.sync(options.logDest);
  log.setLogPath(path.join(options.logDest, options.logFile));
}

module.exports = {
  parseChartConfig,
  sanitizeConfig,
  sanitizeChartConfig,
  sanitizeOutputFile,
  sanitizeType,
  configureLogger,
};
