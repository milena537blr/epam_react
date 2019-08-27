import * as types from "../actions/actionTypes";
import { searchReducer } from "./searchReducer";
import { initialState } from "./initialState";

describe("movies reducer", () => {
  it("should return the initial state", () => {
    expect(searchReducer(undefined, {})).toEqual(initialState.filters);
  });

  it("should handle FILTER_TEXT", () => {
    expect(
      searchReducer({}, {
        type: types.FILTER_TEXT,
        text: "Fifty"
      })
    ).toEqual({
      text: "Fifty"
    });
  });

  it("should handle SORT_BY", () => {
    expect(
      searchReducer({}, {
        type: types.SORT_BY,
        sortType: "rating"
      })
    ).toEqual({
      sortBy: "rating"
    });
  });

  it("should handle SEARCH_BY", () => {
    expect(
      searchReducer({}, {
        type: types.SEARCH_BY,
        searchType: "title"
      })
    ).toEqual({
      searchBy: "title"
    });
  });
});