import React from "react";
import { Card } from "./Card.js";
import { render } from "@testing-library/react";

const card1 = {
  id: 447365,
  release_date: "2020-05-01",
  genres: ["Action", "Adventure", "Science Fiction"],
  title: "Guardians of the Galaxy Vol. 3"
};

const card2 = {
  id: 467867,
  release_date: "2018-04-07",
  genres: ["TV Movie", "Drama"],
  title: "Paterno"
};

test("snapshot test", () => {
  const component = render(<Card card={card1} />);
  expect(component).toMatchSnapshot();
});

test("generates title, release_date, image and genres of Card", () => {
  const { getByText, getByAltText, rerender } = render(<Card card={card1} />);

  expect(getByText(card1.title)).toBeInTheDocument();
  expect(getByText(card1.release_date.toString())).toBeInTheDocument();
  expect(getByText(card1.genres[0])).toBeInTheDocument();
  expect(getByAltText(card1.title)).toBeInTheDocument();

  rerender(<Card card={card2} />);

  expect(getByText(card2.title)).toBeInTheDocument();
  expect(getByText(card2.release_date.toString())).toBeInTheDocument();
  expect(getByText(card2.genres[0])).toBeInTheDocument();
  expect(getByAltText(card2.title)).toBeInTheDocument();
});
