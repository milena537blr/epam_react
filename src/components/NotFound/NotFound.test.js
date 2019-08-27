import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "./NotFound";

test("snapshot test", () => {
  const component = render(<NotFound />);
  expect(component).toMatchSnapshot();
});
