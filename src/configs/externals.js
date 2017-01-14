const pack = require('../utils/pack');

module.exports = function externals () {
  const {
    dependencies,
    devDependencies,
    optionalDependencies,
    peerDependencies
  } = pack();
  return () => ({
    externals: Object.keys({
      ...dependencies,
      ...devDependencies,
      ...optionalDependencies,
      ...peerDependencies
    })
  });
}
