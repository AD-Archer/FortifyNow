import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <div className="navbar-brand">FortifyNow</div>
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
          <a href="/educational-resources">Educational Resources</a>
        </li>
        <li>
          <a href="/haveibeenpwned">Have I Been Pwned</a>
        </li>
        <li>
          <a href="/make-password">Make a Password</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
