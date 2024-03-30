// AboutMeComponent.jsx
import React from "react";
import "./Styling-aboutme.css";
import PetraCollage from "../assets/Petra-collage.png";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { MdAlternateEmail } from "react-icons/md";
const AboutMeComponent = ({
  title,
  altText,
  description,
  linkedInUrl,
  githubUrl,
  emailAddress,
}) => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <img src={PetraCollage} alt={altText} className="portrait-image" />
        <p>
          {description}
          <br />
          <br />
        </p>
      </div>
    </div>
  );
};

export default AboutMeComponent;
