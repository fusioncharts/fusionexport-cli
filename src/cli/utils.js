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

function findCommonPath(paths) {
  let p = paths.concat().sort();
  if (p.length === 0) return undefined;
  p = p.map(pa => pa.split(path.sep));
  const p1 = p[0];
  const p2 = p[p.length - 1];
  const l = p1.length;
  let i = 0;
  while (i < l && p1[i] === p2[i]) i += 1;
  return [...p1.slice(0, i)].join(path.sep);
}

function removeCommonPath(base, ref) {
  const baseSpl = base.split(path.sep);
  const refSpl = ref.split(path.sep);
  const l = baseSpl.length;
  let i = 0;
  while (i < l && baseSpl[i] === refSpl[i]) i += 1;
  return path.join(...baseSpl.slice(i));
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

function resolveOutputFile(val, basePath) {
  if (typeof val !== 'string') return val;

  if (val.startsWith('s3:') || val.startsWith('ftp:')) return val;

  let isDir = false;
  if (
    (val.length > 1 && val.slice(-1) === path.sep) ||
    val.slice(-1) === '.' ||
    val.slice(-1) === ''
  ) {
    isDir = true;
  }

  let resolvedPath = path.resolve(basePath, val);
  if (isDir) {
    resolvedPath += path.sep;
  }

  return resolvedPath;
}

function validateChartConfig(confList) {
  return confList.filter((config) => {
    if (!config.dataSource && !config.type) {
      log.warn('Invalid chart config found: %j', config);
      return false;
    }

    return true;
  });
}

function parseChartConfig(chartConfig, iE = false, configBasePath = '') {
  if (typeof chartConfig !== 'string') {
    return chartConfig;
  }

  let fileList = [];
  let confList = [];

  let ob;
  if (chartConfig.startsWith('[') || chartConfig.startsWith('{')) {
    ob = helpers.parseObject(chartConfig, iE, configBasePath);
  }

  if (typeof ob === 'object') {
    confList = makeArray(ob);
  } else {
    const pattern = `{,${chartConfig}}`;
    fileList = glob.sync(pattern, { cwd: configBasePath });
    fileList = fileList.map(file => path.resolve(configBasePath, file));
  }

  const commonPath = findCommonPath(fileList);
  fileList.forEach((file) => {
    let confs;

    try {
      confs = helpers.parseObject(file);
    } catch (e) {
      log.warn(e);
    }

    if (typeof confs !== 'object') {
      return;
    }

    confs = makeArray(confs);

    let group = path.dirname(removeCommonPath(file, commonPath));
    if (group === '.') group = '';
    if (confs.length > 1 && fileList.length > 1) {
      group = path.join(group, path.parse(file).name);
    }

    confs = confs.map((con) => {
      const fcon = con;
      fcon.group = group;
      return fcon;
    });

    confList.push(...confs);
  });

  confList = validateChartConfig(confList);

  if (confList.length < 1) {
    confList = undefined;
  }

  if (!confList && !iE) {
    log.error(`No chart config was found in ${chartConfig}`);
    process.exit(1);
  }

  return confList;
}

function parseResources(resources, iE = false, configBasePath = '') {
  const res = helpers.parseObject(resources, iE, configBasePath);
  if (!res) return res;

  if (
    typeof resource === 'string' &&
    (resources.endsWith('.json') || resources.endsWith('.js'))
  ) {
    res.resolvePath = path.resolve(path.dirname(resources));
    return res;
  }

  if (typeof res === 'object' && configBasePath) {
    res.resolvePath = path.resolve(configBasePath);
    return res;
  }

  res.resolvedPath = process.cwd();
  return res;
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
  config = helpers.renameProperty(config, 'async-capture', 'asyncCapture');
  config = helpers.renameProperty(config, 'async-capture-timeout', 'asyncCaptureTimeout');
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
  config = helpers.renameProperty(config, 'ftp-config', 'ftpConfig');
  config = helpers.renameProperty(config, 's3-config', 's3Config');

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
  if (lastChar === path.sep) {
    outputFile = path.join(options.outputFile, options.defaultOutputFile);
  } else {
    // eslint-disable-next-line prefer-destructuring
    outputFile = options.outputFile;
  }

  if (outputFile.startsWith('s3:') || outputFile.startsWith('ftp:')) {
    const splitParts = outputFile.split(':');
    outputFile = splitParts.slice(1).join(':');
  }

  return outputFile;
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
  findCommonPath,
  removeCommonPath,
  resolveOutputFile,
  parseChartConfig,
  parseResources,
  sanitizeConfig,
  sanitizeChartConfig,
  sanitizeOutputFile,
  sanitizeType,
  configureLogger,
};
