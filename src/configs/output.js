const { setOutput } = require('@webpack-blocks/webpack2');
const pack = require('../utils/pack');

module.exports = function output (userDefinedOutput) {
  const { name } = pack();
  const temp = {
    filename: '[name]',
    library: name,
    libraryTarget: 'umd',
    path: './',
    sourceMapFilename: '[file].map',
    ...userDefinedOutput)
  };
  return setOutput(temp);
}
