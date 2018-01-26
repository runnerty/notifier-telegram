"use strict";

const Notification = global.NotificationClass;
const TelegramBot = require("node-telegram-bot-api");

class telegramNotifier extends Notification {
  constructor(notification) {
    super(notification);
  }

  send(notification) {
    let _this = this;
    let bot = new TelegramBot(notification.token);
    bot.sendMessage(notification.chat_id, notification.message)
      .then(function () {
        _this.end();
      });
  }
}

module.exports = telegramNotifier;