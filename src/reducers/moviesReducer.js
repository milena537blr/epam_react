// import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";
import { call, put, all, takeLatest } from "redux-saga/effects";
// import { updateMovies, updateCurrentMovie } from "../actions/actions";

// Actions
const UPDATE_MOVIES = 'UPDATE_MOVIES';
const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_MOVIE_BY_ID = 'FETCH_MOVIE_BY_ID';
const UPDATE_CURRENT_MOVIE = 'UPDATE_CURRENT_MOVIE';

// Action Creators
export const fetchMovies = () => ({
  type: FETCH_MOVIES
});

export const fetchMovieById = movieId => ({
  type: FETCH_MOVIE_BY_ID,
  payload: movieId
});

export const updateMovies = movies => ({
  type: UPDATE_MOVIES,
  payload: movies
});

export const updateCurrentMovie = movie => ({
  type: UPDATE_CURRENT_MOVIE,
  payload: movie
});

// Sagas
export function* fetchMoviesAsync() {
  const response = yield call(
    fetch,
    "http://react-cdp-api.herokuapp.com/movies"
  );
  const movies = yield response.json();

  yield put(updateMovies(movies));
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesAsync);
}

export function* fetchMovieByIdAsync(action) {
  const response = yield call(
    fetch,
    `http://react-cdp-api.herokuapp.com/movies/${action.payload}`
  );
  const movie = yield response.json();

  yield put(updateCurrentMovie(movie));
}

export function* watchFetchMovieById() {
  yield takeLatest(FETCH_MOVIE_BY_ID, fetchMovieByIdAsync);
}

// Movies Saga
export function* moviesSaga() {
  yield all([watchFetchMovies(), watchFetchMovieById()]);
}

export const moviesReducer = (state = initialState.data, action = {}) => {
  switch (action.type) {
    case FETCH_MOVIES:
    case FETCH_MOVIE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_MOVIES:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case UPDATE_CURRENT_MOVIE:
      return {
        ...state,
        loading: false,
        current: action.payload,
      };
    default:
      return state;
  }
};

/* const moviesReducer = (state = initialState.data, action = {}) => {
  switch (action.type) {
    case LOAD_MOVIES_LOADING:
      return { ...state, loading: true, error: "" };
    case LOAD_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.movies };
    case LOAD_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}; */

// export { moviesReducer };
