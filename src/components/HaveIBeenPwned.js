import React, { useState } from "react";
import "../styles/HaveIBeenPwned.css";

const HaveIBeenPwned = () => {
  const [email, setEmail] = useState("");

  // Function to handle the redirect to HIBP with email
  const handleCheckAndRedirect = () => {
    if (!email) return;
    const confirmRedirect = window.confirm(
      `You are about to leave the site and check your email (${email}) on Have I Been Pwned. Do you want to proceed?`
    );
    if (confirmRedirect) {
      const encodedEmail = encodeURIComponent(email);
      window.location.href = `https://haveibeenpwned.com/account/${encodedEmail}`;
    }
  };

  return (
    <div className="pwned-container">
      <div className="pwned-card">
        <div className="pwned-icon">
          <span role="img" aria-label="search">
            🔍
          </span>
        </div>

        <h2 className="pwned-title">Have I Been Pwned?</h2>

        <p className="pwned-description">
          Instantly check if your email address has appeared in a known data
          breach.
        </p>

        <form
          className="pwned-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleCheckAndRedirect();
          }}
        >
          <input
            type="email"
            className="pwned-input"
            placeholder="Enter your email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="pwned-btn"
            type="submit"
            disabled={!email}
          >
            Check Email
          </button>
        </form>

        <div className="pwned-info">
          <p>
            <span className="info-icon">ℹ️</span> By clicking the button, you
            will be redirected to the official{" "}
            <b>Have I Been Pwned</b> website to check if your email has been
            compromised in a data breach.
          </p>
        </div>
        
        <div className="pwned-image-container">
          <img 
            src="/images/importanceofstrongpasswords.png" 
            alt="Security illustration" 
            className="pwned-middle-image" 
          />
        </div>

        <div className="pwned-tips">
          <h4>💡 Security Tips:</h4>
          <ul>
            <li>Use unique passwords for every account.</li>
            <li>Enable two-factor authentication wherever possible.</li>
            <li>
              Change your password immediately if your email is found in a breach.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HaveIBeenPwned;
