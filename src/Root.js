import 'isomorphic-fetch';
import 'babel-polyfill';
import React from "react";
import { hot } from 'react-hot-loader';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import { Loading } from "./components/Loading/Loading";
import { PersistGate } from "redux-persist/lib/integration/react";

const Root = ({ Router, persistor, store, history }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading />}>
      <Router history={history}>
        <Route component={App} />
      </Router>
    </PersistGate>
  </Provider>
);

export default hot(module)(Root);
