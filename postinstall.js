const fs = require('fs');
const path = require('path');
const os = require('os');

const HOME_DIR = os.homedir();
const FTP_FILE_NAME = 'ftp.json';
const S3_FILE_NAME = 's3.json';
const DEFAULT_FOLDER_NAME = 'fusionexport_config';

function copySync(src, dest) {
  if (!fs.existsSync(src)) {
    return false;
  }

  const data = fs.readFileSync(src, 'utf-8');
  fs.writeFileSync(dest, data);
  return true;
}
const DEFAULT_CONFIG_LOC = path.join(HOME_DIR, DEFAULT_FOLDER_NAME);
if (!fs.existsSync(DEFAULT_CONFIG_LOC)) {
  // eslint-disable-next-line
  console.log(`[FusionExport] Creating config folder ${DEFAULT_CONFIG_LOC}`);

  fs.mkdirSync(DEFAULT_CONFIG_LOC);
  const fromFTP = path.join(__dirname, 'config', FTP_FILE_NAME);
  const toFTP = path.join(DEFAULT_CONFIG_LOC, FTP_FILE_NAME);
  copySync(fromFTP, toFTP);
  const fromS3 = path.join(__dirname, 'config', S3_FILE_NAME);
  const toS3 = path.join(DEFAULT_CONFIG_LOC, S3_FILE_NAME);
  copySync(fromS3, toS3);
}
