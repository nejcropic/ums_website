import { motion } from "framer-motion";
import "../components/Reference/Reference.css";
import { cardAnimation, cardX } from "../components/Animations";

import Hero from "../components/Hero/Hero";
import { ReferenceItems } from "../components/Reference/ReferenceItems";
import { Intercontinental } from "../images";

function Reference() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={Intercontinental}
        title="Reference"
        text=""
      />

      <div className="reference-wrapper">
        <motion.div
          variants={cardAnimation}
          initial={false}
          animate="show"
          className="reference-card"
        >
          {ReferenceItems.map((item, index) => {
            return (
              <motion.div
                variants={cardX}
                className="r-card"
                key={index}
              >
                <div className="r-image">
                  <img loading="lazy" decoding="async" src={item.image} alt={item.title} />
                </div>
                <h5>Leto izgradnje: {item.besedilo}</h5>
                <h4>{item.title}</h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}

export default Reference;
