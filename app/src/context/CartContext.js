import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export default CartContext;