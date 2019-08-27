import React from "react";
import { mount } from "enzyme";
import { Logo } from "./Logo.js";

test("snapshot test", () => {
  const component = mount(<Logo />);
  expect(component).toMatchSnapshot();
});