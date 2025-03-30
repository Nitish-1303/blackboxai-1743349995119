export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-react'
      ]
    }]
  }
};