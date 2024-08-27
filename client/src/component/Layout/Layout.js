import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./layout.css";
import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handelClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icon">
            <p onClick={handelClick}>
              {toggle ? (
                <IoIosArrowBack size={30} />
              ) : (
                <IoIosArrowForward size={30} />
              )}
            </p>
          </div>
          <Menu toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;
