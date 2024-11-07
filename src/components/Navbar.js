// src/components/Navbar.js
import React from "react";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">HOME</div>
      <ul className="navbar-links">
        <li>
          <a href="/educational-resources">Educational Resources</a>
        </li>
        <li>
          <a href="/haveibeenpwned">HaveIBeenPwned</a>
        </li>
        <li>
          <a href="/make-password">Make a Password</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
