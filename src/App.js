// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import BottomSection from "./components/BottomSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <BottomSection />
    </div>
  );
}

export default App;
