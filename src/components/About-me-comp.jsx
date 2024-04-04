// AboutMeComponent.jsx
import React from "react";
import "./Styling-aboutme.css";
import PetraCollage from "../assets/Petra-collage.png";
import Footer from "./footer.jsx";
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
      <Footer />
    </div>
  );
};

export default AboutMeComponent;
