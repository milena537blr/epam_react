import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import { configureStore } from './store/configureStore';
import { configurePersistor } from './store/configureStore';
import { createBrowserHistory } from "history";
  
function renderHTML(html, preloadedState) {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>React App</title>
          <style>
            .app {
              height: 100%;
              display: flex;
              flex-direction: column;
            }
          </style>
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root" role="application" class="app">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}


export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const persistor = configurePersistor();
    // This context object contains the results of the render
    const context = {};
    // const history = createBrowserHistory();

    const renderRoot = () => (
      <Root
        context={context}
        location={req.url}
        // history={history}
        Router={StaticRouter}
        store={store}
        persistor={persistor}
      />
    );

    renderToString(renderRoot());

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(renderRoot());
    const preloadedState = store.getState();

    res.send(renderHTML(htmlString, preloadedState));
  };
}