import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Pizza from "../Pizza";

// you want this to know which test is
test("alt test render on Pizza image", async () => {
  const name = "My favorite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description="Super coool piiitzza" image={src}></Pizza>
  );

  const img = screen.getByRole("img");
  // Para imprimir algo no console durante o teste:
  console.log(img); // ou console.log(img.src), etc.
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});
