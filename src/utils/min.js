const prod = require('./prod');

module.exports = function () {
  return prod() ? '.min' : '';
}
