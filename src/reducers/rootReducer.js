import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { moviesReducer as data } from "./moviesReducer";
import { searchReducer as filters } from "./searchReducer";
import { moviesSaga } from "./moviesReducer";

function* rootSaga() {
  yield all([moviesSaga()]);
}

const rootReducer = combineReducers({
  data,
  filters
});

export { rootReducer, rootSaga };
