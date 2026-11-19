const base = require('../../jest.config.base.js');

module.exports = {
  ...base,
  displayName: 'font-awesome-icons-lib',
  coverageDirectory: '<rootDir>/../../coverage/font-awesome-icons-lib',
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/icons/**',
    '!src/lib/icons/**',
  ],
};
