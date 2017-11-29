/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');
const stackTraceParser = require('stacktrace-parser');
const log = require('./log');

function tryParseJSON(str, ignoreException = false) {
  let data;

  try {
    data = JSON.parse(str);
  } catch (e) {
    if (ignoreException) return undefined;

    log.error('JSON not valid:', str.toString());
    process.exit(1);
  }

  return data;
}

function tryRequire(file, ignoreException = false, basePath = '') {
  let data;

  try {
    data = require(path.resolve(basePath, file));
  } catch (e) {
    if (ignoreException) return undefined;

    const eStack = stackTraceParser.parse(e.stack);
    log.error(`${e.name}: ${e.message} in file ${eStack[0].file} at line number ${eStack[0].lineNumber}`);
    process.exit(1);
  }

  return data;
}

function tryReadFile(file, ignoreException = false, basePath = '') {
  let data;

  try {
    data = fs.readFileSync(path.resolve(basePath, file));
  } catch (e) {
    if (ignoreException) return undefined;

    const eStack = stackTraceParser.parse(e.stack);
    log.error(`${e.name}: ${e.message} in file ${eStack[0].file} at line number ${eStack[0].lineNumber}`);
    process.exit(1);
  }

  return data;
}

function ifExists(file, ignoreException = false, basePath = '') {
  if (typeof file !== 'string') {
    return file;
  }

  const resolvedFile = path.resolve(basePath, file);
  if (fs.existsSync(resolvedFile)) {
    return resolvedFile;
  }

  if (ignoreException) return undefined;

  log.error('File does not exists: ', resolvedFile);
  process.exit(1);

  return undefined;
}

function parseObject(val, iE = false, basePath = '') {
  if (typeof val !== 'string') {
    return val;
  }

  if (path.extname(val) === '.json') {
    return tryParseJSON(tryReadFile(val, iE, basePath), iE);
  }

  if (path.extname(val) === '.js') {
    return tryRequire(val, iE, basePath);
  }

  const json = tryParseJSON(val, iE);

  if (json) {
    return json;
  }

  return val;
}

function parseDimension(val) {
  const parsedVal = parseInt(val, 10);

  if (parsedVal < 0) {
    log.warn('Dimension value must be positive. Using default value.');
    return undefined;
  }

  if (parsedVal === 0) {
    log.warn('Dimension value connot be zero. Using default value.');
    return undefined;
  }

  if (Number.isNaN(parsedVal)) {
    return undefined;
  }

  return parsedVal;
}

function parseBool(val) {
  switch (val) {
    case true:
    case 'true':
    case 1:
    case '1':
      return true;
    case false:
    case 'false':
    case 0:
    case '0':
      return false;
    default:
      return undefined;
  }
}

function findDotSeparated(ob) {
  const list = [];
  const keys = Object.keys(ob);

  keys.forEach((key) => {
    if (key.indexOf('.') > 0) {
      list.push(key);
    }
  });

  return list;
}

function renameProperty(ob, oldName, newName) {
  const fob = ob;

  if (oldName === newName) {
    return fob;
  }

  if (!Object.prototype.hasOwnProperty.call(fob, oldName)) {
    return fob;
  }

  fob[newName] = fob[oldName];
  delete fob[oldName];

  return fob;
}

function calculateTotalUnits(finaloptions) {
  const TOTAL_UNIT = 3;
  const CHART_CONFIG_LOAD_EVENT_COUNT = 3;
  if (
    finaloptions.chartConfig &&
    !finaloptions.templateFilePath &&
    !finaloptions.inputFile
  ) {
    return TOTAL_UNIT + finaloptions.chartConfig.length + CHART_CONFIG_LOAD_EVENT_COUNT;
  } else if (
    finaloptions.chartConfig &&
    finaloptions.templateFilePath &&
    !finaloptions.inputSVG &&
    finaloptions.type !== 'html'
  ) {
    return TOTAL_UNIT + 1 + CHART_CONFIG_LOAD_EVENT_COUNT;
  } else if (
    finaloptions.chartConfig &&
    finaloptions.templateFilePath &&
    !finaloptions.inputSVG &&
    finaloptions.type === 'html'
  ) {
    return TOTAL_UNIT + 1;
  } else if (
    !finaloptions.chartConfig &&
    !finaloptions.templateFilePath &&
    finaloptions.inputSVG
  ) {
    return TOTAL_UNIT + 2;
  } else if (!finaloptions.chartConfig &&
    finaloptions.templateFilePath &&
    !finaloptions.inputSVG) {
    return TOTAL_UNIT + 2;
  }
  return TOTAL_UNIT;
}

function stringifyWithFunctions(object) {
  return JSON.stringify(object, (key, val) => {
    if (typeof val === 'function') {
      return val.toString().replace(/\n/g, ' ');
    }
    return val;
  });
}

module.exports = {
  parseDimension,
  parseBool,
  parseObject,
  ifExists,
  findDotSeparated,
  renameProperty,
  calculateTotalUnits,
  stringifyWithFunctions,
};
