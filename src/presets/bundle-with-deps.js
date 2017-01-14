const { group, sourceMaps } = require('@webpack-blocks/webpack2');
const babel = require('@webpack-blocks/babel6');
const entriesWithDeps = require('../configs/entries-with-deps');
const output = require('../configs/output');

module.exports = function bundleWithDeps () {
  return group([
    babel(),
    entriesWithDeps(),
    output(),
    sourceMaps()
  ]);
}
