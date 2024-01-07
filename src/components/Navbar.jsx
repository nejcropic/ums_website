import React, {useState, Component} from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.css"
import { motion } from '../../node_modules/framer-motion/dist/framer-motion';

import { navAnimation } from "../components_items/Animations.jsx";
import { NavMenuItems } from "../components_items/NavMenuItems";

function  NavBar (){
    const [navState, setNavState] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0);
    const changeNavState = () =>{
        if (window.scrollY === 0){
            setNavState(false)
        }
        else if(window.scrollY < lastScrollY) {
            setNavState(false)        
        } else{
            setNavState(true)
        }
        setLastScrollY(window.scrollY); 
    }

    window.addEventListener('scroll', changeNavState)

    const [navMenu, setNavMenu] = useState(false)
    const showNavBar = () => setNavMenu(!navMenu)
    

        return (  
            <motion.nav variants={navAnimation} initial="hidden" animate="show" className={navState ? 'nav-group nav-bg' : 'nav-group'}>
                <div className="menu-icons" onClick={showNavBar} >
                    <h3>Menu</h3>
                    <i className={navMenu ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={navMenu ? "nav-menu active" : "nav-menu "}>
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
                        
                </ul>
            </motion.nav>
        );
    
}

export default NavBar;