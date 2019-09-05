import "isomorphic-fetch";
import "babel-polyfill";
import React from "react";
import PropTypes from 'prop-types';
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import App from "./components/App/App";
import "./styles/global.scss";
import { Loading } from "./components/Loading/Loading";
import { PersistGate } from "redux-persist/lib/integration/react";

const Root = ({ Router, persistor, context, store, history }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading />}>
      <Router history={history} context={context}>
        <Route component={App} />
      </Router>
    </PersistGate>
  </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  context: PropTypes.shape({
    url: PropTypes.string
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired
};

Root.defaultProps = {
  context: null
};

export default hot(module)(Root);
