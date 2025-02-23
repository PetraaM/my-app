import React, { useState, useEffect } from "react";

const SlidingProjects = ({ projects }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerHeight = "60px";
  const topSpacing = "30px";

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        minHeight: `${projects.length * 100}vh`,
        marginTop: `calc(${headerHeight} + ${topSpacing})`,
      }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            position: "fixed",
            top: `calc(${headerHeight} + ${topSpacing})`,
            left: 0,
            width: "100%",
            height: `calc(100vh - ${headerHeight} - ${topSpacing})`,
            backgroundColor: "#242225",
            transform:
              index === projects.length - 1
                ? "none"
                : `translateY(${Math.min(
                    window.innerHeight * (projects.length - index - 1),
                    Math.max(
                      0,
                      window.innerHeight * (projects.length - index - 1) -
                        scrollPosition
                    )
                  )}px)`,
            zIndex: projects.length - index,
            display: "flex",
            padding: "40px",
            borderTop: "1px solid #ff66c4",
            borderBottom: "1px solid #ff66c4",
            boxSizing: "border-box",
          }}
        >
          {/* Project container */}
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              gap: "40px",
              margin: "0 auto",
              maxWidth: "1400px",
            }}
          >
            {/* Left side - Large image */}
            <div
              style={{
                flex: "1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={project.imageSrc}
                alt="Project preview"
                style={{
                  width: "685px",
                  height: "565px",
                  borderRadius: "8px",
                }}
              />
            </div>

            {/* Right side - Project info */}
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
              }}
            >
              <div
                style={{
                  maxWidth: "600px",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.6",
                    marginBottom: "2rem",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                  }}
                >
                  <a
                    href={project.link1.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#ff66c4",
                      textDecoration: "none",
                    }}
                  >
                    {project.link1.text}
                  </a>
                  <a
                    href={project.link2.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#ff66c4",
                      textDecoration: "none",
                    }}
                  >
                    {project.link2.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SlidingProjects;
