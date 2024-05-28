const generateJestConfig = ({ esModules }) => {
  const esModulesList = Array.isArray(esModules) ? esModules.join('|') : esModules
  return {
    coveragePathIgnorePatterns: ['<rootDir>/(.*)/dist'],
    moduleNameMapper: {
      '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    preset: 'ts-jest/presets/default-esm',
    setupFilesAfterEnv: ['jest-sorted', 'jest-extended/all'],
    testRegex: '(/__tests__/.*|(\\.|/)((!perf\\.)test|spec))\\.tsx?$',
    testTimeout: 20000,
    transform: {
      [`(${esModulesList}).+\\.js$`]: 'babel-jest',
      '^.+\\.tsx?$': [
        'ts-jest',
        {
          tsconfig: 'tsconfig.test.json',
        },
      ],
    },
    transformIgnorePatterns: [`./node_modules/(?!${esModulesList})`],
  }
}

module.exports = generateJestConfig({ esModules: ['is-ip', 'ip-regex', 'lodash-es', 'uuid'] })
