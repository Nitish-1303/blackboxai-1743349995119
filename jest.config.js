export default {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './coverage/html-report',
      filename: 'report.html',
      openReport: false,
      pageTitle: 'Test Report',
      logoImgPath: undefined,
      hideIcon: false,
      expand: true
    }]
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.test.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    '/out/'
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { 
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }],
        '@babel/preset-react'
      ],
      plugins: [
        '@babel/plugin-transform-modules-commonjs'
      ]
    }]
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    'jest.config.js',
    '/.next/',
    '/out/',
    '/coverage/'
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(your-module-to-transform)/)'
  ]
};
