<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>


# Telegram notifier for [Runnerty]:

### Installation:
```bash
npm i @runnerty/notifier-telegram
```

### Configuration sample:
Add in [config.json]:
```json
{
  "id": "telegram_default",
  "type": "@runnerty-notifier-telegram",
  "token": "ABC123",
  "chat_id": "ABC123"
}
```

### Plan sample:
Add in [plan.json]:
```json
{
  "id": "telegram_default",
  "message": "Process :PROCESS_ID Running!"
}
```

[Runnerty]: https://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/notifier-telegram.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/notifier-telegram
[npm-image]: https://img.shields.io/npm/v/@runnerty/notifier-telegram.svg
[david-badge]: https://david-dm.org/runnerty/notifier-telegram.svg
[david-badge-url]: https://david-dm.org/runnerty/notifier-telegram
[config.json]: https://docs.runnerty.io/config/
[plan.json]: https://docs.runnerty.io/plan/
