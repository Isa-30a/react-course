import { expect, test, vi } from "vitest";
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
/**import { render } from "@testing-library/react";
 * //basically to test a hook you just want to create a component here to use the hook
    function getPizzaOfTheDay() {
    let pizza;

    function TestComponent() {
        //you dont want to render anything you just want to get whatever pizza have
        pizza = usePizzaOfTheday();
        return null;
    }

    render(<TestComponent />);

    return pizza;
    }
    test("gives undefined when first called", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    const pizza = getPizzaOfTheDay();
    expect(pizza).toBeUndefined();
    });
 */

// It's a little weird to implement a fake component to test something (we're dangerously close to the line of testing
// implementation details) but this is essentially library code and we want to assure ourselves this code works if we use
//  it frequently in our code base.
// We can make this better though. Let's rewrite our test to look like this:

import { renderHook, waitFor } from "@testing-library/react"; // change import

test("to be null on initial load", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  // Instead of creating a custom component, simply pass the hook to renderHook for a concise test.
  const { result } = renderHook(() => usePizzaOfTheday());
  expect(result.current).toBeUndefined();
});

test("test to call the api and give back the pizza of the day", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheday());
  // waitFor -> run this function continually until no longer throws an error
  await waitFor(() => {
    //run it until it doesnt throws an error
    expect(result.current).toEqual(testPizza);
    expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
  });
});
