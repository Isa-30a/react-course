import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import Pizza from "../src/Pizza";

test("alt text renders on image", async () => {
  const name = "My favorite Pizza";
  const src = "https://picsum.photos/200";

  const screen = render(
    <Pizza name={name} description="Super coool piiitzza" image={src}></Pizza>
  );

  const img = screen.getByRole("img");
  await expect.element(img).toBeInTheDocument();
  await expect.element(img).toHaveAttibute("src", src);
  await expect.element(img).toHaveAttibute("alt", name);
});
