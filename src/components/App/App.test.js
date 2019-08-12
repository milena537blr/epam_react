import React from "react";
import { mount } from "enzyme";
import ConnectedApp from "./App.js";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { rootReducer } from "../../reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import thunk from "redux-thunk";

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {},
  {
    route = "/search",
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
    store
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

const data = { cards: [card1, card2] };
// const component = mount(<App data={data} />);

afterEach(cleanup);

/* test("snapshot test", () => {
  expect(component).toMatchSnapshot();
}); */

/* test("renders all Cards", () => {
  expect(component.find("Card").length).toBe(2);
}); */

test("generates Search instead Article after search button had been clicked", () => {
  /*   const { getByAltText, getByTestId, queryByTestId } = render(
    <ConnectedApp data={data} />
  ); */

  const { getByAltText, getByTestId, queryByTestId } = renderWithRedux(
    <ConnectedApp />,
    {
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
      route: "/search"
    }
  );

  expect(queryByTestId("article")).toBeNull();
  expect(getByTestId("search")).toBeInTheDocument();

  fireEvent.click(getByAltText(data.cards[1].title));
  expect(getByTestId("article")).toBeInTheDocument();
  expect(queryByTestId("search")).toBeNull();

  fireEvent.click(getByTestId("search-switcher"));
  expect(queryByTestId("article")).toBeNull();
  expect(getByTestId("search")).toBeInTheDocument();
});

/* test("generates name, description, text, time and date in Article", () => {
  const { getByAltText, getByTestId } = render(<App data={data} />);

  fireEvent.click(getByAltText(data.cards[0].name));
  expect(getByTestId("article")).toHaveTextContent(data.cards[0].name);
  expect(getByTestId("article")).toHaveTextContent(data.cards[0].description);
  expect(getByTestId("article")).toHaveTextContent(data.cards[0].text);
  expect(getByTestId("article")).toHaveTextContent(
    data.cards[0].time.toString()
  );
  expect(getByTestId("article")).toHaveTextContent(
    data.cards[0].date.toString()
  );

  expect(getByTestId("article")).not.toHaveTextContent(data.cards[1].name);
  expect(getByTestId("article")).not.toHaveTextContent(
    data.cards[1].description
  );
  expect(getByTestId("article")).not.toHaveTextContent(data.cards[1].text);
  expect(getByTestId("article")).not.toHaveTextContent(
    data.cards[1].time.toString()
  );
  expect(getByTestId("article")).not.toHaveTextContent(
    data.cards[1].date.toString()
  );

  // after search-switcher button had been clicked
  fireEvent.click(getByTestId("search-switcher"));

  fireEvent.click(getByAltText(data.cards[1].name));
  expect(getByTestId("article")).toHaveTextContent(data.cards[1].name);
  expect(getByTestId("article")).toHaveTextContent(data.cards[1].description);
  expect(getByTestId("article")).toHaveTextContent(data.cards[1].text);
  expect(getByTestId("article")).toHaveTextContent(
    data.cards[1].time.toString()
  );
  expect(getByTestId("article")).toHaveTextContent(
    data.cards[1].date.toString()
  );

  expect(getByTestId("article")).not.toHaveTextContent(data.cards[0].name);
  expect(getByTestId("article")).not.toHaveTextContent(
    data.cards[0].description
  );
  expect(getByTestId("article")).not.toHaveTextContent(data.cards[0].text);
  expect(getByTestId("article")).not.toHaveTextContent(
    data.cards[0].time.toString()
  );
  expect(getByTestId("article")).not.toHaveTextContent(
    data.cards[0].date.toString()
  );
}); */
