const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const webpackProdConfig = require('./webpack.prod.config');
const webpackDevConfig = require('./webpack.dev.config');

module.exports = (env) => {
  const config = (env.production) ? webpackProdConfig : webpackDevConfig;
  return merge(common, config);
}
