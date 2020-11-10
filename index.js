'use strict';

process.env.NTBA_FIX_319 = 1;
const Notification = global.NotificationClass;
const TelegramBot = require('node-telegram-bot-api');

class telegramNotifier extends Notification {
  constructor(notification) {
    super(notification);
  }

  async send(notification) {
    try {
      const bot = new TelegramBot(notification.token);
      await bot.sendMessage(notification.chat_id, notification.message);
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
