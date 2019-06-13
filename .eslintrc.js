module.exports = {
  "plugins": [ "react", "jsx-a11y"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "parser": "babel-eslint",
  "globals": {
    "window": true
  }
};