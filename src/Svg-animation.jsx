/*
import React, { useEffect, useRef } from "react";
import "./Svg-animation.css";

const SvgAnimation = ({ backgroundColor }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = svgRef.current;
    const colors = ["#c280a1", "#521649", "#353938", "#000000", "#ff97f0"];

    function drawCircles() {
      removeAll(); // Clear existing circles before drawing new ones

      for (let i = 0; i < 15; i++) {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        const radius = Math.floor(Math.random() * 500);
        circle.setAttribute("r", radius);
        circle.setAttribute("cx", Math.floor(Math.random() * 800));
        circle.setAttribute("cy", Math.floor(Math.random() * 800));
        circle.setAttribute("stroke-width", Math.floor(Math.random() * 5));
        circle.setAttribute(
          "stroke",
          colors[Math.floor(Math.random() * colors.length)]
        );
        circle.setAttribute("fill", "none"); // Set fill to "none" for transparency

        // Apply fade-in animation using CSS transitions
        circle.style.opacity = 0;
        circle.style.transition = "opacity 0.5s";
        requestAnimationFrame(() => {
          circle.style.opacity = 2;
        });

        svg.appendChild(circle);
      }
    }
    function removeAll() {
      while (svg.firstChild) {
        svg.removeChild(svg.lastChild);
      }
    }

    // Periodically change circles every 0.8 seconds
    const intervalId = setInterval(() => {
      drawCircles();
    }, 3000);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <svg
      id="svg"
      ref={svgRef}
      className="SvgAnimation"
      style={{ background: backgroundColor }}
    ></svg>
  );
};

export default SvgAnimation;
*/