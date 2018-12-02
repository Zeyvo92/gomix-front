module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react'],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
  },
  env: {
    browser: true,
    node: true,
  },
};
