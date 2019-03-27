module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    "eslint:recommended",
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'semi': 0,
    'vue/html-quotes': 0,
    'no-tabs': 0,
    'no-unused-vars': 0,
    'vue/html-indent': 0,
    'arrow-parens': 0,
    'vue/attributes-order': 0,
    'vue/max-attributes-per-line': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
