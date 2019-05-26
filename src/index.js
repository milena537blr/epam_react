import React from "react";
import ReactDOM from "react-dom";
import { App, Component3 } from "./app.js";

ReactDOM.render(
  <App />,
  document.getElementById('root1')
)

ReactDOM.render(
  React.createElement(Component3, {name: 'React.createElement'}, null),
  document.getElementById('root2')
);