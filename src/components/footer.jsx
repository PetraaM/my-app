import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LiaLinkedinIn } from "react-icons/lia";
import { BiLogoGithub } from "react-icons/bi";
import { LiaMailBulkSolid } from "react-icons/lia";
import "./footer-styling.css";

const Footer = () => {
  const location = useLocation();
  const linkedInUrl = "https://www.linkedin.com/in/petra-milicevic-3321b71aa/";
  const githubUrl = "https://github.com/PetraaM";
  const emailAddress = "petra.milicevic@hyperisland.se";

  return (
    <footer className="app-footer">
      <h3 className="say-hello">say hello</h3>
      <a
        href={`mailto:${emailAddress}`}
        className="email-icon"
        title="Send an email"
      >
        <LiaMailBulkSolid size={47} />
      </a>
      <a href={linkedInUrl} target="_blank" rel="noreferrer">
        <LiaLinkedinIn className="linkedin-icon" />
      </a>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <BiLogoGithub className="github-icon" />
      </a>
    </footer>
  );
};

export default Footer;
