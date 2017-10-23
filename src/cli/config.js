const fs = require('fs');
const path = require('path');

function config(file) {
  const filePath = path.resolve(path.join(__dirname, '..', '..', 'config', `${file}.json`));
  return JSON.parse(fs.readFileSync(filePath));
}

module.exports = config;
