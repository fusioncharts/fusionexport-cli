const path = require('path');
const fs = require('fs');
const util = require('util');
const mkdirp = require('mkdirp');
const S3FS = require('s3fs');
const Ftp = require('promise-ftp');
const log = require('../log');
const config = require('../config');

class FileSaver {
  constructor(options) {
    this.options = options;
  }

  async saveOutputFiles() {
    if (this.options.outputTo === 'local') {
      await this.saveToLocal();
      return;
    }

    if (this.options.outputTo === 's3') {
      await this.saveToS3();
      return;
    }

    if (this.options.outputTo === 'ftp') {
      await this.saveToFTP();
    }
  }

  async saveToLocal() {
    log.info('Saving file to local file system');

    const mkdirpPr = util.promisify(mkdirp);
    const outputFileDir = path.dirname(this.options.outputFile);

    const promiseBag = this.options.outputFileBag.map(async (file) => {
      const outPath = path.format({
        dir: outputFileDir,
        base: file.realName,
      });

      await mkdirpPr(path.dirname(outPath));

      fs.createReadStream(file.tmpPath).pipe(fs.createWriteStream(outPath));
      log.info(`Output file: ${outPath}`);
    });

    await Promise.all(promiseBag);
  }

  async saveToS3() {
    log.info('Saving files to S3');

    const s3Config = config('s3');

    const s3fs = new S3FS(s3Config.bucket, {
      accessKeyId: s3Config.accessKey,
      secretAccessKey: s3Config.secretAccessKey,
    });

    const promiseBag = [];
    this.options.outputFileBag.forEach((file) => {
      promiseBag.push(s3fs.writeFile(file.realName, fs.readFileSync(file.tmpPath)));
      log.info(`Output file: ${file.realName}`);
    });

    await Promise.all(promiseBag);
  }

  async saveToFTP() {
    log.info('Saving files to FTP');

    const ftpConfig = config('ftp');
    const ftp = new Ftp();

    await ftp.connect({
      host: ftpConfig.host,
      port: ftpConfig.port,
      user: ftpConfig.user,
      password: ftpConfig.password,
    });

    const outputFileDir = path.dirname(this.options.outputFile);
    await ftp.mkdir(outputFileDir, true);

    const promiseBag = [];
    this.options.outputFileBag.forEach((file) => {
      const outPath = path.format({
        dir: outputFileDir,
        base: file.realName,
      });

      promiseBag.push(ftp.put(file.tmpPath, outPath));
      log.info(`Output file: ${outPath}`);
    });

    await Promise.all(promiseBag);
    await ftp.end();
  }
}

module.exports = FileSaver;
