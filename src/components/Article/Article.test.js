import React from "react";
import { mount } from "enzyme";
import Article from "./Article";
import { render } from "@testing-library/react";

const card1 = {
  date: 2007,
  description: "American drama",
  name: "Vampire diaries",
  text:
    "The Vampire Diaries is an American supernatural teen drama television series developed by Kevin Williamson and Julie Plec, based on the popular book series of the same name written by L. J. Smith.",
  time: 145
};

const card2 = {
  date: 2014,
  description: "Drama/Comedy-drama",
  name: "The Fault in Our Stars",
  text:
    "Hazel Grace Lancaster (Shailene Woodley), a 16-year-old cancer patient, meets and falls in love with Gus Waters (Ansel Elgort), a similarly afflicted teen from her cancer support group. Hazel feels that Gus really understands her.",
  time: 133
};

test("snapshot test", () => {
  const component = mount(<Article card={card1} />);
  expect(component).toMatchSnapshot();
});

test("generates name, description, date, time, text of Article", () => {
  const { getByText, getByAltText, rerender } = render(
    <Article card={card1} />
  );

  expect(getByText(card1.name)).toBeInTheDocument();
  expect(getByText(card1.description)).toBeInTheDocument();
  expect(getByText(card1.text)).toBeInTheDocument();
  expect(getByText(card1.date.toString())).toBeInTheDocument();
  expect(getByText(card1.time.toString(), { exact: false })).toBeInTheDocument();
  expect(getByAltText(card1.name)).toBeInTheDocument();

  rerender(<Article card={card2} />);

  expect(getByText(card2.name)).toBeInTheDocument();
  expect(getByText(card2.description)).toBeInTheDocument();
  expect(getByText(card2.text)).toBeInTheDocument();
  expect(getByText(card2.date.toString())).toBeInTheDocument();
  expect(getByText(card2.time.toString(), { exact: false })).toBeInTheDocument();
  expect(getByAltText(card2.name)).toBeInTheDocument();

});
