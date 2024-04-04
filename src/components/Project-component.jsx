import React from "react";
import "./Component-styles.css";

const ProjectComponent = ({
  imageSrc,
  description,
  link1,
  link2,
  className,
}) => {
  return (
    <div className={`project-component ${className}`}>
      <img
        src={imageSrc}
        alt="Sample"
        style={{ width: "400px", height: "auto" }}
        className="custom-image"
      />
      <p className="project-text">
        {description}
        <br />
        <br />
        <a
          href={link1.url}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          {link1.text}
        </a>
        <a
          href={link2.url}
          target="_blank"
          rel="noreferrer"
          className="project-link-2"
        >
          {link2.text}
        </a>
      </p>
    </div>
  );
};

export default ProjectComponent;
