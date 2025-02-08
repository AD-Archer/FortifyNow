import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MainSection.css";

function MainSection() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

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
          <button 
            onClick={() => handleNavigation('/educational-resources')} 
            className="action-button"
          >
            Master Passwords
          </button>
          <button 
            onClick={() => handleNavigation('/password-generator')} 
            className="action-button"
          >
            Make a new Password
          </button>
          <button 
            onClick={() => handleNavigation('/have-i-been-pwned')} 
            className="action-button"
          >
            Check if you've been leaked?
          </button>
        </div>

        {/* Main Buttons Section for Mobile */}
        <div className="main-buttons mobile-buttons">
          <button 
            onClick={() => handleNavigation('/educational-resources')} 
            className="action-button"
          >
            Master Passwords
          </button>
          <button 
            onClick={() => handleNavigation('/password-generator')} 
            className="action-button"
          >
            Make a new Password
          </button>
          <button 
            onClick={() => handleNavigation('/have-i-been-pwned')} 
            className="action-button"
          >
            Check have you been leaked
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
