import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

const searchReducer = (state = initialState.filters, action) => {
  switch (action.type) {
    case types.FILTER_TEXT:
      return {
        ...state,
        text: action.text
      };
    case types.SORT_BY:
      return {
        ...state,
        sortBy: action.sortType
      };
    case types.SEARCH_BY:
      return {
        ...state,
        searchBy: action.searchType
      };
    default:
      return state;
  }
}

export { searchReducer };