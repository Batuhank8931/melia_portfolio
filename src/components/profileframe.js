import React from "react";
import "./css/profileframe.css";

import profile_picture from "../images/profile_picture.png";
import half_1 from "../images/half_1.png"; // Ensure these imports are used for background images
import half_2 from "../images/half_2.png";

const ProfileFrame = () => {
  return (
    <div style={{height:"300px"}}>
      <div className="picture_circle d-flex align-items-center justify-content-center">
        <img
          src={profile_picture}
          alt="profile picture"
          className=""
        />
      </div>
      <div className="circles p-1 align-items-center justify-content-center">
        <img src={half_1} alt="half_1" className="halfs" />
        <img src={half_2} alt="half_2" className="halfs" />
      </div>
    </div>
  );
};

export default ProfileFrame;
