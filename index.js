'use strict';

process.env.NTBA_FIX_319 = 1;
process.env.NTBA_FIX_350 = 1;

const Notifier = require('@runnerty/module-core').Notifier;
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

class telegramNotifier extends Notifier {
  constructor(notification) {
    super(notification);
  }

  async send(notification) {
    try {
      const bot = new TelegramBot(notification.token);
      await bot.sendMessage(notification.chat_id, notification.message);
      // Photo
      if (notification.photo) {
        try {
          await fs.promises.access(notification.photo, fs.constants.F_OK);
          const photoStream = fs.createReadStream(notification.photo);
          await bot.sendPhoto(notification.chat_id, photoStream);
        } catch (err) {
          this.logger.log('warn', `Telegram Notifier: Photo not found: ${notification.photo}`);
        }
      }
      // Video
      if (notification.video) {
        try {
          await fs.promises.access(notification.video, fs.constants.F_OK);
          const videoStream = fs.createReadStream(notification.video);
          await bot.sendVideo(notification.chat_id, videoStream);
        } catch (err) {
          this.logger.log('warn', `Telegram Notifier: Video not found: ${notification.video}`);
        }
      }
      this.end();
    } catch (err) {
      const endOptions = {
        end: 'error',
        messageLog: `Telegram notifier: ${err.message}`
      };
      this.end(endOptions);
    }
  }
}

module.exports = telegramNotifier;
