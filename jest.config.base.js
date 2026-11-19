const { createCjsPreset } = require('jest-preset-angular/presets');

module.exports = {
  ...createCjsPreset(),
  setupFilesAfterEnv: ['<rootDir>/../../setup-jest.ts'],
  // Run the specs against the library sources, so tests don't depend
  // on a previously built package in dist/ (mirrors the tsconfig.spec
  // path mappings).
  moduleNameMapper: {
    '^@triangular/font-awesome-icons$':
      '<rootDir>/../font-awesome-icons-lib/src/public_api.ts',
    '^@triangular/font-awesome-icons/(.*)$':
      '<rootDir>/../font-awesome-icons-lib/src/$1',
  },
};
