// AboutMe.jsx
import React from "react";
import AboutMeComponent from "../components/About-me-comp.jsx";
import "../components/Styling-aboutme.css";

import Header from "../components/Header.jsx";

const AboutMe = () => {
  const emailAddress = "petra.milicevic@hyperisland.se";

  const description = (
    <>
      I'm Petra, a creative frontend developer with a passion for UI design.
      <br />
      I enjoy bringing ideas to life through code and creating user-friendly
      interfaces. If you need someone equipped with genuine curiosity and hunger
      to learn more, I am the perfect person for you. I am hard working,
      motivated and determined.
      <br />
      <table>
        <tr>
          <td>HTML</td>
          <td>CSS</td>
          <td>Javascript</td>
          <td>React</td>
          <td>Node.js</td>
        </tr>
        <tr>
          <td>Next.js</td>
          <td>Figma</td>
          <td>UI design</td>
          <td>Project management</td>
          <td>Agile methodology</td>
        </tr>
        <td className="newskills" colspan="10">
          ... new skills loading ...
        </td>
      </table>
    </>
  );

  return (
    <>
      <Header />
      <AboutMeComponent
        title="why you should offer me an internship"
        imageSrc="https://via.placeholder.com/150" // Replace with your image URL
        altText="Profile"
        description={description}
        linkedInUrl="https://www.linkedin.com/in/petra-milicevic-3321b71aa/"
        githubUrl="https://github.com/PetraaM"
        emailAddress={emailAddress}
      />
    </>
  );
};

export default AboutMe;
