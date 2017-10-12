const winston = require('winston');

const levelMap = {
  0: 'disabled',
  1: 'errors',
  2: 'warnings',
  3: 'notices',
  4: 'verbose',
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
