const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  displayName: 'example-app',
  coverageDirectory: '<rootDir>/../../coverage/example-app',
  collectCoverageFrom: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/main.ts'],
};
