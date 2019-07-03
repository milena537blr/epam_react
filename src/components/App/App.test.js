import React from "react";
import { mount } from "enzyme";
import App from "./App.js";
import { render, fireEvent } from "@testing-library/react";

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

  const { getByText, getByAltText, getByTestId, queryByTestId } = render(<App data={data} />);

  test("snapshot test", () => {
    expect(component).toMatchSnapshot();
  });

  test("renders all Cards", () => {
    expect(component.find("Card").length).toBe(2);
  });

  test("generates name, date, image and genre of Card", () => {
    expect(getByText(data.cards[0].name)).toBeInTheDocument();
    expect(getByText(data.cards[0].date.toString())).toBeInTheDocument();
    expect(getByText(data.cards[0].genre)).toBeInTheDocument();
    expect(getByAltText(data.cards[0].name)).toBeInTheDocument();
  });

  test("generates images for all Cards", () => {
    expect(component.find("img").length).toBe(2);
  });

  test("generates Article instead Search after Card had been clicked", () => {
    expect(queryByTestId("article")).toBeNull();
    expect(getByTestId("search")).toBeInTheDocument();
    fireEvent.click(getByAltText(data.cards[1].name));
    expect(queryByTestId("search")).toBeNull();
    expect(getByTestId("article")).toBeInTheDocument();
  });

  test("generates Search instead Article after search button had been clicked", () => {
    fireEvent.click(getByAltText(data.cards[1].name));
    fireEvent.click(getByTestId("search-switcher"));
    expect(queryByTestId("article")).toBeNull();
    expect(getByTestId("search")).toBeInTheDocument();
  });

  test("generates name, description, text, time and date in Article", () => {
    fireEvent.click(getByAltText(data.cards[0].name));
    expect(getByTestId("article")).toHaveTextContent(data.cards[0].name);
    expect(getByTestId("article")).toHaveTextContent(data.cards[0].description);
    expect(getByTestId("article")).toHaveTextContent(data.cards[0].text);
    expect(getByTestId("article")).toHaveTextContent(data.cards[0].time.toString());
    expect(getByTestId("article")).toHaveTextContent(data.cards[0].date.toString());

    expect(getByTestId("article")).not.toHaveTextContent(data.cards[1].name);
    expect(getByTestId("article")).not.toHaveTextContent(data.cards[1].description);
    expect(getByTestId("article")).not.toHaveTextContent(data.cards[1].text);
    expect(getByTestId("article")).not.toHaveTextContent(data.cards[1].time.toString());
    expect(getByTestId("article")).not.toHaveTextContent(data.cards[1].date.toString());
  });
});
