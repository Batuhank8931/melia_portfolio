import React, { useState } from "react";
import "./css/projectscroll.css";

import imac from "../images/imac.png";

const ProjectScroll = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="project-scroll" onMouseMove={handleMouseMove}>
      <div
        style={{
          zIndex: hoveredIndex === 0 ? 10 : 1,
          transform: hoveredIndex === 0 ? "scale(1.1)" : "scale(1)",
          boxShadow:
            hoveredIndex === 0 ? `10px 10px 30px rgba(0, 0, 0, 0.2)` : `none`,
          transition: "all 0.3s",
        }}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="">
          <img src={imac} alt="imac" className="imac mb-4" />
        </div>
        <div className="d-flex flex-column align-items-start title_box">
          <label className="title_1">Finder</label>
          <label className="title_2">Smart glove geo-location tool</label>
        </div>
      </div>
      <div
        style={{
          zIndex: hoveredIndex === 1 ? 10 : 1,
          transform: hoveredIndex === 1 ? "scale(1.1)" : "scale(1)",
          boxShadow:
            hoveredIndex === 1 ? `10px 10px 30px rgba(0, 0, 0, 0.2)` : `none`,
          transition: "all 0.3s",
        }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <img src={imac} alt="imac" className="imac mb-4" />
        </div>
        <div className="d-flex flex-column align-items-start title_box">
          <label className="title_1">Vision Tool</label>
          <label className="title_2">AI supported detection tool</label>
        </div>
      </div>
      <div
        style={{
          zIndex: hoveredIndex === 2 ? 10 : 1,
          transform: hoveredIndex === 2 ? "scale(1.1)" : "scale(1)",
          boxShadow:
            hoveredIndex === 2 ? `10px 10px 30px rgba(0, 0, 0, 0.2)` : `none`,
          transition: "all 0.3s",
        }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <img src={imac} alt="imac" className="imac mb-4" />
        </div>
        <div className="d-flex flex-column align-items-start title_box">
          <label className="title_1">Vision Tool</label>
          <label className="title_2">AI supported detection tool</label>
        </div>
      </div>
    </div>
  );
};

export default ProjectScroll;
