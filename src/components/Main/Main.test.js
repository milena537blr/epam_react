import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";
import renderer from "react-test-renderer";

// import data from "../../data/data";

const cards = [
  {
    id: 1,
    date: 2007,
    description: "American drama",
    genre: "Dramas",
    name: "Vampire diaries",
    text:
      "The Vampire Diaries is an American supernatural teen drama television series developed by Kevin Williamson and Julie Plec, based on the popular book series of the same name written by L. J. Smith.",
    time: 145
  },
  {
    id: 2,
    date: 2014,
    description: "Drama/Comedy-drama",
    genre: "Drama",
    name: "The Fault in Our Stars",
    text:
      "Hazel Grace Lancaster (Shailene Woodley), a 16-year-old cancer patient, meets and falls in love with Gus Waters (Ansel Elgort), a similarly afflicted teen from her cancer support group. Hazel feels that Gus really understands her. ",
    time: 133
  }
];

describe("<Main>", () => {
  it("renders a `.main`", () => {
    const wrapper = shallow(<Main cards={cards} />);
    expect(wrapper.find(".main")).toExist();
  });

  it('<Main> snapshot test', () => {
    const component = renderer.create(<Main cards={cards} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
