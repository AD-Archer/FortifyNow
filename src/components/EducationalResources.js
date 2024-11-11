// src/components/EducationalResources.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/EducationalResources.css"; // Import styles

function EducationalResources() {
  return (
    <div className="educational-resources">
      <h1 className="resources-header">Educational Resources</h1>
      <p className="resources-description">
        Explore the following topics to enhance your digital security knowledge.
        Each section provides valuable insights and guides for better online
        safety.
      </p>

      <div className="module-list">
        {/* Module 1 */}
        <div className="module-item">
          <h2 className="module-title">Module 1: Mastering Passwords</h2>
          <p className="module-description">
            A comprehensive guide to creating secure passwords, using password
            managers, and understanding password strength.
          </p>
          <Link to="/mastering-passwords" className="module-link">
            Click here
          </Link>
        </div>

        {/* Module 2 */}
        <div className="module-item">
          <h2 className="module-title">Module 2: Handling Breaches</h2>
          <p className="module-description">
            Learn how to check for data breaches and how to respond effectively
            if your information is compromised.
          </p>
          <Link to="/handling-breaches" className="module-link">
            Click here
          </Link>
        </div>

        {/* Module 3 */}
        <div className="module-item">
          <h2 className="module-title">Module 3: Security & Protection</h2>
          <p className="module-description">
            Discover the importance of two-factor authentication (2FA), security
            keys, and device protection methods.
          </p>
          <Link to="/security-protection" className="module-link">
            Click here
          </Link>
        </div>

        {/* Module 4 */}
        <div className="module-item">
          <h2 className="module-title">
            Module 4: Two-Factor Authentication (2FA)
          </h2>
          <p className="module-description">
            Dive deeper into the world of 2FA and learn how to implement it
            across various platforms to strengthen your security.
          </p>
          <Link to="/two-factor-auth" className="module-link">
            Click here
          </Link>
        </div>

        {/* Module 5 */}
        <div className="module-item">
          <h2 className="module-title">Module 5: Phishing Awareness</h2>
          <p className="module-description">
            Learn how to recognize phishing attempts, avoid falling for them,
            and what to do if you’re a victim to protect your sensitive
            information.
          </p>
          <Link to="/phishing-awareness" className="module-link">
            Click here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EducationalResources;
