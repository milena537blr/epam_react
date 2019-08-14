import React from "react";
import { mount } from "enzyme";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { initialState } from "../../reducers/initialState";
import { searchReducer } from "../../reducers/searchReducer";
import ConnectedSearch from "./Search";
import { act } from 'react-dom/test-utils';

const activeButtonClass = "red";
const inactiveButtonClass = "gray";

afterEach(cleanup);

function renderWithRedux(
  ui,
  { initialState, store = createStore(searchReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("sets up active genre button", () => {
  const { getByTestId } = renderWithRedux(<ConnectedSearch />, {
    initialState: {
      filters: {
        text: "",
        sortBy: "rating",
        searchBy: "genre"
      }
    }
  });
  expect(getByTestId("search-by-genre")).toHaveClass(activeButtonClass);
  expect(getByTestId("search-by-title")).toHaveClass(inactiveButtonClass);
});

test("sets up active title button", () => {
  const { getByTestId } = renderWithRedux(<ConnectedSearch />, {
    initialState: {
      filters: {
        text: "",
        sortBy: "rating",
        searchBy: "title"
      }
    }
  });

  expect(getByTestId("search-by-title")).toHaveClass(activeButtonClass);
  expect(getByTestId("search-by-genre")).toHaveClass(inactiveButtonClass);

  act(() => {
    fireEvent.click(getByTestId("search-by-genre"));
  });

  expect(getByTestId("search-by-title")).toHaveClass(inactiveButtonClass);
  expect(getByTestId("search-by-genre")).toHaveClass(activeButtonClass);
});

test("can render with redux with custom store", () => {
  // this is a silly store that can never be changed
  const store = createStore(() => ({
    filters: {
      text: "",
      sortBy: "rating",
      searchBy: "title"
    }
  }));
  const { getByTestId } = renderWithRedux(<ConnectedSearch />, {
    store
  });
  expect(getByTestId("search-by-title")).toHaveClass(activeButtonClass);
  expect(getByTestId("search-by-genre")).toHaveClass(inactiveButtonClass);
});

/* test("snapshot test", () => {
  const component = mount(<Search />);
  expect(component).toMatchSnapshot();
}); */
