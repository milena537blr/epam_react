import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}