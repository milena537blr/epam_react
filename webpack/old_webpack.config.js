const merge = require("webpack-merge");
const common = require("./old_webpack.config.common");
const webpackProdConfig = require("../webpack.prod.config");
const webpackDevConfig = require("./old_webpack.dev.config");

module.exports = env => {
  let config;
  if (env) {
    config = env.production ? webpackProdConfig : webpackDevConfig;
  } else {
    config = webpackDevConfig;
  }
  return merge(common, config);
};
