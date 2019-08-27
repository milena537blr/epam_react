import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

const moviesReducer = (state = initialState.data, action) => {
  switch (action.type) {
    case types.LOAD_MOVIES_LOADING:
      return { ...state, loading: true, error: "" };
    case types.LOAD_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.movies };
    case types.LOAD_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export { moviesReducer };
