import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";
import EducationalResourcesButton from "./ReturnButton";

const SecurityProtection = () => {
  return (
    <div className="security-protection-container">
      <header className="security-protection-header">
        <h1>Security & Protection 🛡️</h1>
        <p>
          Learn essential security measures to protect your digital life and keep
          your data safe from threats.
        </p>
      </header>

      <section className="security-protection-content">
        <div className="security-protection-content-block">
          <h2>Device Security Basics 💻</h2>
          <p>
            Protecting your devices is the first line of defense against cyber threats.
          </p>
          <ul>
            <li>Keep your operating system and software up to date</li>
            <li>Use antivirus and anti-malware software</li>
            <li>Enable firewall protection</li>
            <li>Encrypt your hard drives</li>
            <li>Set up automatic backups</li>
          </ul>
          <div className="emoji-display">🔒 💻 🛡️ 🔄</div>
        </div>

        <div className="security-protection-content-block">
          <h2>Network Security 🌐</h2>
          <p>Secure your internet connection and protect your data in transit:</p>
          <ul>
            <li>Use strong Wi-Fi encryption (WPA3)</li>
            <li>Change default router passwords</li>
            <li>Enable VPN for public Wi-Fi</li>
            <li>Monitor connected devices</li>
            <li>Use guest networks for visitors</li>
          </ul>
          <div className="emoji-display">🔐 📡 🌐 🔒</div>
        </div>

        <div className="security-protection-content-block">
          <h2>Security Keys and Authentication 🔑</h2>
          <p>
            Physical security keys provide the strongest form of authentication:
          </p>
          <ul>
            <li>Understanding hardware security keys</li>
            <li>FIDO2 and WebAuthn standards</li>
            <li>YubiKey and other security key options</li>
            <li>Setting up security keys</li>
            <li>Backup authentication methods</li>
          </ul>
          <div className="emoji-display">🔑 🔐 🛡️ 🔒</div>
        </div>

        <div className="security-protection-content-block">
          <h2>Mobile Device Protection 📱</h2>
          <p>Keep your smartphones and tablets secure:</p>
          <ul>
            <li>Screen locks and biometric security</li>
            <li>App permissions management</li>
            <li>Remote tracking and wiping</li>
            <li>Secure app installation practices</li>
            <li>Mobile device encryption</li>
          </ul>
          <div className="emoji-display">📱 🔒 👆 🔐</div>
        </div>
        <EducationalResourcesButton />

      </section>
    </div>
  );
};

export default SecurityProtection; 