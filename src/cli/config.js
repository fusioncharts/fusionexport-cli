const fs = require('fs');
const path = require('path');
const os = require('os');

const HOME_DIR = os.homedir();

const DEFAULT_FOLDER_NAME = 'fusionexport_config';
const DEFAULT_CONFIG_LOC = path.join(HOME_DIR, DEFAULT_FOLDER_NAME);
const FTP_FILE_NAME = 'ftp.json';
const S3_FILE_NAME = 's3.json';

function config(file) {
  let filePath;
  if (file === 'ftp') {
    filePath = path.join(DEFAULT_CONFIG_LOC, FTP_FILE_NAME);
  } else if (file === 's3') {
    filePath = path.join(DEFAULT_CONFIG_LOC, S3_FILE_NAME);
  } else {
    filePath = path.resolve(path.join(__dirname, '..', '..', 'config', `${file}.json`));
  }
  let fileContent;
  try {
    fileContent = JSON.parse(fs.readFileSync(filePath));
  } catch (e) {
    // eslint-disable-next-line
    console.log(e.toString());
    process.exit(1);
  }
  return fileContent;
}

module.exports = config;
