import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);
// you want this to know which test is
test("alt test render on Pizza image", async () => {
  const name = "My favorite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description="Super coool piiitzza" image={src}></Pizza>
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("To have default image if none os provided", async () => {
  const screen = render(
    <Pizza name="jue" description="Super coool piiitzza"></Pizza>
  );

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
