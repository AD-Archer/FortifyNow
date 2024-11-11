import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";

const HandlingBreaches = () => {
  return (
    <div className="handling-breaches-container">
      <header className="handling-breaches-header">
        <h1>Handling Data Breaches 🚨</h1>
        <p>
          Learn how to protect your accounts and react appropriately when your
          data is compromised.
        </p>
      </header>

      <section className="handling-breaches-content">
        <div className="handling-breaches-content-block">
          <h2>What is a Data Breach? 🔍</h2>
          <p>
            A data breach occurs when sensitive, confidential, or protected
            information is accessed, disclosed, or used without authorization.
          </p>
          <ul>
            <li>Understanding different types of breaches</li>
            <li>Common causes of data breaches</li>
            <li>Impact on individuals and organizations</li>
            <li>Real-world breach examples</li>
          </ul>
          <div className="emoji-display">🔍 💻 ⚠️ 📊</div>
        </div>

        <div className="handling-breaches-content-block">
          <h2>Identifying Breaches 🎯</h2>
          <p>Common signs of a data breach include:</p>
          <ul>
            <li>Unusual account activity</li>
            <li>Unexpected password changes</li>
            <li>Strange device logins</li>
            <li>Unauthorized transactions</li>
            <li>Security alert notifications</li>
          </ul>
          <div className="emoji-display">🎯 🔔 ⚡ 📱</div>
        </div>

        <div className="handling-breaches-content-block">
          <h2>Immediate Actions 🏃‍♂️</h2>
          <p>If you suspect a breach, take these steps:</p>
          <ul>
            <li>Change all passwords immediately</li>
            <li>Enable two-factor authentication</li>
            <li>Contact affected services</li>
            <li>Monitor your accounts closely</li>
            <li>Report suspicious activity</li>
          </ul>
          <div className="emoji-display">🏃‍♂️ 🔒 📞 👀</div>
        </div>

        <div className="handling-breaches-content-block">
          <h2>Prevention Strategies 🛡️</h2>
          <p>Protect yourself from future breaches:</p>
          <ul>
            <li>Use strong, unique passwords</li>
            <li>Enable multi-factor authentication</li>
            <li>Regular security audits</li>
            <li>Keep software updated</li>
            <li>Backup important data</li>
          </ul>
          <div className="emoji-display">🛡️ 🔐 🔄 💾</div>
        </div>
      </section>
    </div>
  );
};

export default HandlingBreaches; 