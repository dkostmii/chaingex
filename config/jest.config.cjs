const path = require('path');

const rootDir = path.resolve(__dirname, '..');

const configDir = path.join(rootDir, 'config');

module.exports = {
  rootDir: path.join(rootDir, 'tests'),
  testRegex: "^.*\.(spec|test)\.[jt]sx?$",
  verbose: true,
  transform: {
    "\\.[jt]sx?$": [
      "babel-jest",
      { configFile: path.join(configDir, '.babelrc') }
    ]
  },
};
