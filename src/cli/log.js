const winston = require('winston');

const levelMap = {
  0: 'error',
  1: 'warn',
  2: 'info',
  3: 'verbose',
  4: 'debug',
  5: 'silly',
};

const logger = new (winston.Logger)({
  transports: [
    new winston.transports.Console({
      formatter(options) {
        return (options.message ? options.message : '');
      },
    }),
  ],
});

logger.setLogLevel = (level) => {
  let levelVal = level;

  if (parseInt(level, 10)) {
    levelVal = levelMap[level];
  }

  if (levelVal) {
    logger.transports.console.level = levelVal;
  }
};

logger.setLogPath = (path) => {
  logger.add(winston.transports.File, {
    filename: path,
  });
};

module.exports = logger;
