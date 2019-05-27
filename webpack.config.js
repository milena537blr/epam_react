const path = require('path');
const webpack = require("webpack");

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  devtool: 'source-map',
  mode: "development",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: { extensions: ["*", ".js", ".jsx"] },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },

  /* devServer: {
    contentBase: path.join(__dirname, "dist/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  }, */

  plugins: [new webpack.HotModuleReplacementPlugin()]
}