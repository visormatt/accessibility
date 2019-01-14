/**
 * @external https://goo.gl/fhrRke
 * @description We store all of our JEST configuration in here vs. our
 * package.json as we require a fair amount of configuration
 */
module.exports = {
  /**
   * @external https://goo.gl/oD765e
   * @description This option tells Jest that all imported modules in your
   * tests should be mocked automatically. All modules used in your tests will
   * have a replacement implementation, keeping the API surface.
   */
  automock: false,

  /**
   * @external https://goo.gl/hbjyKW
   * @description Indicates whether the coverage information should
   * be collected while executing the test.
   */
  collectCoverage: false,

  /**
   * @external https://goo.gl/VBULZE
   * @description An array of glob patterns indicating a set of files
   * for which coverage information should be collected
   */
  collectCoverageFrom: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.tsx'],

  /**
   * @external https://goo.gl/6ydeXP
   * @description The directory where Jest should output its coverage files.
   */
  coverageDirectory: '<rootDir>/build/coverage',

  /**
   * @external https://goo.gl/pMhCGx
   * @description A list of reporter names that Jest uses when writing
   * coverage reports. Any istanbul reporter can be used.
   */
  coverageReporters: ['lcov', 'json', 'cobertura'],

  /**
   * @external https://goo.gl/v7RLxT
   * @description This will be used to configure minimum threshold
   * enforcement for coverage results. By setting this threshold we can
   * easily fail builds that don't maintain a specified coverage level
   */
  // coverageThreshold: {
  //   global: {
  //     branches: 45,
  //     functions: 50,
  //     lines: 70,
  //     statements: 70
  //   }
  // },

  /**
   * @external https://goo.gl/LFWXti
   * @description A set of global variables that need to be available
   * in all test environments.
   */
  globals: {
    mount: true,
    render: true,
    shallow: true
  },

  /**
   * @external https://goo.gl/fhrRke
   * @description An array of directory names to be searched recursively
   * up from the requiring module's location
   */
  moduleDirectories: ['node_modules'],

  /**
   * @external https://goo.gl/PoKsCn
   * @description An array of file extensions your modules use. If you require
   * modules without specifying a file extension, these are the extensions Jest
   * will look for.
   */
  moduleFileExtensions: ['css', 'js', 'jsx', 'json', 'node', 'ts', 'tsx'],

  /**
   * @external https://goo.gl/FevJN9 ~ mock CSS modules
   * @external https://goo.gl/tMECYz ~ moduleNameMapper docs
   * @description Used to resolve modules paths based on webpack aliases and to
   * mock our CSS modules so that we can test for the string name in our tests.
   * NOTE: The order in which mapping are defined matters. Patterns are checked
   * one by one until one fits. The most specific rule should be listed first.
   * If you want to make changes to this `moduleNameMapper` object, please read
   * this doc ~ https://goo.gl/wSqzro
   */
  moduleNameMapper: {},

  /**
   * @external https://goo.gl/g2ZT3t
   * @description If a given module's path matches any of the patterns,
   * it will not be require()-able in the test environment.
   */
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],

  /**
   * @external https://goo.gl/HKbnPx
   * @description A reporter that creates compatible junit xml files for CI.
   */
  reporters: ['default'],

  /**
   * @external https://goo.gl/cLJNLu
   * @description these scripts will be executed in the testing environment
   * immediately before executing the test code itself.
   */
  setupFiles: [],

  /**
   * @external https://www.npmjs.com/package/enzyme-to-json
   * @description The serializer is the recommended way to use enzyme-to-json,
   * the installation and usage of it is very easy and allows you to write
   * clean and simple snapshot tests.
   */
  snapshotSerializers: [],

  /**
   * @external https://goo.gl/x1mEBC
   * @description override the default matching regEx so we can limit new
   * tests to use `.test.js` extenion. In doing so we quickly know if its a
   * `jest` spec vs. mocha
   */
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],

  /**
   * @external https://goo.gl/qoKy1U
   * @description A transformer is a module that provides a synchronous
   * function for transforming source files.
   */
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },

  /**
   * @default /node_modules/
   * @external https://goo.gl/3j69X7
   * @type An array of regexp pattern strings that are matched against all source
   * file paths before transformation. If the test path matches any of the patterns,
   * it will not be transformed.
   */
  transformIgnorePatterns: [],

  /**
   * @external https://goo.gl/8hnQTn
   * @description Indicates whether each individual test should be
   * reported during the run.
   */
  verbose: false
};
