import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";
import { usePizzaOfTheday } from "../usePizzaOfTheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "calabrese",
  name: "The Calabrese Pizza",
  category: "Supreme",
  description:
    "Salami, Pancetta, Tomatoes, Red Onions, Friggitello Peppers, Garlic",
  image: "/public/pizzas/calabrese.webp",
  sizes: { S: 12.25, M: 16.25, L: 20.25 },
};

function getPizzaOfTheDay() {
  let pizza;

  function TestComponent() {
    pizza = usePizzaOfTheday();
    return null;
  }

  render(<TestComponent />);

  return pizza;
}

test("gives null when first called", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const pizza = getPizzaOfTheDay();
  expect(pizza).toBeUndefined();
});
// It's a little weird to implement a fake component to test something (we're dangerously close to the line of testing
// implementation details) but this is essentially library code and we want to assure ourselves this code works if we use
//  it frequently in our code base.
// We can make this better though. Let's rewrite our test to look like this:

// import { renderHook } from "@testing-library/react"; // change import

// test("to be null on initial load", async () => {
//   fetch.mockResponseOnce(JSON.stringify(testPizza));
//   const { result } = renderHook(() => usePizzaOfTheDay(""));
//   expect(result.current).toBeNull();
// });
