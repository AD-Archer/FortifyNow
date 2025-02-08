// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PasswordGenerator from "./components/PasswordGenerator";
import HaveIBeenPwned from "./components/HaveIBeenPwned";
import Footer from "./components/Footer";
import WorkInProgress from "./components/WorkInProgress";
import EducationalResources from "./components/EducationalResources";
import HandlingBreaches from "./components/LibraryModules/HandlingBreaches";

//Modules
import MasteringPasswords from "./components/LibraryModules/MasteringPasswords";
import SecurityProtection from "./components/LibraryModules/SecurityProtection";
import TwoFactorAuth from "./components/LibraryModules/TwoFactorAuth";
import PhishingAwareness from "./components/LibraryModules/PhishingAwareness";


// Import global styles
import "./App.css";

// Import section-specific styles
import "./styles/MainSection.css";
import "./styles/Footer.css";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/have-i-been-pwned" element={<HaveIBeenPwned />} />
          <Route path="/work-in-progress" element={<WorkInProgress />} />

          <Route
            path="/educational-resources"
            element={<EducationalResources />}
          />

          <Route path="/mastering-passwords" element={<MasteringPasswords />} />

          <Route path="/handling-breaches" element={<HandlingBreaches />} />

          <Route path="/security-protection" element={<SecurityProtection />} />
          <Route path="/two-factor-auth" element={<TwoFactorAuth />} />
          <Route path="/phishing-awareness" element={<PhishingAwareness />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
