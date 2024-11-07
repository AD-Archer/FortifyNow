// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
// Import the global styles first
import './App.css'; 

// Import sections specifically
import './styles/MainSection.css';
import './styles/Footer.css';
import './styles/animations.css';
import './styles/responsive.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
