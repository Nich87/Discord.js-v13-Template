const { readdirSync } = require('fs');
const path = require('path');

const handlers = readdirSync(__dirname)
  .reduce((handlers, file_name) => {
    // js以外と、index.jsは除外。
    if (!file_name.endsWith('.js') || file_name === 'index.js') {
      return handlers;
    }

    const module_name = file_name.replace(/\.js$/, '');
    handlers[module_name] = require(path.join(__dirname, file_name));

    console.info(`Set handler '${file_name}'`);

    return handlers;
  }, {});

module.exports = handlers;
