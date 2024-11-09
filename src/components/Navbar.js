import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="navbar-brand">
        <Link to="/">FortifyNow</Link>
      </div>
      <div
        className={`hamburger-menu ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/educational-resources">Educational Resources</Link>
        </li>
        <li>
          <Link to="/have-i-been-pwned">Check Pwned</Link>
        </li>
        <li>
          <Link to="/password-generator">Make a Password</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
