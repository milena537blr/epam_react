import React from "react";
import ReactDOM from "react-dom";
import { App, Component3 } from "./app.js";

ReactDOM.render(
  <App />,
  window.document.getElementById('root1')
)

ReactDOM.render(
  React.createElement(Component3, { name: 'React.createElement' }, null),
  window.document.getElementById('root2')
);

// eslint-disable-line no-undef 
