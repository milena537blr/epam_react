import { combineReducers } from "redux";
import movies from "./movieReducer";
import search from "./searchReducer";

const rootReducer = combineReducers({
  movies,
  search
});

export default rootReducer;
