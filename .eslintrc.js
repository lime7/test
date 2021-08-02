
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  // add your custom rules here
  rules: {
    'no-unused-vars': 'off'
  }
}
