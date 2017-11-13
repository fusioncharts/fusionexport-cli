const winston = require('winston');

const levelMap = {
  0: 'error',
  1: 'warn',
  2: 'info',
  3: 'verbose',
  4: 'debug',
  5: 'silly',
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
