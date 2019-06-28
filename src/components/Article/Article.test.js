import React from "react";
import { mount } from "enzyme";
import Article from "./Article";
import data from '../../data/data.json';

describe("<Article />", () => {
  test("<Article /> snapshot test", () => {
    const component = mount(<Article card={data.cards[0]} />);
    expect(component).toMatchSnapshot();
  });
});
