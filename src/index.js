import React from "react";
import ReactDOM from "react-dom";
// import data from "./data/data.json";
// import App from "./components/App/App";
import "./styles/global.scss";
import { Router } from "react-router";
import routes from "./routes";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} routes={routes} />,
  window.document.getElementById("root")
);
