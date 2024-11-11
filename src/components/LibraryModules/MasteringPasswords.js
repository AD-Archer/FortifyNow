import React from "react";
import "../LibraryModules/styles/SharedModuleStyles.css";

const MasteringPasswords = () => {
  return (
    <div className="mastering-passwords-container">
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
            <li>Length and complexity requirements</li>
            <li>Common password mistakes</li>
            <li>Password strength indicators</li>
            <li>Why unique passwords matter</li>
          </ul>
          <div className="emoji-display">📝 🔍 💪 ✨</div>
        </div>

        <div className="mastering-passwords-content-block">
          <h2>Creating Strong Passwords 💡</h2>
          <p>Tips for creating memorable yet secure passwords:</p>
          <ul>
            <li>Using passphrases</li>
            <li>Mixing characters effectively</li>
            <li>Avoiding personal information</li>
            <li>Random generation techniques</li>
          </ul>
          <div className="emoji-display">💡 🎲 🔤 🔢</div>
        </div>

        <div className="mastering-passwords-content-block">
          <h2>Password Managers 🗄️</h2>
          <p>Using tools to manage your passwords securely:</p>
          <ul>
            <li>Benefits of password managers</li>
            <li>Popular manager options</li>
            <li>Setting up and using managers</li>
            <li>Syncing across devices</li>
          </ul>
          <div className="emoji-display">🗄️ 🔐 📱 💻</div>
        </div>

        <div className="mastering-passwords-content-block">
          <h2>Best Practices 👑</h2>
          <p>Advanced tips for password security:</p>
          <ul>
            <li>Regular password updates</li>
            <li>Multi-factor authentication</li>
            <li>Secure password recovery</li>
            <li>Handling shared accounts</li>
          </ul>
          <div className="emoji-display">👑 🔄 🛡️ 🎯</div>
        </div>
      </section>
    </div>
  );
};

export default MasteringPasswords; 