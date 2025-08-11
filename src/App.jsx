import { createRoot } from "react-dom/client";
import Order from "./Orders";
import { StrictMode } from "react";
import PizzaOftheDay from "./PizzaOfTheDay";
import Header from "./Header";
import { CartContext } from "./context";

const App = () => {
  // You can wrap your entire application or just a part of it with the provider to share the cart state.
  return (
    <StrictMode>
      <CartContext.Provider>
        <div>
          <Header></Header>
          <Order />
          <PizzaOftheDay></PizzaOftheDay>
        </div>
      </CartContext.Provider>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
