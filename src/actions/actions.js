import * as types from "./actionTypes";
const FILMS_SOURCE = "http://react-cdp-api.herokuapp.com";
import fetch from 'node-fetch';

// action creators
export function loadMoviesSuccess(movies) {
  return {
    type: types.LOAD_MOVIES_SUCCESS,
    movies
  };
}

export function loadMoviesFailure(error) {
  return {
    type: types.LOAD_MOVIES_FAILURE,
    error
  };
}

export function loadMoviesLoading() {
  return {
    type: types.LOAD_MOVIES_LOADING
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

export const loadMovies = () => dispatch => {
  dispatch(loadMoviesLoading());

  return fetch(`${FILMS_SOURCE}/movies`)
    .then(response => response.json())
    .then(movies => dispatch(loadMoviesSuccess(movies.data)))
    .catch(error => dispatch(loadMoviesFailure(error.message)));
}

export const updateMovies = movies => ({
  type: types.UPDATE_MOVIES,
  payload: movies,
});

export const fetchMovies = () => ({
  type: types.FETCH_MOVIES,
});

export const updateCurrentMovie = user => ({
  type: types.UPDATE_CURRENT_MOVIE,
  payload: user,
});
