import { createContext } from "react";

// the return type of a hook is an array []
// the return type of cart is an array [[]]
// some function then [[], function () {}]
// const hook = [[], function () {}]
export const CartContext = createContext([createContext([[], function () {}])]);
