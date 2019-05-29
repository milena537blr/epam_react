const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    main: './src/index.js'
  },
  mode: 'production',
  target: 'web',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: { minimize: true }
        }]
      },
      {
        // Loads images into CSS and Javascript files
        test: /\.jpg$/,
        use: [{loader: "url-loader"}]
      },
      {
        // Loads CSS into a file when you import it via Javascript
        // Rules are set in MiniCssExtractPlugin
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};