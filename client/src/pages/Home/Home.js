import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import "./home.css";
import Resume from "./../../assets/docs/Resume.pdf";
import { FaMoon, FaSun } from "react-icons/fa";

const Home = () => {
  const [theme, setTheme] = useTheme();
  // handel theme
  const handelTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handelTheme}>
          {theme === "light" ? <FaMoon size={30} /> : <FaSun size={30} />}
        </div>
        <div className="container home-content">
          <h2>Hiii 🙋‍♂️ I'm</h2>

          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Web Developer",
                  "MERN Stack Developer",
                  "React Native Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <a
              className="btn btn-hire"
              href="https://api.whatsapp.com/send?phone=8822097309"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>

            <button></button>
            <a
              className="btn btn-resume"
              href={Resume}
              download="sadid-alam.pdf"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
