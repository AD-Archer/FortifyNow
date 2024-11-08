// src/App.js
import React from "react"; // Move this import to the top
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PasswordGenerator from "./components/PasswordGenerator";
import HaveIBeenPwned from "./components/HaveIBeenPwned"; // Updated import
import Footer from "./components/Footer";

// Import global styles
import "./App.css";

// Import section-specific styles
import "./styles/MainSection.css";
import "./styles/Footer.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<MainSection />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/have-i-been-pwned" element={<HaveIBeenPwned />} />{" "}
          {/* Updated route path */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
