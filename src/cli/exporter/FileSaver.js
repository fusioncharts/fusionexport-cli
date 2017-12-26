const path = require('path');
const fs = require('fs');
const util = require('util');
const mkdirp = require('mkdirp');
const S3FS = require('s3fs');
const Ftp = require('promise-ftp');
const config = require('../config');
const MessageBus = require('./MessageBus');

class FileSaver {
  constructor(options) {
    this.options = options;
    this.mkdirp = util.promisify(mkdirp);
    this.messageBus = new MessageBus();
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
      const outPath = path.resolve(path.format({
        dir: outputFileDir,
        base: file.realName,
      }));

      await this.mkdirp(path.dirname(outPath));
      const fileDecoded = Buffer.from(file.fileContent, 'base64');
      fs.writeFileSync(outPath, fileDecoded);
      this.messageBus.put(outPath);
    });

    await Promise.all(promiseBag);
    this.messageBus.writeMessages();
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

      const dir = path.dirname(outPath);
      if (dir !== '.') await s3fs.mkdirp(dir);
      const fileDecoded = Buffer.from(file.fileContent, 'base64');
      await s3fs.writeFile(outPath, fileDecoded);
      this.messageBus.put(`s3:${outPath}`);
    });

    await Promise.all(promiseBag);
    this.messageBus.writeMessages();
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
      const fileDecoded = Buffer.from(file.fileContent, 'base64');
      await ftp.put(fileDecoded, outPath);
      this.messageBus.put(`ftp:${outPath}`);
    });

    await Promise.all(promiseBag);
    this.messageBus.writeMessages();
    await ftp.end();
  }
}

module.exports = FileSaver;
