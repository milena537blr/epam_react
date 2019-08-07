import * as types from "./actionTypes";
import * as actions from "./actions";

describe('actions', () => {
  it('should create an action to set a filterText', () => {
    const text = 'Guardians'
    const expectedAction = {
      type: types.FILTER_TEXT,
      text
    }
    expect(actions.filterText(text)).toEqual(expectedAction)
  })

  it('should create an action to set a sortBy', () => {
    const sortType = 'rating'
    const expectedAction = {
      type: types.SORT_BY,
      sortType
    }
    expect(actions.sortBy(sortType)).toEqual(expectedAction)
  })

  it('should create an action to set a searchBy', () => {
    const searchType = 'title'
    const expectedAction = {
      type: types.SEARCH_BY,
      searchType
    }
    expect(actions.searchBy(searchType)).toEqual(expectedAction)
  })

  
})