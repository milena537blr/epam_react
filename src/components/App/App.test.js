import React from "react";
import { mount } from "enzyme";
import App from "./App.js";
// import data from "../../data/data";

const card1 = {
  id: 1,
  date: 2007,
  description: "American drama",
  genre: "Dramas",
  name: "Vampire diaries",
  text:
    "The Vampire Diaries is an American supernatural teen drama television series developed by Kevin Williamson and Julie Plec, based on the popular book series of the same name written by L. J. Smith.",
  time: 145
};

const card2 = {
  id: 2,
  date: 2014,
  description: "Drama/Comedy-drama",
  genre: "Drama",
  name: "The Fault in Our Stars",
  text:
    "Hazel Grace Lancaster (Shailene Woodley), a 16-year-old cancer patient, meets and falls in love with Gus Waters (Ansel Elgort), a similarly afflicted teen from her cancer support group. Hazel feels that Gus really understands her. ",
  time: 133
};

describe("<App />", () => {
  const data = { cards: [card1, card2] };
  const component = mount(<App data={data} />);

  test("snapshot test", () => {
    expect(component).toMatchSnapshot();
  });

  test("handleCardClick sets the currentCard state properly", () => {
    const data = { cards: [card1, card2] };
    const wrapper = mount(<App data={data} />);
    wrapper.instance().handleCardClick(1);
    expect(wrapper.state("currentCard").id).toBe(1);
    wrapper.instance().handleCardClick(2);
    expect(wrapper.state("currentCard").id).toBe(2);
  });

  test("App renders Card with the currentCard", () => {
    const data = { cards: [card1, card2] };
    const wrapper = mount(<App data={data} />);
    // console.log(wrapper.find('.wrapper').children);
    // expect(wrapper.find('.wrapper').children).toBe(hats.contents)
  });
});