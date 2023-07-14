module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: [],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
};
