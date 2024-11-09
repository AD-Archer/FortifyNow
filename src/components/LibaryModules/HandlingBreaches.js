import React from "react";
import "./styles/HandlingBreaches.css"; // Add styles for this module

const HandlingBreaches = () => {
  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1>Handling Data Breaches</h1>
        <p>
          Learn how to protect your accounts and react appropriately when your
          data is compromised.
        </p>
      </header>

      {/* Content Section */}
      <section className="content">
        <div className="content-block">
          <h2>What is a Data Breach?</h2>
          <p>
            A data breach occurs when sensitive, confidential, or protected
            information is accessed, disclosed, or used without authorization.
            It can happen due to hacking, physical theft, or human error.
          </p>
          <img src="/images/whatisadbreach.png" alt="What is a Data Breach?" />
        </div>

        <div className="content-block">
          <h2>How to Identify a Breach</h2>
          <p>Common signs of a data breach include:</p>
          <ul>
            <li>Unusual account activity or unauthorized logins.</li>
            <li>Unexpected password change requests.</li>
            <li>Emails or alerts from services warning about breaches.</li>
          </ul>
          <img
            src="/images/identifybreach.png"
            alt="How to Identify a Breach"
          />
        </div>

        <div className="content-block">
          <h2>Steps to Take After a Breach</h2>
          <p>
            If you believe your account has been breached, follow these steps:
          </p>
          <ul>
            <li>Change your passwords immediately.</li>
            <li>Enable two-factor authentication (2FA).</li>
            <li>Contact the affected company or service.</li>
            <li>Monitor your accounts for suspicious activity.</li>
          </ul>
          <img
            src="/images/stepsafterbreach.png"
            alt="Steps to Take After a Breach"
          />
        </div>

        <div className="content-block">
          <h2>Preventing Future Breaches</h2>
          <p>To protect yourself from future breaches, consider:</p>
          <ul>
            <li>
              Using a password manager to generate and store secure passwords.
            </li>
            <li>
              Setting up multi-factor authentication (MFA) on all accounts.
            </li>
            <li>Regularly reviewing your account activity.</li>
          </ul>
          <img
            src="/images/preventfuturebreaches.png"
            alt="Preventing Future Breaches"
          />
        </div>
      </section>
    </div>
  );
};

export default HandlingBreaches;
