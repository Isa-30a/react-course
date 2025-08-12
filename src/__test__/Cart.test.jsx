import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from "../Cart";
/**
 * A snapshot test captures the rendered output of a component or function at a specific point in time.
 * It helps ensure that the UI does not change unexpectedly by comparing the current output to a previously saved snapshot.
 * If the output differs, the test will fail, indicating a possible unintended change.
 */

test("Snapshot with nothing in cart", () => {
  const { asFragment } = render(<Cart cart={[]}></Cart>);
  expect(asFragment()).toMatchSnapshot();
});
