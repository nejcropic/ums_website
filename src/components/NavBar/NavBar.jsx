import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

import { navAnimation } from "../Animations.jsx";
import { NavMenuItems } from "./NavMenuItems.jsx";

function NavBar() {
  const [navState, setNavState] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const changeNavState = () => {
    if (window.scrollY === 0) {
      setNavState(false);
    } else if (window.scrollY < lastScrollY) {
      setNavState(false);
    } else {
      setNavState(true);
    }
    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", changeNavState);

  const [navMenu, setNavMenu] = useState(false);
  const showNavBar = () => setNavMenu(!navMenu);

  return (
    <motion.nav
      variants={navAnimation}
      initial="hidden"
      animate="show"
      className={navState ? "nav-group nav-bg" : "nav-group"}
    >
      <div className="menu-icons" onClick={showNavBar}>
        <i className={navMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={navMenu ? "nav-menu active" : "nav-menu "}>
        {NavMenuItems.map((item, index) => {
          return (
            <div key={index}>
              <hr></hr>
              <Link
                className={item.cName}
                to={item.url}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                  showNavBar();
                }}
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
      {/* <ul className={navMenu ? "nav-menu active" : "nav-menu "}>
                    {NavMenuItems.map((item, index) =>{
                        return(
                            <li key={index}>
                                <hr></hr>
                                <Link className={item.cName} to={item.url}  onClick={() => {
                                    window.scroll({
                                    top: 0,
                                    left: 0,
                                    behavior: "smooth",
                                    });
                                    showNavBar();
                                }}>{item.title}</Link>
                            </li>
                        )
                    })}
                        
                </ul> */}
    </motion.nav>
  );
}

export default NavBar;
