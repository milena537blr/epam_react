import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { updateMovies, updateCurrentMovie } from "../actions/actions";

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
  yield takeLatest(types.FETCH_MOVIES, fetchMoviesAsync);
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
  yield takeLatest(types.FETCH_MOVIE_BY_ID, fetchMovieByIdAsync);
}

// Movies Saga
export function* moviesSaga() {
  yield all([watchFetchMovies(), watchFetchMovieById()]);
}

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
