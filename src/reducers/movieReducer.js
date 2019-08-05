import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

const movieReducer = (state = initialState.movies, action) => {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      return action.movies;
    default:
      return state;
  }
}

export { movieReducer };