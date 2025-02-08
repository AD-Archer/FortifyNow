import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";
import EducationalResourcesButton from "./ReturnButton";
import { handleTopicClick } from "./utils/searchUtils";
import Toast from "./components/Toast";
import { useWelcomeToast } from "./hooks/useWelcomeToast";

const SecurityProtection = () => {
  const [showToast, setShowToast] = useWelcomeToast();

  return (
    <div className="security-protection-container">
      {showToast && (
        <Toast 
          message="Click on any topic to search for more information! 📚" 
          onClose={() => setShowToast(false)}
        />
      )}

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
            <li onClick={() => handleTopicClick("How to keep operating system and software updated")}>
              Keep your operating system and software up to date
            </li>
            <li onClick={() => handleTopicClick("Best antivirus and anti-malware software")}>
              Use antivirus and anti-malware software
            </li>
            <li onClick={() => handleTopicClick("How to enable firewall protection")}>
              Enable firewall protection
            </li>
            <li onClick={() => handleTopicClick("How to encrypt hard drives")}>
              Encrypt your hard drives
            </li>
            <li onClick={() => handleTopicClick("Setting up automatic backups")}>
              Set up automatic backups
            </li>
          </ul>
          <div className="emoji-display">🔒 💻 🛡️ 🔄</div>
        </div>

        <div className="security-protection-content-block">
          <h2>Network Security 🌐</h2>
          <p>Secure your internet connection and protect your data in transit:</p>
          <ul>
            <li onClick={() => handleTopicClick("WPA3 WiFi encryption setup guide")}>
              Use strong Wi-Fi encryption (WPA3)
            </li>
            <li onClick={() => handleTopicClick("How to change default router passwords")}>
              Change default router passwords
            </li>
            <li onClick={() => handleTopicClick("VPN for public WiFi security")}>
              Enable VPN for public Wi-Fi
            </li>
            <li onClick={() => handleTopicClick("How to monitor connected devices network")}>
              Monitor connected devices
            </li>
            <li onClick={() => handleTopicClick("Setting up guest networks")}>
              Use guest networks for visitors
            </li>
          </ul>
          <div className="emoji-display">🔐 📡 🌐 🔒</div>
        </div>

        <div className="security-protection-content-block">
          <h2>Security Keys and Authentication 🔑</h2>
          <p>
            Physical security keys provide the strongest form of authentication:
          </p>
          <ul>
            <li onClick={() => handleTopicClick("Understanding hardware security keys authentication")}>
              Understanding hardware security keys
            </li>
            <li onClick={() => handleTopicClick("FIDO2 and WebAuthn standards explained")}>
              FIDO2 and WebAuthn standards
            </li>
            <li onClick={() => handleTopicClick("YubiKey and security key options comparison")}>
              YubiKey and other security key options
            </li>
            <li onClick={() => handleTopicClick("How to setup security keys")}>
              Setting up security keys
            </li>
            <li onClick={() => handleTopicClick("Backup authentication methods guide")}>
              Backup authentication methods
            </li>
          </ul>
          <div className="emoji-display">🔑 🔐 🛡️ 🔒</div>
        </div>

        <div className="security-protection-content-block">
          <h2>Mobile Device Protection 📱</h2>
          <p>Keep your smartphones and tablets secure:</p>
          <ul>
            <li onClick={() => handleTopicClick("Screen locks and biometric security setup")}>
              Screen locks and biometric security
            </li>
            <li onClick={() => handleTopicClick("App permissions management guide")}>
              App permissions management
            </li>
            <li onClick={() => handleTopicClick("Remote tracking and wiping mobile devices")}>
              Remote tracking and wiping
            </li>
            <li onClick={() => handleTopicClick("Secure app installation practices")}>
              Secure app installation practices
            </li>
            <li onClick={() => handleTopicClick("Mobile device encryption guide")}>
              Mobile device encryption
            </li>
          </ul>
          <div className="emoji-display">📱 🔒 👆 🔐</div>
        </div>
        <EducationalResourcesButton />
      </section>
    </div>
  );
};

export default SecurityProtection; 