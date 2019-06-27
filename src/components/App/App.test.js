import React from "react";
import { mount } from "enzyme";
import App from "./App.js";

test("handleCardClick sets the currentCard state properly", () => {
  const wrapper = mount(<App />);
  // expect(wrapper.state("currentCard")).toBe({});
  wrapper.instance().handleCardClick(1);
  expect(wrapper.state("currentCard").id).toBe(1);
});
