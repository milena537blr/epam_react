import React from "react";
import ReactDOM from "react-dom";
import data from "./data/data.json";
import App from "./components/App/App";
import "./styles/global.scss";
import { BrowserRouter as Router } from "react-router-dom";
// import routes from "./routes";
import { createBrowserHistory } from "history";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { loadMovies, addTodo } from "./actions/movieActions";

const history = createBrowserHistory();
const store = configureStore();

console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.subscribe(() => console.log(store.getState()));
store.dispatch(loadMovies());
// console.log(loadMovies());
// console.log(addTodo('Learn about store'));
store.dispatch(addTodo('Learn about store'));

// unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  window.document.getElementById("root")
);
