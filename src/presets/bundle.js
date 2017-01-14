const { group, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const entries = require('../configs/entries');
const externals = require('../configs/externals');
const output = require('../configs/output');

module.exports = function bundle () {
  return group([
    babel(),
    entries(),
    externals(),
    output(),
    sourceMaps()
  ]);
}
