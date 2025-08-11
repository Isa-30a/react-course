export default function Header() {
  return (
    <nav>
      <h1 className="logo">Padre Gino's Pizza</h1>
      <div className="nav-cart">
        🛒{" "}
        <span role="img" className="nav-cart-number" aria-label="cart">
          5
        </span>
      </div>
    </nav>
  );
}
