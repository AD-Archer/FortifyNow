// src/components/HaveIBeenPwned.js
import React, { useState } from "react";

const HaveIBeenPwned = () => {
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle the API call
  const checkPwned = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    const apiUrl = `https://haveibeenpwned.com/api/v3/breachedaccount/${email}`;

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "User-Agent": "YourAppNameHere", // HIBP requires a User-Agent header
          "hibp-api-key": "YOUR_API_KEY", // Replace with your actual API key
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else if (response.status === 404) {
        setResult("No breaches found for this email!");
      } else {
        setError("Error fetching data, please try again.");
      }
    } catch (err) {
      setError("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pwned-check-container">
      <h2>Check if your email has been pwned!</h2>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={checkPwned} disabled={loading || !email}>
        {loading ? "Checking..." : "Check Email"}
      </button>

      {result && (
        <div className="result">
          {Array.isArray(result) ? (
            <div>
              <h3>Breaches Found:</h3>
              <ul>
                {result.map((breach) => (
                  <li key={breach.Name}>
                    <p>{breach.Name}</p>
                    <p>{breach.Domain}</p>
                    <a
                      href={breach.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      More Info
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>{result}</p>
          )}
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default HaveIBeenPwned;
