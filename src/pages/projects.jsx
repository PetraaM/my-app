// Projects.jsx
import React from "react";
import ProjectComponent from "../components/Project-component.jsx";
import PlantButlers from "../assets/Plant-butlers.png";
import PacMan from "../assets/Pac-man.png";
import FlappyIsland from "../assets/Flappy Island.png";
import "./projects-styles.css";
import Header from "../components/Header.jsx";
import TaskZilla from "../assets/TaskZilla.png";

const Projects = () => {
  return (
    <>
      <Header className="projects-header" />

      <div className="projects-container">
        <ProjectComponent
          imageSrc={TaskZilla}
          description="To Do App with Authentication, built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js).
          This application empowers users to manage their tasks efficiently while ensuring their data remains secure with user authentication. First web page where I worked with backend and databases."
          link1={{
            url: "https://plant-butlers.netlify.app/",
            text: "Live site",
          }}
          link2={{
            url: "https://github.com/PetraaM/Plant-butlers-complete-react-app",
            text: "GitHub",
          }}
          className="first-project" // Add a class for the first project
        />
        <ProjectComponent
          imageSrc={PlantButlers}
          description="Plant Butlers online shop, built with React. Goals: use and composition of custom components, use of useState for maintaining the state of one or more components, use of event handlers for user interaction, UI elements that update in response to app or component state changes, use of hooks for fetching data from an API, use of third party libraries, use of custom hooks, use of context for maintaing app state..."
          link1={{
            url: "https://plant-butlers.netlify.app/",
            text: "Live site",
          }}
          link2={{
            url: "https://github.com/PetraaM/Plant-butlers-complete-react-app",
            text: "GitHub",
          }}
          className="second-project"
        />
        <ProjectComponent
          imageSrc={PacMan}
          description="Pac-man, 90's inspired webpage, is showing off different things you can do with HTML and CSS. The idea was to use as much concepts as possible while still keeping webpages design in mind. Aditionally there is a pretty cool Pac-man game built with Vanilla Javascript."
          link1={{
            url: "https://effervescent-cuchufli-e43f8d.netlify.app/",
            text: "Live site",
          }}
          link2={{
            url: "https://github.com/PetraaM/pacman",
            text: "GitHub",
          }}
          className="third-project" // Add a class for the second project
        />
        <ProjectComponent
          imageSrc={FlappyIsland}
          description="Flappy Island, learning Javascript power while developing a game. 
          High Score Tracking: Compete with your friends to achieve the highest score.
          Responsive Design: The game adapts to different screen sizes, providing a seamless experience.
          API offers a nerdy pick up line after you lose all your lives."
          link1={{
            url: "https://effervescent-cuchufli-e43f8d.netlify.app/",
            text: "Live site",
          }}
          link2={{
            url: "https://github.com/PetraaM/Flappy-Island-game",
            text: "GitHub",
          }}
          className="fourth-project" // Add a class for the third project
        />
      </div>
    </>
  );
};

export default Projects;
