import React from "react";
import OhHello from "../assets/Oh Hello.png";
import MainImage from "../assets/Main portrait 2.png";
import "./Landing_styling.css";
import Header from "../components/Header.jsx";
import Footer from "../components/footer.jsx";

const LandingPage = () => {
  const linkedInUrl = "https://www.linkedin.com/in/petra-milicevic-3321b71aa/";
  const githubUrl = "https://github.com/PetraaM";
  const emailAddress = "petra.milicevic@hyperisland.se";

  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <div className="Intro">
          <img
            src={MainImage}
            alt="Portrait of Petra"
            className="portrait-image"
          />
          <img
            src={OhHello}
            alt="Oh Hello greeting"
            className="intro-greeting"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
