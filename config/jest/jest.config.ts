export default {
  clearMocks: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  globals: {
    __IS_DEV__: true,
    __API__: '',
  },
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>config/jest/jestEmptyComponent.tsx',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>src'],
  reporters: [
    'default',
    [
      '<rootDir>/node_modules/jest-html-reporter',
      {
        outputPath: '<rootDir>/reports/tests/unit/index.html',
        pageTitle: 'Unit tests report',
      },
    ],
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
};
