const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  displayName: 'example-app-standalone',
  coverageDirectory: '<rootDir>/../../coverage/example-app-standalone',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/main.ts'],
};
