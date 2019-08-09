import React from "react";
import { mount } from "enzyme";
import Search from "./Search.js";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { initialState } from "../../reducers/initialState";
import { searchReducer } from "../../reducers/searchReducer";
import ConnectedSearch from "./Search";

const activeButtonClass = "red";
const inactiveButtonClass = "gray";

// afterEach(cleanup);

console.log(initialState);
function renderWithRedux(
  ui,
  { initialState, store = createStore(searchReducer, initialState) } = {}
) {
  console.log(initialState);
  console.log(store);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

test("can render with redux with defaults", () => {
  const { getByTestId, getByText } = renderWithRedux(<ConnectedSearch />, {
    initialState: {
      filters: {
        text: "",
        sortBy: "rating",
        searchBy: "title"
      }
    }
  });
  fireEvent.click(getByText("title"));
  expect(getByText("title")).toHaveClass(activeButtonClass);
  expect(getByText("genre")).toHaveClass(inactiveButtonClass);
 /*  fireEvent.click(getByText("genre"));
  expect(getByText("genre")).toHaveClass(activeButtonClass);
  expect(getByText("title")).toHaveClass(inactiveButtonClass); */
});

/* test("snapshot test", () => {
  const component = mount(<Search />);
  expect(component).toMatchSnapshot();
}); */
