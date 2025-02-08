import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";
import EducationalResourcesButton from "./ReturnButton";
import { handleTopicClick } from "./utils/searchUtils";
import Toast from "./components/Toast";
import { useWelcomeToast } from "./hooks/useWelcomeToast";

const PhishingAwareness = () => {
  const [showToast, setShowToast] = useWelcomeToast();

  return (
    <div className="phishing-awareness-container">
      {showToast && (
        <Toast 
          message="Click on any topic to search for more information! 📚" 
          onClose={() => setShowToast(false)}
        />
      )}

      <header className="phishing-awareness-header">
        <h1>Phishing Awareness 🎣</h1>
        <p>
          Learn to identify and protect yourself from phishing attempts and
          social engineering attacks.
        </p>
      </header>

      <section className="phishing-awareness-content">
        <div className="phishing-awareness-content-block">
          <h2>What is Phishing? 🤔</h2>
          <p>
            Phishing is a cybercrime where targets are contacted by email, phone,
            or text by someone posing as a legitimate institution.
          </p>
          <ul>
            <li onClick={() => handleTopicClick("Different types of phishing attacks")}>
              Types of phishing attacks
            </li>
            <li onClick={() => handleTopicClick("Common phishing tactics and techniques")}>
              Common phishing tactics
            </li>
            <li onClick={() => handleTopicClick("Why phishing attacks are dangerous")}>
              Why phishing is dangerous
            </li>
            <li onClick={() => handleTopicClick("Who is targeted by phishing attacks")}>
              Who is targeted by phishing
            </li>
          </ul>
          <div className="emoji-display">🎣 📧 ⚠️ 🔍</div>
        </div>

        <div className="phishing-awareness-content-block">
          <h2>Spotting Phishing Attempts 👀</h2>
          <p>Red flags to watch out for:</p>
          <ul>
            <li onClick={() => handleTopicClick("How to identify suspicious sender addresses")}>
              Suspicious sender addresses
            </li>
            <li onClick={() => handleTopicClick("Urgent or threatening language in phishing")}>
              Urgent or threatening language
            </li>
            <li onClick={() => handleTopicClick("Grammar and spelling errors in phishing emails")}>
              Grammar and spelling errors
            </li>
            <li onClick={() => handleTopicClick("Phishing requests for sensitive information")}>
              Requests for sensitive information
            </li>
            <li onClick={() => handleTopicClick("Identifying suspicious links and attachments")}>
              Suspicious links and attachments
            </li>
          </ul>
          <div className="emoji-display">👀 🚩 ⚡ 📱</div>
        </div>

        <div className="phishing-awareness-content-block">
          <h2>Types of Attacks 🎯</h2>
          <p>Common phishing variants:</p>
          <ul>
            <li onClick={() => handleTopicClick("Email phishing attacks explained")}>
              Email phishing
            </li>
            <li onClick={() => handleTopicClick("What is spear phishing attack")}>
              Spear phishing
            </li>
            <li onClick={() => handleTopicClick("Understanding whaling attacks")}>
              Whaling attacks
            </li>
            <li onClick={() => handleTopicClick("SMS phishing smishing attacks")}>
              Smishing (SMS phishing)
            </li>
            <li onClick={() => handleTopicClick("Voice phishing vishing attacks")}>
              Vishing (voice phishing)
            </li>
          </ul>
          <div className="emoji-display">🎯 📧 📱 📞</div>
        </div>

        <div className="phishing-awareness-content-block">
          <h2>Protection Strategies 🛡️</h2>
          <p>How to stay safe and respond to attacks:</p>
          <ul>
            <li onClick={() => handleTopicClick("Email filtering and security tools guide")}>
              Email filtering and security tools
            </li>
            <li onClick={() => handleTopicClick("How to verify sender authenticity")}>
              Verifying sender authenticity
            </li>
            <li onClick={() => handleTopicClick("Safe browsing practices against phishing")}>
              Safe browsing practices
            </li>
            <li onClick={() => handleTopicClick("How to report phishing attempts")}>
              Reporting phishing attempts
            </li>
            <li onClick={() => handleTopicClick("Steps after being compromised by phishing")}>
              Steps to take if compromised
            </li>
          </ul>
          <div className="emoji-display">🛡️ 🔒 ✅ 🚫</div>
        </div>
        <EducationalResourcesButton />
      </section>
    </div>
  );
};

export default PhishingAwareness; 