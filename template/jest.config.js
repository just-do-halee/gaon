module.exports = {
  coverageDirectory: 'coverage',
  coverageReporters: ['json-summary', 'text', 'lcov'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: ['\\.pnp\\.[^\\/]+$'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
