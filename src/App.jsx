import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainImage from "./assets/Main portrait 2.png";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
import Projects from "./pages/projects.jsx";
import AboutMe from "./pages/About-me.jsx";
import "./App.css";
import LandingPage from "./pages/Landing_page.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        {/* Add routes for other sections as needed */}
      </Routes>
    </Router>
  );
};

export default App;
