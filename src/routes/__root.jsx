import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOftheDay from "../PizzaOfTheDay";
import Header from "../Header";
import { CartContext } from "../context";

// this is a convention from Tanstack
export const Route = createRootRoute({
  component: () => {
    const cartHook = useState([]);
    // You can wrap your entire application or just a part of it with the provider to share the cart state.

    return (
      <>
        <CartContext.Provider value={cartHook}>
          <div>
            <Header></Header>
            <Outlet />
            <PizzaOftheDay></PizzaOftheDay>
          </div>
        </CartContext.Provider>
        <TanStackRouterDevtools></TanStackRouterDevtools>
      </>
    );
  },
});
