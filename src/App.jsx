import { createRoot } from "react-dom/client";
import Order from "./Orders";
import { StrictMode } from "react";
import PizzaOftheDay from "./PizzaOfTheDay";
const App = () => {
  return (
    <StrictMode>
      <div>
        <h1 className="logo">Padre Gino's Pizza – Order Now</h1>
        <Order />
        <PizzaOftheDay></PizzaOftheDay>
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
