module.exports = {
  plugins: ['react', 'jsx-a11y', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended'
  ],
  parser: 'babel-eslint',
  globals: {
    window: true,
  },
};
