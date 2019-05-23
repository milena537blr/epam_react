const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  devtool: 'source-map',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },

  resolve: {
    extensions: ['.js']
  },

  watch: false
}