import React from "react";
import "./css/mainpage.css";

import NavBar from "../components/navbar";
import ProfileFrame from "../components/profileframe";
import ProjectScroll from "../components/projectscroll";

import ProfileInfo from "../components/profileinfo";


const MainPage = () => {

  return (
    <div className="d-flex row p-5">
      <NavBar />
      <ProfileFrame/>
      <ProfileInfo />
      <ProjectScroll />
    </div>
  );
};

export default MainPage;
