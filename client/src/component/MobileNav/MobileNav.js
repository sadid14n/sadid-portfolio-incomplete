import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancelPresentation } from "react-icons/md";

import { Link } from "react-scroll";
import {
  FcHome,
  FcReadingEbook,
  FcAbout,
  FcBiotech,
  FcFinePrint,
  FcBusinessContact,
} from "react-icons/fc";
import "./MobileNav.css";

const MobileNav = () => {
  const [opne, setOpen] = useState(false);
  const handelOpen = () => {
    setOpen(!opne);
  };

  // handel menu click
  const handelMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {opne ? (
            <MdOutlineCancelPresentation
              size={22}
              className="mobile-nav-icon"
              onClick={handelOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={22}
              className="mobile-nav-icon"
              onClick={handelOpen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio</span>
        </div>
        {opne && (
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                  onClick={handelMenuClick}
                >
                  <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                  onClick={handelMenuClick}
                >
                  <FcAbout /> About
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                  onClick={handelMenuClick}
                >
                  <FcReadingEbook /> Education
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                  onClick={handelMenuClick}
                >
                  <FcBiotech /> Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                  onClick={handelMenuClick}
                >
                  <FcFinePrint /> Project
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexp"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                  onClick={handelMenuClick}
                >
                  <FcReadingEbook /> Work Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                  onClick={handelMenuClick}
                >
                  <FcBusinessContact /> Contact Me
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
