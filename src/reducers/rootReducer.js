import { combineReducers } from "redux";
import { moviesReducer as data } from "./moviesReducer";
import { searchReducer as filters } from "./searchReducer";

const rootReducer = combineReducers({
  data,
  filters
});

export { rootReducer };
