/* eslint-disable global-require, import/no-dynamic-require */

const fs = require('fs');
const path = require('path');
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

function tryRequire(file, ignoreException = false) {
  let data;

  try {
    data = require(path.resolve(file));
  } catch (e) {
    if (ignoreException) return undefined;

    log.error('File not found:', file);
    process.exit(1);
  }

  return data;
}

function tryReadFile(file, ignoreException = false) {
  let data;

  try {
    data = fs.readFileSync(path.resolve(file));
  } catch (e) {
    if (ignoreException) return undefined;

    log.error('File not found:', file);
    process.exit(1);
  }

  return data;
}

function ifExists(file, ignoreException = false) {
  if (typeof file !== 'string') {
    return file;
  }

  if (fs.existsSync(file)) {
    return file;
  }

  if (ignoreException) return undefined;

  log.error('File does not exists:', file);
  process.exit(1);

  return undefined;
}

function parseObject(val, ignoreException = false) {
  if (typeof val !== 'string') {
    return val;
  }

  const json = tryParseJSON(val, true);

  if (json) {
    return json;
  }

  if (path.extname(val) === '.json') {
    return tryParseJSON(tryReadFile(val, ignoreException), ignoreException);
  }

  if (path.extname(val) === '.js') {
    return tryRequire(val, ignoreException);
  }

  return val;
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
  if (finaloptions.chartConfig &&
  !finaloptions.templateFilePath &&
  !finaloptions.inputFile) {
    return TOTAL_UNIT + finaloptions.chartConfig.length + CHART_CONFIG_LOAD_EVENT_COUNT;
  } else if (finaloptions.chartConfig &&
  finaloptions.templateFilePath &&
  !finaloptions.inputSVG &&
  finaloptions.type !== 'html') {
    return TOTAL_UNIT + 1 + CHART_CONFIG_LOAD_EVENT_COUNT;
  } else if (finaloptions.chartConfig &&
  finaloptions.templateFilePath &&
  !finaloptions.inputSVG &&
  finaloptions.type === 'html') {
    return TOTAL_UNIT + 1;
  } else if (!finaloptions.chartConfig &&
  !finaloptions.templateFilePath &&
  finaloptions.inputSVG) {
    return TOTAL_UNIT + 2;
  }
  return TOTAL_UNIT;
}

module.exports = {
  parseBool,
  parseObject,
  ifExists,
  findDotSeparated,
  renameProperty,
  calculateTotalUnits,
};
