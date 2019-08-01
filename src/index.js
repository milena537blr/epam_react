import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./styles/global.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import routes from "./routes";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  window.document.getElementById("root")
);
