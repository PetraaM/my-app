// Projects.jsx
import React from "react";
import SlidingProjects from "../components/SlidingProjects";
import Header from "../components/Header";
import PlantButlers from "../assets/Plant-butlers.png";
import PacMan from "../assets/Pac-man.png";
import FlappyIsland from "../assets/Flappy Island.png";
import TaskZilla from "../assets/TaskZilla.png";
import Ksss from "../assets/ksss.png";
import Nomnom from "../assets/Nomnom.png";
import "./projects-styles.css";

const Projects = () => {
  const projectsData = [
    {
      imageSrc: Nomnom,
      description:
        "Nom-nom is a full-stack food delivery app where users can order food from their favorite restaurants. Customers can create an account, browse menus, place orders, and track their deliveries. Restaurant owners can create their own pages, manage their menus, receive orders, and update delivery times. Built with React, Node.js, Express, and MongoDB, with integrated payment system.",
      link1: {
        url: "https://mern-food-app-frontend-wl6r.onrender.com/",
        text: "Live site",
      },
      link2: {
        url: "https://github.com/PetraaM/mern-food-app-frontend",
        text: "GitHub",
      },
    },
    {
      imageSrc: Ksss,
      description:
        "Ksss is the first website where our small team worked with a real client: Royal Swedish Sailing Club. They have an amazing historical collection which was gathered thru years and they wanted a separate website with a historical timeline to show it off. We used React, Next.js and Sanity CMS.",
      link1: {
        url: "https://ksss-history-site.vercel.app/",
        text: "Live site",
      },
      link2: {
        url: "https://github.com/ksss-github/ksss-history-site",
        text: "GitHub",
      },
    },
    {
      imageSrc: TaskZilla,
      description:
        "To Do App with Authentication, built using the PERN stack (PostgreSQL, Express.js, React.js, Node.js). This application empowers users to manage their tasks efficiently while ensuring their data remains secure with user authentication. First web page where I worked with backend and databases.",
      link1: {
        url: "https://to-do-app-pern.netlify.app/",
        text: "Live site",
      },
      link2: {
        url: "https://github.com/PetraaM/Plant-butlers-complete-react-app",
        text: "GitHub",
      },
    },
    {
      imageSrc: PlantButlers,
      description:
        "Plant Butlers online shop, built with React. Goals: use and composition of custom components, use of useState for maintaining the state of one or more components, use of event handlers for user interaction, UI elements that update in response to app or component state changes, use of hooks for fetching data from an API, use of third party libraries, use of custom hooks, use of context for maintaing app state...",
      link1: {
        url: "https://plant-butlers.netlify.app/",
        text: "Live site",
      },
      link2: {
        url: "https://github.com/PetraaM/Plant-butlers-complete-react-app",
        text: "GitHub",
      },
    },
    {
      imageSrc: PacMan,
      description:
        "Pac-man, 90's inspired webpage, is showing off different things you can do with HTML and CSS. The idea was to use as much concepts as possible while still keeping webpages design in mind. Aditionally there is a pretty cool Pac-man game built with Vanilla Javascript.",
      link1: {
        url: "https://effervescent-cuchufli-e43f8d.netlify.app/",
        text: "Live site",
      },
      link2: {
        url: "https://github.com/PetraaM/pacman",
        text: "GitHub",
      },
    },
    {
      imageSrc: FlappyIsland,
      description:
        "Flappy Island, learning Javascript power while developing a game. High Score Tracking: Compete with your friends to achieve the highest score. Responsive Design: The game adapts to different screen sizes, providing a seamless experience. API offers a nerdy pick up line after you lose all your lives.",
      link1: {
        url: "https://effervescent-cuchufli-e43f8d.netlify.app/",
        text: "Live site",
      },
      link2: {
        url: "https://github.com/PetraaM/Flappy-Island-game",
        text: "GitHub",
      },
    },
  ];

  return (
    <div className="projects-page">
      <Header className="projects-header" />
      <SlidingProjects projects={projectsData} />
    </div>
  );
};

export default Projects;
