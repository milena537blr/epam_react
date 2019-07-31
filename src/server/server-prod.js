import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';

const app = express (),
  DIST_DIR = __dirname,
  HTML_FILE = path.join (DIST_DIR, 'index.html');

app.use (express.static (DIST_DIR));
app.use(favicon(path.join('assets','public','favicon.ico')));

app.get ('*', (req, res) => {
  res.sendFile (HTML_FILE);
});

const PORT = process.env.PORT || 8080;

app.listen (PORT, () => {
  console.log (`App listening to ${PORT}....`);
  console.log ('Press Ctrl+C to quit.');
});
