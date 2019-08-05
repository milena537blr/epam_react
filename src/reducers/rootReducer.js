import { combineReducers } from "redux";
import movies from "./movieReducer";
import filters from "./searchReducer";

const rootReducer = combineReducers({
  movies,
  filters
});

export default rootReducer;
