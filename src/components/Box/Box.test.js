import React from "react";
import { mount } from "enzyme";
import Box from "./Box.js";
import { render } from "@testing-library/react";

const text = "Box text";

test("snapshot test", () => {
  const component = mount(<Box />);
  expect(component).toMatchSnapshot();
});

test("generates all attributes", () => {
  const { getByText, rerender } = render(
    <Box align="space-between" verticalAlign="middle">
      {text}
    </Box>
  );

  expect(getByText(text)).toBeInTheDocument();
  expect(getByText(text)).toHaveClass("horizontal");
  expect(getByText(text)).toHaveClass("spaceBetween");
  expect(getByText(text)).toHaveClass("middle");

  rerender(
    <Box align="center" verticalAlign="top" direction="vertical">
      {text}
    </Box>
  );

  expect(getByText(text)).toHaveClass("vertical");
  expect(getByText(text)).toHaveClass("center");
  expect(getByText(text)).toHaveClass("top");

  rerender(
    <Box align="left" verticalAlign="bottom">
      {text}
    </Box>
  );

  expect(getByText(text)).toHaveClass("left");
  expect(getByText(text)).toHaveClass("bottom");

  rerender(
    <Box align="right">
      {text}
    </Box>
  );

  expect(getByText(text)).toHaveClass("right");

});
