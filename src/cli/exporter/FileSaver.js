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
    this.mkdirp = util.promisify(mkdirp);
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
    const outputFileDir = path.dirname(this.options.outputFile);

    const promiseBag = this.options.outputFileBag.map(async (file) => {
      const outPath = path.format({
        dir: outputFileDir,
        base: file.realName,
      });

      await this.mkdirp(path.dirname(outPath));
      fs.createReadStream(file.tmpPath).pipe(fs.createWriteStream(outPath));
      log.info(`Check files here ${outPath}`);
    });

    await Promise.all(promiseBag);
  }

  async saveToS3() {
    const s3Config = config('s3');

    const s3fs = new S3FS(s3Config.bucket, {
      accessKeyId: s3Config.accessKey,
      secretAccessKey: s3Config.secretAccessKey,
    });

    const outputFileDir = path.dirname(this.options.outputFile);

    const promiseBag = this.options.outputFileBag.map(async (file) => {
      const outPath = path.format({
        dir: outputFileDir,
        base: file.realName,
      });

      await s3fs.mkdirp(path.dirname(outPath));
      await s3fs.writeFile(outPath, fs.readFileSync(file.tmpPath));
      log.info(`Check files here ${outPath}`);
    });

    await Promise.all(promiseBag);
  }

  async saveToFTP() {
    const ftpConfig = config('ftp');
    const ftp = new Ftp();

    await ftp.connect({
      host: ftpConfig.host,
      port: ftpConfig.port,
      user: ftpConfig.user,
      password: ftpConfig.password,
    });

    const outputFileDir = path.dirname(this.options.outputFile);

    const promiseBag = this.options.outputFileBag.map(async (file) => {
      const outPath = path.format({
        dir: outputFileDir,
        base: file.realName,
      });

      await ftp.mkdir(path.dirname(outPath), true);
      await ftp.put(file.tmpPath, outPath);
      log.info(`Check files here ${outPath}`);
    });

    await Promise.all(promiseBag);
    await ftp.end();
  }
}

module.exports = FileSaver;
