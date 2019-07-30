const merge = require ('webpack-merge');
const common = require ('./webpack.common.config');
const webpackProdConfig = require ('./temp-webpack.prod.config');
const webpackDevConfig = require ('./webpack.dev.config');

module.exports = env => {
  let config;
  if (env) {
    config = env.production ? webpackProdConfig : webpackDevConfig;
  } else {
    config = webpackDevConfig;
  }
  return merge (common, config);
};
