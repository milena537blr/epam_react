import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
// import webpackHotMiddleware from "webpack-hot-middleware";
import configFunction from "../../webpack.config";
// import favicon from 'serve-favicon';

const config = configFunction();
const app = express(),
  // DIST_DIR = __dirname,
  // HTML_FILE = path.join(DIST_DIR, "index.html"),
  compiler = webpack(config);

app.use(
  webpackDevMiddleware(
    compiler /* , {
    publicPath: config.output.publicPath
  } */
  )
);

// app.use(webpackHotMiddleware(compiler));
// app.use(favicon(path.join('assets','public','favicon.ico')));

/* app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
}); */

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});
