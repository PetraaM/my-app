import React from "react";
import AboutMeComponent from "../components/About-me-comp.jsx";
import "../components/Styling-aboutme.css";
import Header from "../components/Header.jsx";

const AboutMe = () => {
  const emailAddress = "petra.milicevic@hyperisland.se";

  // Create an array of skills grouped by category
  const skills = {
    frontend: [
      "HTML/CSS",
      "Javascript",
      "Angular",
      "React",
      "Typescript",
      "Node.js",
    ],
    tools: [
      "Next.js",
      "Unit testing (Jasmine)",
      "E2E Testing (Cypress)",
      "Azure Dev Ops",
      "Git Hub",
      "Git",
    ],
    design: [
      "SEO",
      "UX/UI design",
      "Figma",
      "Project management",
      "Agile methodology",
    ],
  };

  const description = (
    <>
      I'm Petra, a creative frontend developer who loves solving complex coding
      challenges and creating beautiful UI designs. I transform ideas into
      user-friendly interfaces, always looking for the most elegant solution to
      any problem. My genuine curiosity drives me to constantly learn and
      improve my skills. I bring strong problem-solving abilities, attention to
      detail, and a determined work ethic to every project.
      <br />
      <div className="skills-container">
        {Object.values(skills)
          .flat()
          .map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        <div className="newskills">... new skills loading ...</div>
      </div>
    </>
  );

  return (
    <>
      <Header />
      <AboutMeComponent
        title={<h1 className="about-title">WHY YOU SHOULD HIRE ME</h1>}
        description={description}
        linkedInUrl="https://www.linkedin.com/in/petra-milicevic-3321b71aa/"
        githubUrl="https://github.com/PetraaM"
        emailAddress={emailAddress}
      />
    </>
  );
};

export default AboutMe;
