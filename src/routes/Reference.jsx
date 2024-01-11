import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import "../components/Reference/Reference.css";
import { cardAnimation, cardX } from "../components/Animations.jsx";

import NavBar from "../components/NavBar/NavBar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { ReferenceItems } from "../components/Reference/ReferenceItems.jsx";
import { Intercontinental } from "../index";

function Reference() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={Intercontinental}
        title="Reference"
        text=""
        url="/reference"
        btnClass="show"
      />

      <div className="reference-wrapper">
        <motion.div
          variants={cardAnimation}
          initial="hidden"
          animate="show"
          className="reference-card"
        >
          {ReferenceItems.map((item, index) => {
            return (
              <motion.div
                variants={cardX}
                animate={{ rotate: 360 }}
                className="r-card"
                key={index}
              >
                <div className="r-image">
                  <img src={item.image} alt="" />
                </div>
                <h5>Leto izgradnje: {item.besedilo}</h5>
                <h4>{item.title}</h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Reference;
