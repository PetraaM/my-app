import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header-styling.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className="App-header">
      <Link
        to="/"
        className={`Header-link-main ${
          location.pathname === "/" ? "active" : ""
        }`}
      >
        petra.m
      </Link>
      <Link
        to="/about"
        className={`Header-link ${
          location.pathname === "/about" ? "active" : ""
        }`}
      >
        about me
      </Link>
      <Link
        to="/projects"
        className={`Header-link ${
          location.pathname === "/projects" ? "active" : ""
        }`}
      >
        projects
      </Link>
      <a
        href="https://drive.google.com/file/d/1MQKfcWoijzh9Zm5ITFnBI6winWSfrxJM/view?usp=drive_link"
        type="application/pdf"
        className={`Header-link ${location.pathname === "/cv" ? "active" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        my CV
      </a>
    </header>
  );
};

export default Header;
