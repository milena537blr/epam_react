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
      .then(movie => {
        dispatch(loadMoviesSuccess(movie));
      })
      .catch(error => {
        throw error;
      });
  };
}
