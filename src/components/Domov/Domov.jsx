import "./Domov.css";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-router-dom";

import { Logo, Naslovna } from "../../index";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import BackgroundSlider from "../BackgroundSlider/BackgroundSlider";

function HomeBody() {
  const backgroundAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "ease",
      },
    },
  };

  const mainAnimation = {
    hidden: {
      opacity: 0,
      scaleY: 0,
    },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const navAnimation = {
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    show: {
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const grProjektiElementId = "gr_projekti";
  const adaptacijeElementId = "adaptacije";
  const suhomontazaElementId = "suhomontaza";
  const zunUreditevElementId = "zun_ureditev";

  return (
    <>
      <NavBar />
      <motion.div
        variants={backgroundAnimation}
        initial="hidden"
        animate="show"
        className="first-container"
      >
        <motion.div
          variants={mainAnimation}
          initial="hidden"
          animate="show"
          className="first-container-effect"
        >
          <div className="first-container-title">
            <div className="first-container-title-inner">
              <img alt="" src={Logo} />
            </div>
          </div>
          <motion.nav variants={navAnimation} initial="hidden" animate="show">
            <ul>
              <li>
                <Link to={`/storitve#${grProjektiElementId}`}>
                  Gradbeni projekti
                </Link>
              </li>
              <li>
                <Link to={`/storitve#${adaptacijeElementId}`}>Adaptacije</Link>
              </li>
              <li>
                <Link to={`/storitve#${suhomontazaElementId}`}>
                  Suhomontažna dela
                </Link>
              </li>
              <li>
                <Link to={`/storitve#${zunUreditevElementId}`}>
                  Zunanja ureditev
                </Link>
              </li>
            </ul>
          </motion.nav>
        </motion.div>
        <BackgroundSlider />
        {/* 
        <div className="container-background">
          <img src={Naslovna} />
        </div>
			*/}
      </motion.div>

      <Footer />
    </>
  );
}

export default HomeBody;
