import * as types from "./actionTypes";
import { MoviesApi as movieApi } from "../api/moviesApi";

// action creators
export function loadMoviesSuccess(movies) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}

export function filterText(text) {
  return {
    type: types.FILTER_TEXT,
    text
  };
}

export function sortBy(sortType) {
  return {
    type: types.SORT_BY,
    sortType
  };
}

export function searchBy(searchType) {
  return {
    type: types.SEARCH_BY,
    searchType
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
