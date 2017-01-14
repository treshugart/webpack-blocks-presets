module.exports = function prod () {
  return process.argv.indexOf('-p') > -1;
}
