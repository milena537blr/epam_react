import React from "react";
import { mount } from "enzyme";
import { Button } from "./Button.js";
import { render } from "@testing-library/react";

const button1 = {
  text: "Medium white button",
  size: "medium",
  color: "white"
};

const button2 = {
  text: "Large gray button",
  size: "large",
  color: "gray"
};

const button3 = {
  text: "Red button",
  color: "red"
};

test("snapshot test", () => {
  const component = mount(<Button />);
  expect(component).toMatchSnapshot();
});

test("generates text, size and color", () => {
  const { getByText, rerender } = render(
    <Button text={button1.text} size={button1.size} color={button1.color} />
  );

  expect(getByText(button1.text)).toBeInTheDocument();
  expect(getByText(button1.text)).toHaveClass(button1.size);
  expect(getByText(button1.text)).toHaveClass(button1.color);

  rerender(
    <Button text={button2.text} size={button2.size} color={button2.color} />
  );

  expect(getByText(button2.text)).toBeInTheDocument();
  expect(getByText(button2.text)).toHaveClass(button2.size);
  expect(getByText(button2.text)).toHaveClass(button2.color);

  rerender(<Button text={button3.text} color={button3.color} />);

  expect(getByText(button3.text)).toBeInTheDocument();
  expect(getByText(button3.text)).toHaveClass(button3.color);
});
