import * as types from "../actions/actionTypes";
import { moviesReducer } from "./moviesReducer";
import { initialState } from "./initialState";

describe("movies reducer", () => {
  it("should return the initial state", () => {
    expect(moviesReducer(undefined, {})).toEqual(initialState.data);
  });

  it("should handle LOAD_MOVIES_LOADING", () => {
    expect(
      moviesReducer([], {
        type: types.LOAD_MOVIES_LOADING
      })
    ).toEqual({
      loading: true,
      error: ""
    });
  });

  it("should handle LOAD_MOVIES_SUCCESS", () => {
    expect(
      moviesReducer(
        {},
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
      )
    ).toEqual({
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
      ],
      loading: false
    });
  });

  it("should handle LOAD_MOVIES_FAILURE", () => {
    expect(
      moviesReducer(
        {},
        {
          type: types.LOAD_MOVIES_FAILURE,
          error: "Error"
        }
      )
    ).toEqual({
      loading: false,
      error: "Error"
    });
  });
});
