import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";
import EducationalResourcesButton from "./ReturnButton";
import { handleTopicClick } from "./utils/searchUtils";
import Toast from "./components/Toast";
import { useWelcomeToast } from "./hooks/useWelcomeToast";

const TwoFactorAuth = () => {
  const [showToast, setShowToast] = useWelcomeToast();

  return (
    <div className="two-factor-auth-container">
      {showToast && (
        <Toast 
          message="Click on any topic to search for more information! 📚" 
          onClose={() => setShowToast(false)}
        />
      )}

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
            <li onClick={() => handleTopicClick("What is two factor authentication explained")}>
              What is two-factor authentication?
            </li>
            <li onClick={() => handleTopicClick("Why is two factor authentication important")}>
              Why is it important?
            </li>
            <li onClick={() => handleTopicClick("How two factor authentication protects accounts")}>
              How does it protect your accounts?
            </li>
            <li onClick={() => handleTopicClick("Different types of 2FA methods comparison")}>
              Different types of 2FA methods
            </li>
          </ul>
          <div className="emoji-display">🔐 🔒 ✨ 🛡️</div>
        </div>

        <div className="two-factor-auth-content-block">
          <h2>2FA Methods 📱</h2>
          <p>Common types of two-factor authentication:</p>
          <ul>
            <li onClick={() => handleTopicClick("SMS and voice call authentication methods")}>
              SMS and voice calls
            </li>
            <li onClick={() => handleTopicClick("Best authenticator apps comparison")}>
              Authenticator apps (Google, Microsoft, Authy)
            </li>
            <li onClick={() => handleTopicClick("Hardware security keys YubiKey vs Google Titan")}>
              Security keys (YubiKey, Google Titan)
            </li>
            <li onClick={() => handleTopicClick("Biometric authentication methods explained")}>
              Biometric authentication
            </li>
            <li onClick={() => handleTopicClick("Email verification codes security")}>
              Email verification codes
            </li>
          </ul>
          <div className="emoji-display">📱 🔑 👆 📧</div>
        </div>

        <div className="two-factor-auth-content-block">
          <h2>Setting Up 2FA ⚙️</h2>
          <p>Step-by-step guide to enabling 2FA:</p>
          <ul>
            <li onClick={() => handleTopicClick("How to setup 2FA on social media platforms")}>
              Popular social media platforms
            </li>
            <li onClick={() => handleTopicClick("Setting up 2FA for email services")}>
              Email services
            </li>
            <li onClick={() => handleTopicClick("Two factor authentication for banking accounts")}>
              Banking and financial accounts
            </li>
            <li onClick={() => handleTopicClick("Cloud storage 2FA setup guide")}>
              Cloud storage services
            </li>
            <li onClick={() => handleTopicClick("Gaming platform two factor authentication")}>
              Gaming platforms
            </li>
          </ul>
          <div className="emoji-display">⚙️ 🔧 ✅ 🎮</div>
        </div>

        <div className="two-factor-auth-content-block">
          <h2>Backup and Recovery 💾</h2>
          <p>Preparing for device loss or access issues:</p>
          <ul>
            <li onClick={() => handleTopicClick("How to generate and store 2FA backup codes")}>
              Generating backup codes
            </li>
            <li onClick={() => handleTopicClick("Setting up 2FA recovery email and phone")}>
              Setting up recovery email/phone
            </li>
            <li onClick={() => handleTopicClick("Managing 2FA across multiple devices")}>
              Managing multiple devices
            </li>
            <li onClick={() => handleTopicClick("What to do if you lose 2FA access")}>
              What to do if you lose access
            </li>
            <li onClick={() => handleTopicClick("Best practices for 2FA backup methods")}>
              Best practices for backup methods
            </li>
          </ul>
          <div className="emoji-display">💾 📱 💻 ⚡</div>
        </div>
        <EducationalResourcesButton />
      </section>
    </div>
  );
};

export default TwoFactorAuth; 