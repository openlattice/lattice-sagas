const PACKAGE = require('../../package.json');

module.exports = {
  coveragePathIgnorePatterns: [
    '<rootDir>/src/utils/MockDataUtils.js',
    '<rootDir>/src/utils/testing/TestUtils.js'
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  globals: {
    __VERSION__: PACKAGE.version
  },
  rootDir: '../..'
};
