import { NavLink } from "react-router-dom";
import "./Navbar.css"; // We'll style it separately

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/pizza">Pizza</NavLink>
        </li>
        <li>
          <NavLink to="/steps">Steps</NavLink>
        </li>
        {/* more links here as my app grows */}
      </ul>
    </nav>
  );
}

export default Navbar;
