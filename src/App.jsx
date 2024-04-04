import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
