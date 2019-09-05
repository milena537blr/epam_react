import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

const configureStore = initialState => {
  const store = createStore(
    pReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
  return store;
};

const configurePersistor = initialState => {
  const store = createStore(
    pReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );
  const persistor = persistStore(store);
  return persistor;
};

export { configureStore, configurePersistor };
