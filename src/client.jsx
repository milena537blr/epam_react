import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Root from "./Root";
import { configureStore } from "../src/store/configureStore";
import { configurePersistor } from "../src/store/configureStore";
import { createBrowserHistory } from "history";

const store = configureStore(window.PRELOADED_STATE);
const persistor = configurePersistor(window.PRELOADED_STATE);
const history = createBrowserHistory();

const root = <Root Router={BrowserRouter} store={store} persistor={persistor} history={history} />;

hydrate(root, document.getElementById("root"));
