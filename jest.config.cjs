module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/MultiStepForm/**',
    '!src/**/**/styles.ts',
    '!src/**/**/styles.tsx',
    '!src/**/**ICON_FINISH.tsx',
    '!src/**/**PLAN_ICONS.tsx',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(^(@emotion/styled|@mui/material|@mui)/)).*/',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.cjs',
  },
  moduleNameMapper: {
    '@mui/styled-engine': '<rootDir>/node_modules/@mui/styled-engine-sc',
  },
};
