import React from "react";
import "./About.css";
import Profile from "../../assets/images/profile-pic.jpg";
const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12 about-img">
            <img src={Profile} alt="My Profile Image" />
          </div>
          <div className="col-md-6 col-xs-12 col-sm-12 about-text">
            <h1>About Me</h1>
            <p>
              I’m a passionate Computer Science Engineering student and a
              skilled full-stack web developer. I love building responsive,
              dynamic websites and applications from the ground up, focusing on
              clean code and seamless user experiences. My expertise spans
              front-end and back-end development and database management, with
              hands-on experience in a variety of tools and frameworks. I’m
              constantly learning and evolving, always ready to tackle new
              challenges and bring innovative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
