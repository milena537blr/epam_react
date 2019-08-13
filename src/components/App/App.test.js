import React from "react";
import ConnectedApp from "./App.js";
import { Provider } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import { rootReducer } from "../../reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Route, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import thunk from "redux-thunk";

function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  } = {},
  {
    route = "/search",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  console.log(store.getState());
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{ui}</Router>
      </Provider>
    ),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

const card1 = {
  id: 447365,
  release_date: "2020-05-01",
  genres: ["Action", "Adventure", "Science Fiction"],
  title: "1Guardians of the Galaxy Vol. 3",
  tagline: "Life finds a way",
  overview: "The third film based on Marvel's Guardians of the Galaxy.",
  runtime: null
};

const card2 = {
  id: 337167,
  release_date: "2018-04-07",
  genres: ["TV Movie", "Drama"],
  title: "Paterno",
  tagline: "The greater the legend, the harder the fall.",
  overview:
    "After becoming the winningest coach in college football history, Joe Paterno is embroiled in Penn State's Jerry Sandusky sexual abuse scandal, challenging his legacy and forcing him to face questions of institutional failure regarding the victims.",
  runtime: null
};

afterEach(cleanup);

/* test("snapshot test", () => {
  expect(component).toMatchSnapshot();
}); */

/* test("renders all Cards", () => {
  expect(component.find("Card").length).toBe(2);
}); */

test("generates Loading text before fetching data", async () => {
  const { getByText } = renderWithRedux(<ConnectedApp />);

  const loading = await waitForElement(() => getByText("Loading..."));
  expect(loading).toHaveTextContent("Loading...");
});

test("generates Search instead Article after search button had been clicked", async () => {
  const store = createStore(
    () => ({
      data: {
        movies: [
          {
            id: 447365,
            release_date: "2020-05-01",
            genres: ["Action", "Adventure", "Science Fiction"],
            title: "1Guardians of the Galaxy Vol. 3",
            tagline: "Life finds a way",
            overview:
              "The third film based on Marvel's Guardians of the Galaxy.",
            runtime: null
          },
          {
            id: 337167,
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
      },
      filters: {
        text: "",
        sortBy: "rating",
        searchBy: "title"
      }
    }),
    applyMiddleware(thunk)
  );

  const { getByAltText, queryByTestId, getByTestId } = renderWithRedux(
    <ConnectedApp />,
    { store }
  );

  expect(queryByTestId("article")).toBeNull();
  expect(getByTestId("search")).toBeInTheDocument();

  fireEvent.click(getByAltText(card1.title));
  expect(getByTestId("article")).toBeInTheDocument();
  expect(queryByTestId("search")).toBeNull();

  fireEvent.click(getByTestId("search-switcher"));
  expect(queryByTestId("article")).toBeNull();
  expect(getByTestId("search")).toBeInTheDocument();
});

test("generates name, overview, text, time and date in Article", () => {
  const store = createStore(
    () => ({
      data: {
        movies: [
          {
            id: 447365,
            release_date: "2020-05-01",
            genres: ["Action", "Adventure", "Science Fiction"],
            title: "1Guardians of the Galaxy Vol. 3",
            tagline: "Life finds a way",
            overview:
              "The third film based on Marvel's Guardians of the Galaxy.",
            runtime: null
          },
          {
            id: 337167,
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
      },
      filters: {
        text: "",
        sortBy: "rating",
        searchBy: "title"
      }
    }),
    applyMiddleware(thunk)
  );

  const { getByAltText, getByTestId } = renderWithRedux(<ConnectedApp />, {
    store
  });

  fireEvent.click(getByAltText(card2.title));
  expect(getByTestId("article")).toHaveTextContent(card2.title);
  expect(getByTestId("article")).toHaveTextContent(card2.overview);
  expect(getByTestId("article")).toHaveTextContent(card2.tagline);
  expect(getByTestId("article")).toHaveTextContent(card2.release_date);

  expect(getByTestId("article")).not.toHaveTextContent(card1.title);
  expect(getByTestId("article")).not.toHaveTextContent(card1.overview);
  expect(getByTestId("article")).not.toHaveTextContent(card1.tagline);
  expect(getByTestId("article")).not.toHaveTextContent(card1.release_date);

  // after search-switcher button had been clicked
  fireEvent.click(getByTestId("search-switcher"));

  fireEvent.click(getByAltText(card1.title));
  expect(getByTestId("article")).toHaveTextContent(card1.title);
  expect(getByTestId("article")).toHaveTextContent(card1.overview);
  expect(getByTestId("article")).toHaveTextContent(card1.tagline);
  expect(getByTestId("article")).toHaveTextContent(card1.release_date);

  expect(getByTestId("article")).not.toHaveTextContent(card2.title);
  expect(getByTestId("article")).not.toHaveTextContent(card2.overview);
  expect(getByTestId("article")).not.toHaveTextContent(card2.tagline);
  expect(getByTestId("article")).not.toHaveTextContent(card2.release_date);
});
