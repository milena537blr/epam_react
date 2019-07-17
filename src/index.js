import React from "react";
import ReactDOM from "react-dom";
import data from "./data/data.json";
import App from "./components/App/App";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
// import routes from "./routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App data={data} />
  </Router>,
  window.document.getElementById("root")
);
