// src/components/MainSection.js
import React from "react";
import "./styles/MainSection.css";

function MainSection() {
  return (
    <div className="main-section">
      <img src="/LaptopImage.svg" alt="Laptop" className="laptop-image" />
      {/* Use the imported SVG */}
      <div className="main-buttons">
        <button onClick={() => (window.location.href = "/passwords")}>
          Passwords
        </button>
        <button onClick={() => (window.location.href = "/breaches")}>
          Breaches
        </button>
        <button onClick={() => (window.location.href = "/protection")}>
          Protection
        </button>
      </div>
    </div>
  );
}

export default MainSection;
