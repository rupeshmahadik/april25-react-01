import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
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
        <li>
          <NavLink to="/cards">Cards</NavLink>
        </li>
        <li>
          <NavLink to="/travellist">Travel List</NavLink>
        </li>
        <li>
          <NavLink to="/components">Components</NavLink>
        </li>
        {/* more links here as my app grows */}
      </ul>
    </nav>
  );
}

export default Navbar;
