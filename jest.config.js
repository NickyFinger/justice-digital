const ignore = [
  '<rootDir>/apps/filing-e2e/src/integration/app.spec.ts',
  '<rootDir>/apps/adjournments-e2e/src/integration/app.spec.ts',
];
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!jestGlobalMocks.ts',
    '!setupJest.ts',
    '!**/test.ts',
    '!**/index.ts',
  ],
  coveragePathIgnorePatterns: ignore,
  coverageReporters: ['html'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  resolver: '@nrwl/jest/plugins/resolver',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  testPathIgnorePatterns: ignore,
  //will show warning, still outstanding nx bug:
  //https://github.com/nrwl/nx/issues/1343
  setupFilesAfterEnv: ['./test-setup.ts'],
  //jest specific config
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
      diagnostics: false,
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/InlineHtmlStripStylesTransformer.js',
      ],
    },
  },
};
