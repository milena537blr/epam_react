import * as types from "./actionTypes";
import { MoviesApi as movieApi } from "../api/moviesApi";

// action creators
export function loadMoviesSuccess(movies) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: types.SET_VISIBILITY_FILTER,
    filter
  };
}

// actions
export function loadMovies() {
  return function(dispatch) {
    return movieApi
      .getAllMovies()
      .then(movies => {
        dispatch(loadMoviesSuccess(movies.data));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addTodo(text) {
  return { type: types.ADD_TODO, text };
}
