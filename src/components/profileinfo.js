import React from "react";
import "./css/profileinfo.css";

const ProfileInfo = () => {
  return (
    <div className="label_container">
      <div className="p-2 name_button">
        <label className="label_10">MNurdogdu</label>
        <label className="label_11">Meliha Nurdoğdu</label>
      </div>
      <div className="p-2 ">
        <label className="label_2">UX Designer</label>
      </div>
      <div className="p-2">
        <label className="label_3">
          I have been working on designing many digital products for a few years
          now. Well-versed in fundamental design principles, I am eager to
          design more products that deliver impactful and user-friendly digital
          experiences. Beyond the professional sphere, I maintain a keen
          interest in psychology and human perception, aligning this knowledge
          with a commitment to designing human-centered products.
        </label>
      </div>
      <div className="p-2">
        <label className="label_4">
          Take a look at <a className="link_label" href=""> My Projects </a> or{" "}
          <a className="link_label" href="">Get in Touch!</a>
        </label>
      </div>
    </div>
  );
};

export default ProfileInfo;
