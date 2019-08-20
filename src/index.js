import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./styles/global.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { persistor, store } from "./store/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Loading } from "./components/Loading/Loading";

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading />}>
      <Router history={history}>
        <Route component={App} />
      </Router>
    </PersistGate>
  </Provider>,
  window.document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
