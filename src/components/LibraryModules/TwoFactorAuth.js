import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";
import EducationalResourcesButton from "./ReturnButton";

const TwoFactorAuth = () => {
  return (
    <div className="two-factor-auth-container">
      <header className="two-factor-auth-header">
        <h1>Two-Factor Authentication (2FA) 🔐</h1>
        <p>
          Learn how to add an extra layer of security to your accounts using
          two-factor authentication.
        </p>
      </header>

      <section className="two-factor-auth-content">
        <div className="two-factor-auth-content-block">
          <h2>Understanding 2FA 🤔</h2>
          <p>
            Two-factor authentication adds an extra security layer beyond just
            passwords.
          </p>
          <ul>
            <li>What is two-factor authentication?</li>
            <li>Why is it important?</li>
            <li>How does it protect your accounts?</li>
            <li>Different types of 2FA methods</li>
          </ul>
          <div className="emoji-display">🔐 🔒 ✨ 🛡️</div>
        </div>

        <div className="two-factor-auth-content-block">
          <h2>2FA Methods 📱</h2>
          <p>Common types of two-factor authentication:</p>
          <ul>
            <li>SMS and voice calls</li>
            <li>Authenticator apps (Google, Microsoft, Authy)</li>
            <li>Security keys (YubiKey, Google Titan)</li>
            <li>Biometric authentication</li>
            <li>Email verification codes</li>
          </ul>
          <div className="emoji-display">📱 🔑 👆 📧</div>
        </div>

        <div className="two-factor-auth-content-block">
          <h2>Setting Up 2FA ⚙️</h2>
          <p>Step-by-step guide to enabling 2FA:</p>
          <ul>
            <li>Popular social media platforms</li>
            <li>Email services</li>
            <li>Banking and financial accounts</li>
            <li>Cloud storage services</li>
            <li>Gaming platforms</li>
          </ul>
          <div className="emoji-display">⚙️ 🔧 ✅ 🎮</div>
        </div>

        <div className="two-factor-auth-content-block">
          <h2>Backup and Recovery 💾</h2>
          <p>Preparing for device loss or access issues:</p>
          <ul>
            <li>Generating backup codes</li>
            <li>Setting up recovery email/phone</li>
            <li>Managing multiple devices</li>
            <li>What to do if you lose access</li>
            <li>Best practices for backup methods</li>
          </ul>
          <div className="emoji-display">💾 📱 💻 ⚡</div>
        </div>
        <EducationalResourcesButton />

      </section>
    </div>
  );
};

export default TwoFactorAuth; 