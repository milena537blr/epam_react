import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";

describe("<Main>", () => {
  it("renders a `.main`", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(".main")).toExist();
  });
});
