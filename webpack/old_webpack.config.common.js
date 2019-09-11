const path = require("path");
const webpack = require('webpack');

// const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: process.env.NODE_ENV,
/*   entry: {
    main: ["./src/index.js"]
  }, */
  output: {
    filename: "[name].js"
    path: path.join(__dirname, "dist"),
    // publicPath: "/",
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom"
    }
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
