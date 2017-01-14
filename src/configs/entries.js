const { entryPoint } = require('@webpack-blocks/webpack2');
const min = require('../utils/min');

module.exports = function entries () {
  return entryPoint({
    [`dist/index${min()}.js`]: './src/index.js'
  });
}
