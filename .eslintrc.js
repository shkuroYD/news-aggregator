module.exports = {
  extends: 'airbnb',
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    document: 'readonly',
  },
  rules: {
    'import/extensions': 'off',
  },
};
