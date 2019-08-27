module.exports = {
  plugins: ["react", "jsx-a11y", "jest"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended"
    // 'airbnb'
  ],
  parser: "babel-eslint",
  globals: {
    window: true,
    fetch: false,
    workbox: true
  },
  env: {
    es6: true
  }
};
