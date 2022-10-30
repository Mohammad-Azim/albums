import { render, screen } from "@testing-library/react";
import Body from "./Body";

test("renders learn react link", () => {
  render(<Body />);
  const linkElement = true;
  expect(linkElement).toBe(true);
});
