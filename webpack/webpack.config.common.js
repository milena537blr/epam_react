const path = require("path");
const webpack = require("webpack");

const isDevMod = process.env.NODE_ENV === "development";

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: "js/[name].js",
    path: path.resolve("./dist")
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
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(svg|png|jpg|jpeg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]?[hash]"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    isDevMod
      ? new webpack.NamedModulesPlugin()
      : new webpack.HashedModuleIdsPlugin()
  ]
};
