const winston = require('winston');

const levelMap = {
  0: 'emerg',
  1: 'alert',
  2: 'crit',
  3: 'error',
  4: 'warning',
  5: 'notice',
  6: 'info',
  7: 'debug',
};

winston.setLogLevel = (level) => {
  let levelVal = level;

  if (parseInt(level, 10)) {
    levelVal = levelMap[level];
  }

  winston.level = levelVal;
};

winston.setLogPath = (path) => {
  winston.add(winston.transports.File, { filename: path });
};

module.exports = winston;
