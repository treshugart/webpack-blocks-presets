const { entryPoint } = '@webpack-blocks/webpack2';
const min = '../utils/min';

module.exports = function entries () {
  return entryPoint({
    [`dist/index${min()}.js`]: './src/index.js'
  });
}
