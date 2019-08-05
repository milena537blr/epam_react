import { combineReducers } from "redux";
import { movieReducer as movies } from "./movieReducer";
import { searchReducer as filters } from "./searchReducer";

const rootReducer = combineReducers({
  movies,
  filters
});

export { rootReducer };
