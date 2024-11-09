// src/WorkInProgress.js
import React from "react";
import "../styles/WorkInProgress.css";

function WorkInProgress() {
  return (
    <div className="work-in-progress">
      <h1>Work in Progress</h1>
      <p>
        We’re working hard to bring you new features and enhancements. Stay
        tuned!
      </p>
      <div className="progress-indicator">
        <div className="progress-bar"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}

export default WorkInProgress;
