import React, { useState } from "react";
import "../styles/PasswordGenerator.css";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength] = useState(12);

  // Array of characters to use in the password (no special characters)
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  // Function to generate readable password (like Apple's passwords)
  const generateReadablePassword = () => {
    let password = "";
    let lengthRemaining = passwordLength;

    // Generate the password by adding random characters from the pool of letters and numbers
    while (lengthRemaining > 0) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      lengthRemaining--;
    }

    // Return the password in chunks of 4 characters (like Apple's password style)
    const formattedPassword = password.match(/.{1,4}/g).join("-");
    setPassword(formattedPassword);
  };

  return (
    <div className="password-generator-container">
      <div className="password-generator">
        <h2>Generate a Readable Strong Password</h2>

        <div className="information">
          <p>
            Making a password is hard, so we decided to help you out. Remember,
            you shouldn't share your passwords with anyone or anything you can't
            trust.
          </p>
          <p>
            If you would like to make your own password, here are the rules for
            a good password:
          </p>
          <ul>
            <li> At least 12 characters long</li>
            <li>
               A combination of uppercase and lowercase letters and numbers
            </li>
            <li>
               Do not reuse passwords
            </li>
            <li> Avoid simple patterns</li>
            <li>⚠️ Passwords do not save</li>
          </ul>
        </div>

        {/* Generate Password Button */}
        <button onClick={generateReadablePassword}>Generate Password</button>

        {/* Display the "Copy" Button and Generated Password */}

        {/* Display the generated password below the "Copy" button */}
        <div className="password-display">

        {password && (
          <div className="generated-password">
            <p>Your generated password:</p>
            <div className="password-output">{password}</div>
            <p>Please remember to write this password down or save it in your password manager of choice</p>
          </div>
        )}
        </div>
          <button onClick={() => navigator.clipboard.writeText(password)}>
            Copy
          </button>
        {/* Educational Link */}
        <div className="links">
          <p>
            Learn more about secure passwords in our{" "}
            <a href="/educational-resources">Educational Resources</a> section.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
