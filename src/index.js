const bundle = require('./presets/bundle');
const bundleWithDeps = require('./presets/bundle-with-deps');
const entries = require('./configs/entries');
const externals = require('./configs/externals');
const output = require('./configs/output');

module.exports = {
  bundle,
  bundleWithDeps,
  entries,
  externals,
  output
};
