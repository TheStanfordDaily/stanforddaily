const withTM = require('next-transpile-modules');

module.exports = withTM({
  // TODO: I'm not sure exactly why we need this.
  transpileModules: ["^@emotion"]
});
