const HtmlWebPackPlugin = require ('html-webpack-plugin');
// const UglifyJsPlugin = require ('uglifyjs-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require ('optimize-css-assets-webpack-plugin');
const WorkboxPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
  mode: 'production',
  target: 'web',
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
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {minimize: true},
          },
        ],
      },
      {
        // Loads images into CSS and Javascript files
        test: /\.jpg$/,
        use: [{loader: 'url-loader'}],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin ({
      template: './src/index.html',
      filename: './index.html',
    }),
    new WorkboxPlugin.InjectManifest({
      globPatterns: ["dist/*.{jpg,js,png,html,css}"],
      swDest: "service-worker.js",
      swSrc: path.join(__dirname, "service-worker.js")
    })
  ],
};
