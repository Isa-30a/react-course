import { useContext } from "react";
import { CartContext } from "./context";

export default function Header() {
  const [cart] = useContext(CartContext);
  return (
    <nav>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <div className="nav-cart">
        🛒{" "}
        <span role="img" className="nav-cart-number" aria-label="cart">
          {cart.length}
        </span>
      </div>
    </nav>
  );
}
