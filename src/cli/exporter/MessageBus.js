const log = require('../log');

const MAX = 10;
class MessageBus {
  constructor() {
    this.messages = [];
  }

  put(msg) {
    if (msg) {
      this.messages.push(msg);
    }
  }

  clear() {
    this.messages = [];
  }

  getAllMessages() {
    return this.messages;
  }

  getMessagesLength() {
    return this.messages.length;
  }

  writeMessages(count = MAX) {
    const loopCount = Math.min(this.getMessagesLength(), count);
    const remaining = this.getMessagesLength() - count;

    log.info('Exported file is saved here:');

    for (let i = 0; i < loopCount; i += 1) {
      log.info(this.messages[i]);
    }

    if (remaining > 0) {
      log.info(`and ${remaining} more...`);
    }
  }
}

module.exports = MessageBus;
