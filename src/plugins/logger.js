const bunyan = require('bunyan');
const hapiBunyan = require('hapi-bunyan');

const config = {
  register: hapiBunyan,
  options: {
    logger: bunyan.createLogger({ name: 'hajar', level: 'debug' })
  }
};

module.exports = config;
