import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";
import EducationalResourcesButton from "./ReturnButton";
import { handleTopicClick } from "./utils/searchUtils";
import Toast from "./components/Toast";
import { useWelcomeToast } from "./hooks/useWelcomeToast";

const MasteringPasswords = () => {
  const [showToast, setShowToast] = useWelcomeToast();

  return (
    <div className="mastering-passwords-container">
      {showToast && (
        <Toast 
          message="Click on any topic to search for more information! 📚" 
          onClose={() => setShowToast(false)}
        />
      )}

      <header className="mastering-passwords-header">
        <h1>Mastering Passwords 🔑</h1>
        <p>
          Learn how to create and manage strong passwords to keep your accounts
          secure in the digital age.
        </p>
      </header>

      <section className="mastering-passwords-content">
        <div className="mastering-passwords-content-block">
          <h2>Password Basics 📝</h2>
          <p>
            Understanding what makes a password strong and why it matters.
          </p>
          <ul>
            <li onClick={() => handleTopicClick("Password length and complexity requirements")}>
              Length and complexity requirements
            </li>
            <li onClick={() => handleTopicClick("Common password mistakes to avoid")}>
              Common password mistakes
            </li>
            <li onClick={() => handleTopicClick("Understanding password strength indicators")}>
              Password strength indicators
            </li>
            <li onClick={() => handleTopicClick("Why unique passwords are important")}>
              Why unique passwords matter
            </li>
          </ul>
          <div className="emoji-display">📝 🔍 💪 ✨</div>
        </div>

        <div className="mastering-passwords-content-block">
          <h2>Creating Strong Passwords 💡</h2>
          <p>Tips for creating memorable yet secure passwords:</p>
          <ul>
            <li onClick={() => handleTopicClick("Using passphrases")}>
              Using passphrases
            </li>
            <li onClick={() => handleTopicClick("Mixing characters effectively")}>
              Mixing characters effectively
            </li>
            <li onClick={() => handleTopicClick("Avoiding personal information")}>
              Avoiding personal information
            </li>
            <li onClick={() => handleTopicClick("Random generation techniques")}>
              Random generation techniques
            </li>
          </ul>
          <div className="emoji-display">💡 🎲 🔤 🔢</div>
        </div>

        <div className="mastering-passwords-content-block">
          <h2>Password Managers 🗄️</h2>
          <p>Using tools to manage your passwords securely:</p>
          <ul>
            <li onClick={() => handleTopicClick("Benefits of password managers")}>
              Benefits of password managers
            </li>
            <li onClick={() => handleTopicClick("Popular manager options")}>
              Popular manager options
            </li>
            <li onClick={() => handleTopicClick("Setting up and using managers")}>
              Setting up and using managers
            </li>
            <li onClick={() => handleTopicClick("Syncing across devices")}>
              Syncing across devices
            </li>
          </ul>
          <div className="emoji-display">🗄️ 🔐 📱 💻</div>
        </div>

        <div className="mastering-passwords-content-block">
          <h2>Best Practices 👑</h2>
          <p>Advanced tips for password security:</p>
          <ul>
            <li onClick={() => handleTopicClick("Regular password updates")}>
              Regular password updates
            </li>
            <li onClick={() => handleTopicClick("Multi-factor authentication")}>
              Multi-factor authentication
            </li>
            <li onClick={() => handleTopicClick("Secure password recovery")}>
              Secure password recovery
            </li>
            <li onClick={() => handleTopicClick("Handling shared accounts")}>
              Handling shared accounts
            </li>
          </ul>
          <div className="emoji-display">👑 🔄 🛡️ 🎯</div>
        </div>
        <EducationalResourcesButton />

      </section>
    </div>
  );
};

export default MasteringPasswords; 