import React from "react";
import { mount } from "enzyme";
import ConnectedArticle from "./Article";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import { moviesReducer } from "../../reducers/moviesReducer";
import { createStore } from "redux";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(moviesReducer, initialState) },
  {
    route = "/film/447365",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
    history
  };
}
  
const card1 = {
  id: 447365,
  release_date: "2020-05-01",
  genres: ["Action", "Adventure", "Science Fiction"],
  title: "Guardians of the Galaxy Vol. 3",
  tagline: "",
  overview: "The third film based on Marvel's Guardians of the Galaxy.",
  runtime: null
};

const card2 = {
  id: 447365,
  release_date: "2018-04-07",
  genres: ["TV Movie", "Drama"],
  title: "Paterno",
  tagline: "The greater the legend, the harder the fall.",
  overview:
    "After becoming the winningest coach in college football history, Joe Paterno is embroiled in Penn State's Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.",
  runtime: null
};

/* test("snapshot test", () => {
  const component = mount(<Article card={card1} />);
  expect(component).toMatchSnapshot();
}); */

test("generates title, overview, date, runtime, tagline of Article", () => {
  /*   const { getByText, getByAltText, rerender } = render(
    <Article card={card1} />
  ); */

  const { getByText, getByAltText } = renderWithRedux(<ConnectedArticle />, {
    initialState: {
      data: {
        movies: [
          {
            id: 447365,
            release_date: "2020-05-01",
            genres: ["Action", "Adventure", "Science Fiction"],
            title: "Guardians of the Galaxy Vol. 3",
            tagline: "",
            overview:
              "The third film based on Marvel's Guardians of the Galaxy.",
            runtime: null
          },
          {
            id: 447365,
            release_date: "2018-04-07",
            genres: ["TV Movie", "Drama"],
            title: "Paterno",
            tagline: "The greater the legend, the harder the fall.",
            overview:
              "After becoming the winningest coach in college football history, Joe Paterno is embroiled in Penn State's Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.",
            runtime: null
          }
        ],
        loading: false,
        error: ""
      }
    }
  },
  {
    route: '/film/447365',
  });

  expect(getByText(card1.title)).toBeInTheDocument();
  expect(getByText(card1.overview)).toBeInTheDocument();
  expect(getByText(card1.tagline)).toBeInTheDocument();
  expect(getByText(card1.release_date)).toBeInTheDocument();
  expect(getByText(card1.runtime, { exact: false })).toBeInTheDocument();
  expect(getByAltText(card1.title)).toBeInTheDocument();

  // rerender(<Article card={card2} />);

  /* expect(getByText(card2.title)).toBeInTheDocument();
  expect(getByText(card2.overview)).toBeInTheDocument();
  expect(getByText(card2.tagline)).toBeInTheDocument();
  expect(getByText(card2.release_date)).toBeInTheDocument();
  expect(getByText(card2.runtime, { exact: false })).toBeInTheDocument();
  expect(getByAltText(card2.title)).toBeInTheDocument(); */
});
