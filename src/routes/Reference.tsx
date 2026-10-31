import { motion } from "framer-motion";
import "../components/Reference/Reference.css";
import { cardAnimation, cardX } from "../components/Animations";

import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import { ReferenceItems } from "../components/Reference/ReferenceItems";
import { Intercontinental } from "../images";

function Reference() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={Intercontinental}
        title="Reference"
        text=""
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
                  <img loading="lazy" decoding="async" src={item.image} alt="" />
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
