// src/components/BottomSection.js
import React from "react";
import "./styles/BottomSection.css";

function BottomSection() {
  return (
    <div className="bottom-section">
      <div
        className="section-card"
        onClick={() => (window.location.href = "/educational-resources")}
      >
        <h3>Learn More</h3>
      </div>
      <div
        className="section-card"
        onClick={() => (window.location.href = "/haveibeenpwned")}
      >
        <h3>Pwned</h3>
      </div>
      <div
        className="section-card"
        onClick={() => (window.location.href = "/password-generator")}
      >
        <h3>Password</h3>
      </div>
    </div>
  );
}

export default BottomSection;
