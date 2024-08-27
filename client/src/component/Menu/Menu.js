import React from "react";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Profile from "./../../assets/images/profile-pic.jpg";
import {
  FcHome,
  FcReadingEbook,
  FcAbout,
  FcBiotech,
  FcFinePrint,
  FcBusinessContact,
} from "react-icons/fc";
import "./Menu.css";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={Profile} alt="profile picture" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={100}
                  >
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={100}
                  >
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={100}
                  >
                    Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={100}
                  >
                    Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="project"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={100}
                  >
                    Project
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="workexp"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={100}
                  >
                    Work Experience
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={100}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                >
                  <FcAbout title={"About"} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                >
                  <FcReadingEbook title={"Education"} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                >
                  <FcBiotech title={"Tech Stack"} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="project"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                >
                  <FcFinePrint title={"Project"} />
                </Link>
              </div>
              <div className="nav-link">
                <Link
                  to="workexp"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                >
                  <FcReadingEbook title={"Work Experience"} />
                </Link>
              </div>

              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={100}
                >
                  <FcBusinessContact title={"Contact Me"} />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
