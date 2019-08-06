import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

const loadingReducer = (state = initialState.isLoading, action) => {
  switch (action.type) {
    case types.LOADING:
      return action.isLoading;
    default:
      return state;
  }
};

export { loadingReducer };
