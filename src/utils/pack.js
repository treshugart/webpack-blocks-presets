const path = require('path');

module.exports = function pack () {
  return require(path.join(process.cwd(), 'package.json'));
}
