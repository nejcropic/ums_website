import "../components/Kontakt/Kontakt.css";
import { motion } from "framer-motion";
import { textAnimation } from "../components/Animations";

import Hero from "../components/Hero/Hero";
import { Mansarda } from "../images";

function Kontakt() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={Mansarda}
        title="Kontakt"
        text=""
      />
      <motion.div
        variants={textAnimation}
        initial={false}
        animate="show"
        className="kontakt-container"
      >
        <div className="kontakt-subcontainer">
          <div className="kontakt-wrapper">
            <h2>Sašo Ropič</h2>
            <h4>uni.dipl.ing.str.</h4>
            <p>Direktor</p>
            <div className="line"></div>
            <ul>
              <li>
                <a href="tel:+38640619246">040 619 246</a>
              </li>
              <br />
              <li>
                <a href="mailto:saso.ropic@ums.si">saso.ropic@ums.si</a>
              </li>
            </ul>
          </div>

          <div className="kontakt-wrapper">
            <h2>Milan Milovič</h2>
            <br />
            <p>Vodja projektov</p>
            <div className="line"></div>
            <ul>
              <li>
                <a href="tel:+38651228443">051 228 443</a>
              </li>
              <br />
              <li>
                <a href="mailto:info@ums.si">info@ums.si</a>
              </li>
            </ul>
          </div>
          <div className="kontakt-wrapper">
            <h2>Uroš Rutnik</h2>
            <br />
            <p>Vodja projektov</p>
            <div className="line"></div>
            <ul>
              <li>
                <a href="tel:+38670894959">070 894 959</a>
              </li>
              <br />
              <li>
                <a href="mailto:info@ums.si">info@ums.si</a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Kontakt;
