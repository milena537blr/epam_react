const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: ["webpack-hot-middleware/client?reload=true"]
  },
  mode: "development",
  name: "client",
  target: "web",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[local]--[hash:base64:5]"
            }
          },
          "sass-loader"
        ]
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      excludeChunks: ["server"]
    })
  ]
};
