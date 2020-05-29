module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    // 'react',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js']}],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'import/prefer-default-export': 0,
    'prettier/prettier': ['error'],
    'react/jsx-curly-newline': [0],
    // TODO see if it would be feasible to error on this
    "@typescript-eslint/explicit-function-return-type": [0, {
      allowExpressions: true
    }],
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/member-delimiter-style': [0]
  }
};
