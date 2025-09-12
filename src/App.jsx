import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./components/BlurBob/BlurBlob";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      {/* Blur Blob */}
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />

      {/* Background grid */} 
      <div className="background-grid"></div>

      {/* Foreground Components */}
      <div className="app-content">
        <Navbar />
        <About /> {/* Background grid will be inside About now */}
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
