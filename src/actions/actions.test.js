import * as types from "./actionTypes";
import * as actions from "./actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
const FILMS_SOURCE = "http://react-cdp-api.herokuapp.com";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  it("should create an action to set a filterText", () => {
    const text = "Guardians";
    const expectedAction = {
      type: types.FILTER_TEXT,
      text
    };
    expect(actions.filterText(text)).toEqual(expectedAction);
  });

  it("should create an action to set a sortBy", () => {
    const sortType = "rating";
    const expectedAction = {
      type: types.SORT_BY,
      sortType
    };
    expect(actions.sortBy(sortType)).toEqual(expectedAction);
  });

  it("should create an action to set a searchBy", () => {
    const searchType = "title";
    const expectedAction = {
      type: types.SEARCH_BY,
      searchType
    };
    expect(actions.searchBy(searchType)).toEqual(expectedAction);
  });
});

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates LOAD_MOVIES_SUCCESS when fetching movies has been done", () => {
    fetchMock.getOnce(`${FILMS_SOURCE}/movies`, {
      body: {
        data: [
          {
            budget: 200000,
            genres: ["Thriller", "Mystery", "Adventure", "Crime", "Romance"],
            id: 513285,
            overview:
              "Private eye Roland Drake cracks cases and romances femme fatales in 1940's Los Angeles while corrupt cop Det Barry Tate rules the city. A tale told in the classic style of film noir. Drake has fallen on hard times in a harsh world. He has been evicted from his office and disgraced by a missing persons case. Ruined in the public eye and with the police. it seems like it's all over for Roland Drake. Then, redemption walks in - with curves. The owner of those curves is a sexy, dark haired beauty named Katherine Montemar. She wants his help. The chemistry is immediate and her concern for the disappearance of her family members pulls him into her case - and into bed.",
            poster_path:
              "https://image.tmdb.org/t/p/w500/4dw0z5Uh2NbabdGk2u6wdyJvMg7.jpg",
            release_date: "2018-04-03",
            revenue: 0,
            runtime: 116,
            tagline:
              "Passion, Murder, and Betrayal. Just Another Day at the Office.",
            title: "Trouble Is My Business",
            vote_average: 0,
            vote_count: 0
          }
        ],
        limit: 10,
        offset: 0,
        total: 3000
      },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: types.LOAD_MOVIES_LOADING },
      {
        type: types.LOAD_MOVIES_SUCCESS,
        movies: [
          {
            budget: 200000,
            genres: ["Thriller", "Mystery", "Adventure", "Crime", "Romance"],
            id: 513285,
            overview:
              "Private eye Roland Drake cracks cases and romances femme fatales in 1940's Los Angeles while corrupt cop Det Barry Tate rules the city. A tale told in the classic style of film noir. Drake has fallen on hard times in a harsh world. He has been evicted from his office and disgraced by a missing persons case. Ruined in the public eye and with the police. it seems like it's all over for Roland Drake. Then, redemption walks in - with curves. The owner of those curves is a sexy, dark haired beauty named Katherine Montemar. She wants his help. The chemistry is immediate and her concern for the disappearance of her family members pulls him into her case - and into bed.",
            poster_path:
              "https://image.tmdb.org/t/p/w500/4dw0z5Uh2NbabdGk2u6wdyJvMg7.jpg",
            release_date: "2018-04-03",
            revenue: 0,
            runtime: 116,
            tagline:
              "Passion, Murder, and Betrayal. Just Another Day at the Office.",
            title: "Trouble Is My Business",
            vote_average: 0,
            vote_count: 0
          }
        ]
      }
    ];
    console.log("1111111111111111");
    console.log(expectedActions);
    const store = mockStore();
    console.log(store.dispatch(actions.searchBy));
    console.log(store.dispatch(actions.loadMovies()));

    return store.dispatch(actions.loadMovies()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
