import { useState, useEffect, useDebugValue } from "react";

//this is a custom hook -> basically just a function that calls other functions
export const usePizzaOfTheday = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(undefined);
// Shows a debug value in React DevTools for easier debugging of this hook. (its a list so you cant have multiple of them)
  useDebugValue(
    pizzaOfTheDay ? `${pizzaOfTheDay.id}:${pizzaOfTheDay.name}` : "loading"
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const response = await fetch("/api/pizza-of-the-day");
      const data = await response.json();
      setPizzaOfTheDay(data);
    }
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
