import React, { useState, useEffect } from "react";
import "./css/navbar.css";

import home_white from "../images/home_white.svg";
import home_black from "../images/home_black.svg";

import phone_white from "../images/phone_white.svg";
import phone_black from "../images/phone_black.svg";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="d-flex column justify-content-evenly p-4">
      <div className="d-flex align-items-center">
        {" "}
        <button className="NavBar_Button">Welcome !</button>
      </div>
      <div className="d-flex align-items-center">
        <button className="NavBar_Button">About Me</button>
      </div>
      <div className="d-flex align-items-center">
        <button className="NavBar_Button">MY Projects</button>
      </div>
      <div className="">
        <button className="NavBar_Button">
          <img
            src={theme === "light" ? home_black : home_white}
            alt="Home"
            className="m-2"
          />
        </button>
        <button className="NavBar_Button">
          <img
            src={theme === "light" ? phone_black : phone_white}
            alt="Home"
            className="m-2"
          />
        </button>
      </div>
      <div className="d-flex align-items-center">
        <button className="dark_mode_button" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
