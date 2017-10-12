const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');

function config(file) {
  const filePath = path.resolve(appRoot.toString(), `config/${file}.json`);
  return JSON.parse(fs.readFileSync(filePath));
}

module.exports = config;
