import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { motion } from "framer-motion";

import { navAnimation } from "../Animations";
import { NavMenuItems } from "./NavMenuItems";

function NavBar() {
  const [navState, setNavState] = useState(false);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const changeNavState = () => {
      const currentY = window.scrollY;
      setNavState(currentY > 0 && currentY >= lastScrollY);
      lastScrollY = currentY;
    };
    window.addEventListener("scroll", changeNavState, { passive: true });
    return () => window.removeEventListener("scroll", changeNavState);
  }, []);

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
      
    </motion.nav>
  );
}

export default NavBar;
