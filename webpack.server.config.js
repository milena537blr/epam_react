const path = require ('path');
const nodeExternals = require ('webpack-node-externals');
// const CleanWebpackPlugin = require ('clean-webpack-plugin');

module.exports = env => {
  const SERVER_PATH = env.production
    ? './src/server/server-prod.js'
    : './src/server/server-dev.js';

  return {
    entry: {
      server: SERVER_PATH,
    },
    output: {
      path: path.join (__dirname, 'dist'),
      publicPath: '/',
      filename: '[name].js',
    },
    mode: "development", // FIXME
    name: 'server',
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    externals: [nodeExternals ()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    // plugins: [new CleanWebpackPlugin ()],
  };
};
