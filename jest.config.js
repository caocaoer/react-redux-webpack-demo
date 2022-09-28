// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  globals: {
    NODE_ENV: 'test',
  },
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  // Indicates whether each individual test should be reported during the run
  verbose: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The directory where Jest should output its   files
  coverageDirectory: 'coverage',
  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/src/**/*.test.(js|ts|jsx|tsx)'],
  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: ['node_modules', 'src'],
  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'js', 'tsx', 'jsx', 'json', 'vue'],
  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts|jsx|tsx)$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },
};
