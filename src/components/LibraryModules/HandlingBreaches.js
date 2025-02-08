import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";
import EducationalResourcesButton from "./ReturnButton";
import { handleTopicClick } from "./utils/searchUtils";
import Toast from "./components/Toast";
import { useWelcomeToast } from "./hooks/useWelcomeToast";

const HandlingBreaches = () => {
  const [showToast, setShowToast] = useWelcomeToast();

  return (
    <div className="handling-breaches-container">
      {showToast && (
        <Toast 
          message="Click on any topic to search for more information! 📚" 
          onClose={() => setShowToast(false)}
        />
      )}
      
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
            <li onClick={() => handleTopicClick("Different types of data breaches")}>
              Understanding different types of breaches
            </li>
            <li onClick={() => handleTopicClick("Common causes of data breaches")}>
              Common causes of data breaches
            </li>
            <li onClick={() => handleTopicClick("Impact of data breaches on individuals and organizations")}>
              Impact on individuals and organizations
            </li>
            <li onClick={() => handleTopicClick("Real world data breach examples")}>
              Real-world breach examples
            </li>
          </ul>
          <div className="emoji-display">🔍 💻 ⚠️ 📊</div>
        </div>

        <div className="handling-breaches-content-block">
          <h2>Identifying Breaches 🎯</h2>
          <p>Common signs of a data breach include:</p>
          <ul>
            <li onClick={() => handleTopicClick("Signs of unusual account activity in data breach")}>
              Unusual account activity
            </li>
            <li onClick={() => handleTopicClick("What to do about unexpected password changes")}>
              Unexpected password changes
            </li>
            <li onClick={() => handleTopicClick("How to detect strange device logins")}>
              Strange device logins
            </li>
            <li onClick={() => handleTopicClick("Detecting unauthorized transactions security")}>
              Unauthorized transactions
            </li>
            <li onClick={() => handleTopicClick("Understanding security alert notifications")}>
              Security alert notifications
            </li>
          </ul>
          <div className="emoji-display">🎯 🔔 ⚡ 📱</div>
        </div>

        <div className="handling-breaches-content-block">
          <h2>Immediate Actions 🏃‍♂️</h2>
          <p>If you suspect a breach, take these steps:</p>
          <ul>
            <li onClick={() => handleTopicClick("How to change passwords after data breach")}>
              Change all passwords immediately
            </li>
            <li onClick={() => handleTopicClick("Setting up two-factor authentication after breach")}>
              Enable two-factor authentication
            </li>
            <li onClick={() => handleTopicClick("How to contact services affected by data breach")}>
              Contact affected services
            </li>
            <li onClick={() => handleTopicClick("Monitoring accounts after data breach")}>
              Monitor your accounts closely
            </li>
            <li onClick={() => handleTopicClick("How to report suspicious activity after breach")}>
              Report suspicious activity
            </li>
          </ul>
          <div className="emoji-display">🏃‍♂️ 🔒 📞 👀</div>
        </div>

        <div className="handling-breaches-content-block">
          <h2>Prevention Strategies 🛡️</h2>
          <p>Protect yourself from future breaches:</p>
          <ul>
            <li onClick={() => handleTopicClick("Creating strong unique passwords guide")}>
              Use strong, unique passwords
            </li>
            <li onClick={() => handleTopicClick("Setting up multi-factor authentication guide")}>
              Enable multi-factor authentication
            </li>
            <li onClick={() => handleTopicClick("How to perform regular security audits")}>
              Regular security audits
            </li>
            <li onClick={() => handleTopicClick("Importance of keeping software updated security")}>
              Keep software updated
            </li>
            <li onClick={() => handleTopicClick("How to backup important data securely")}>
              Backup important data
            </li>
          </ul>
          <div className="emoji-display">🛡️ 🔐 🔄 💾</div>
        </div>
        <EducationalResourcesButton />
      </section>
    </div>
  );
};

export default HandlingBreaches; 