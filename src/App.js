// src/App.js
import React from "react"; // Move this import to the top
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PasswordGenerator from "./components/PasswordGenerator";
import HaveIBeenPwned from "./components/HaveIBeenPwned"; // Updated import
import Footer from "./components/Footer";
import WorkInProgress from "./components/WorkInProgress";
import EducationalResources from "./components/EducationalResources";

//Modules
import MasteringPasswords from "./components/LibaryModules/MasteringPasswords";


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
          <Route path="/have-i-been-pwned" element={<HaveIBeenPwned />} />
          <Route path="/work-in-progress" element={<WorkInProgress />} />

          {/* Link to the Educational Resources hub */}
          <Route
            path="/educational-resources"
            element={<EducationalResources />}
          />

          {/* Link to the Mastering Passwords module */}
          <Route path="/mastering-passwords" element={<MasteringPasswords />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
