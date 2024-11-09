import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/MainSection.css";

function MainSection() {
  return (
    <div className="main-section">
      <div className="content-container">
        {/* Intro Text Section */}
        <div className="intro-text">
          <h1>Protect Your Digital Life</h1>
          <h2>
            Discover how to protect your online presence by mastering password
            creation, understanding breaches, and implementing advanced security
            methods.
          </h2>
        </div>

        {/* Image Section */}
        <div className="image-container">
          <img src="/LaptopImage.svg" alt="Laptop" className="laptop-image" />
        </div>

        {/* Main Buttons Section for Desktop */}
        <div className="main-buttons desktop-buttons">
          <Link to="/mastering-passwords" className="action-button">
            Master Passwords
          </Link>
          <Link to="/password-generator" className="action-button">
            Make a new Password
          </Link>
          <Link to="/have-i-been-pwned" className="action-button">
            Check if you've been leaked?
          </Link>
        </div>

        {/* Main Buttons Section for Mobile */}
        <div className="main-buttons mobile-buttons">
          <Link to="/mastering-passwords" className="action-button">
            Master Passwords
          </Link>
          <Link to="/password-generator" className="action-button">
            Make a new Password
          </Link>
          <Link to="/have-i-been-pwned" className="action-button">
            Check have you been leaked
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
