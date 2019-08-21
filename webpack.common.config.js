const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/index.js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".json"] },
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
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [{
        urlPattern: new RegExp('http://react-cdp-api.herokuapp.com'),
        handler: 'StaleWhileRevalidate'
      }]
    })
  ]
};
