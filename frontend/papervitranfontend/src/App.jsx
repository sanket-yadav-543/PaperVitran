import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Material from "./pages/Material";
import About from "./pages/About";
import Contact from "./pages/Contact";
// You can add more pages later (About, Contact, etc.)

const App = () => {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Routes for each page */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/materials" element={<Material />} />
     
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
