// AboutMeComponent.jsx
import React from "react";
import "./Styling-aboutme.css";
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
        <div className="creative-heading">
          <span className="big-why">WHY</span>
          <div className="heading-text">
            <span>YOU SHOULD HIRE ME AS YOUR</span>
            <span className="highlight">FRONTEND DEVELOPER</span>
          </div>
        </div>
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
