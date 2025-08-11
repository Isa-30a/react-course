import { useState, useEffect } from "react";

//this is a custom hook -> basically just a function that calls other functions
export const usePizzaOfTheday = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(undefined);

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
