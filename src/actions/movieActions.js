import * as types from "./actionTypes";
import movieApi from "../api/moviesApi";

//action creator
export function loadMoviesSuccess(movies) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}

export function loadMovies() {
  return function(dispatch) {
    return movieApi
      .getAllMovies()
      .then(movies => {
        dispatch(loadMoviesSuccess(movies));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function toggleTodo(index) {
  return { type: types.TOGGLE_TODO, index }
}
