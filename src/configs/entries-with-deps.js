const { entryPoint } = require('@webpack-blocks/webpack2');
const min = require('../utils/min');

module.exports = function entriesWithDeps () {
  return entryPoint({
    [`dist/index-with-deps${min()}.js`]: './src/index.js'
  });
}
