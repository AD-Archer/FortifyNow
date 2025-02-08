import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";
import EducationalResourcesButton from "./ReturnButton";

const PhishingAwareness = () => {
  return (
    <div className="phishing-awareness-container">
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
            <li>Types of phishing attacks</li>
            <li>Common phishing tactics</li>
            <li>Why phishing is dangerous</li>
            <li>Who is targeted by phishing</li>
          </ul>
          <div className="emoji-display">🎣 📧 ⚠️ 🔍</div>
        </div>

        <div className="phishing-awareness-content-block">
          <h2>Spotting Phishing Attempts 👀</h2>
          <p>Red flags to watch out for:</p>
          <ul>
            <li>Suspicious sender addresses</li>
            <li>Urgent or threatening language</li>
            <li>Grammar and spelling errors</li>
            <li>Requests for sensitive information</li>
            <li>Suspicious links and attachments</li>
          </ul>
          <div className="emoji-display">👀 🚩 ⚡ 📱</div>
        </div>

        <div className="phishing-awareness-content-block">
          <h2>Types of Attacks 🎯</h2>
          <p>Common phishing variants:</p>
          <ul>
            <li>Email phishing</li>
            <li>Spear phishing</li>
            <li>Whaling attacks</li>
            <li>Smishing (SMS phishing)</li>
            <li>Vishing (voice phishing)</li>
          </ul>
          <div className="emoji-display">🎯 📧 📱 📞</div>
        </div>

        <div className="phishing-awareness-content-block">
          <h2>Protection Strategies 🛡️</h2>
          <p>How to stay safe and respond to attacks:</p>
          <ul>
            <li>Email filtering and security tools</li>
            <li>Verifying sender authenticity</li>
            <li>Safe browsing practices</li>
            <li>Reporting phishing attempts</li>
            <li>Steps to take if compromised</li>
          </ul>
          <div className="emoji-display">🛡️ 🔒 ✅ 🚫</div>
        </div>
        <EducationalResourcesButton />

      </section>
    </div>
  );
};

export default PhishingAwareness; 