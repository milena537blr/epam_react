import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case types.LOAD_MOVIES_SUCCESS:
      // return action.movies;
      // return Object.assign([], state, action.movies);
      console.log(Object.assign([], state, action.movies));
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}
