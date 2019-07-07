import React from "react";
import { mount } from "enzyme";
import Card from "./Card.js";
import { render } from "@testing-library/react";

const card1 = {
  id: 1,
  date: 2007,
  genre: "Dramas",
  name: "Vampire diaries",
};

const card2 = {
  id: 2,
  date: 2014,
  genre: "Drama",
  name: "The Fault in Our Stars",
};

test("snapshot test", () => {
  const component = mount(<Card card={card1} />);
  expect(component).toMatchSnapshot();
});

test("generates name, date, image and genre of Card", () => {
  const { getByText, getByAltText, rerender } = render(<Card card={card1} />);

  expect(getByText(card1.name)).toBeInTheDocument();
  expect(getByText(card1.date.toString())).toBeInTheDocument();
  expect(getByText(card1.genre)).toBeInTheDocument();
  expect(getByAltText(card1.name)).toBeInTheDocument();

  rerender(<Card card={card2} />);

  expect(getByText(card2.name)).toBeInTheDocument();
  expect(getByText(card2.date.toString())).toBeInTheDocument();
  expect(getByText(card2.genre)).toBeInTheDocument();
  expect(getByAltText(card2.name)).toBeInTheDocument();

});
