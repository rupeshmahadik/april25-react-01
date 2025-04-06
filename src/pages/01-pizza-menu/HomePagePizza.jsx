import { NavLink, Outlet } from "react-router-dom";
import "./HomePagePizza.css";

export default function PizzaPage() {
  return (
    <div className="pizza-home">
      <h2 className="pizza-title">🍕 Pizza Page</h2>
      <div className="pizza-tabs">
        <NavLink to="shop1" className="pizza-tab">
          Pizza Shop 1
        </NavLink>
        <NavLink to="shop2" className="pizza-tab">
          Pizza Shop 2
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
