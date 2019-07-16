import React from "react";
import { mount } from "enzyme";
import Search from "./Search.js";

test("snapshot test", () => {
  const component = mount(<Search />);
  expect(component).toMatchSnapshot();
});
