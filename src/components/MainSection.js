import React from "react";
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
          <button
            className="action-button"
            onClick={() => (window.location.href = "/work-in-progress")}
          >
            Master Passwords
          </button>
          <button
            className="action-button"
            onClick={() => (window.location.href = "/work-in-progress")}
          >
            Understanding Breaches
          </button>
          <button
            className="action-button"
            onClick={() => (window.location.href = "/work-in-progress")}
          >
            Security and Protection
          </button>
        </div>

        {/* Main Buttons Section for Mobile */}
        <div className="main-buttons mobile-buttons">
          <button
            className="action-button"
            onClick={() => (window.location.href = "/work-in-progress")}
          >
            Master Passwords
          </button>
          <button
            className="action-button"
            onClick={() => (window.location.href = "/work-in-progress")}
          >
            Understanding Breaches
          </button>
          <button
            className="action-button"
            onClick={() => (window.location.href = "/work-in-progress")}
          >
            Security and Protection
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
