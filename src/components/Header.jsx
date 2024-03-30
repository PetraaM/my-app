import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoGithub } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import "./Header-styling.css";

const Header = () => {
  const location = useLocation();
  const linkedInUrl = "https://www.linkedin.com/in/petra-milicevic-3321b71aa/";
  const githubUrl = "https://github.com/PetraaM";
  const emailAddress = "petra.milicevic@hyperisland.se";

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
        href="https://drive.google.com/file/d/1f_P48kEAjHb-dFktHyma60QM1Ay7K420/view?usp=sharing"
        type="application/pdf"
        className={`Header-link ${location.pathname === "/cv" ? "active" : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        my CV
      </a>
      {/* Add links for other routes as needed */}
      <a href={linkedInUrl} target="_blank" rel="noreferrer">
        <LiaLinkedinIn className="linkedin-icon" />
      </a>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <BiLogoGithub className="github-icon" />
      </a>
      <a
        href={`mailto:${emailAddress}`}
        className="email-icon"
        title="Send an email"
      >
        <MdOutlineEmail />
      </a>
    </header>
  );
};

export default Header;
