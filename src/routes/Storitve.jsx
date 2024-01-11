import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import "../components/Storitve/Storitve.css";
import { mainAnimation, cardAnimation } from "../components/Animations";

import NavBar from "../components/NavBar/NavBar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";
import StoritveItems from "../components/Storitve/StoritveItems";

import {
  Storitve_img,
  Gradbeni_projekti,
  Adaptacije,
  En_sanacije,
  Suhomontažna_dela,
  Okolica,
} from "../index";

const Storitve = () => {
  const location = useLocation();

  useEffect(() => {
    const elementId = location.hash.substring(1); // Remove the leading '#' from the URL hash
    scrollToElement(elementId, true);
  }, [location]);

  const scrollToElement = (elementId, flag) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (flag) {
        element.scrollIntoView({ block: "end" });
      } else {
        element.scrollIntoView({ block: "center" });
      }
    }
  };

  return (
    <>
      <NavBar />
      <Hero cName="hero-mid" heroImg={Storitve_img} title="Storitve" text="" />
      <motion.div
        variants={mainAnimation}
        initial="hidden"
        animate="show"
        className="buttons-container"
      >
        <nav>
          <ul>
            <li>
              <button onClick={() => scrollToElement("gr_projekti", false)}>
                Gradbeni projekti
              </button>
            </li>
            <li>
              <button onClick={() => scrollToElement("adaptacije", false)}>
                Adaptacije
              </button>
            </li>
            <li>
              <button onClick={() => scrollToElement("suhomontaza", false)}>
                Suhomontažna dela
              </button>
            </li>
            <li>
              <button onClick={() => scrollToElement("zun_ureditev", false)}>
                Zunanja ureditev
              </button>
            </li>
          </ul>
        </nav>
      </motion.div>
      <motion.div
        variants={cardAnimation}
        initial="hidden"
        animate="show"
        className="group-wrapper"
      >
        <StoritveItems
          className="first-storitev"
          id="gr_projekti"
          heading="Gradbeni projekti"
          text={`Izvedba projektov od ideje do strehe. Visoke gradnje, ki jih izvajamo:
          \n - stanovanjski objekti (hiša, večstanovanjske stavbe),
          \n - skladišča in industrijski objekti,
          \n - dostali objekti na željo naročnika. 
          \n\nPri projektu sodelujemo v vseh fazah izvedbe:
          \n - priprava ocene stroškov investicije,
          \n - priprava in prodobitev projektih dokumentov(soglasja, gradbena in uporabna dovoljenja),
          \n - organizacijo vseh izvedbenih aktivnosti,
          \n - finančna kontrola projekta,
          \n - tehnični nadzor izvedbe v skladu z Zakonom o graditvi objektov,
          \n - ureditev primopredajnih zapisnikov z izvajalci in investitorjem.`}
          img={Gradbeni_projekti}
        />
        <StoritveItems
          className="first-storitev-reverse"
          id="adaptacije"
          heading="Adaptacije"
          text={`Vsak si želi urediti prostor po svojem navdihu in željah. Da vas razbremenimo, vam ponujamo storitve od načrtovanja idejne zasnove pa do končne izvedbo.
            \n - pripravo idejne zasnove in načrtovanja vključno s 3D predstavo,
            \n - izvedbo demontaže nepotrebnega stavbnega pohištva in ostalih konstrukcijskih elementov,
            \n - izvedbo vseh storitev (gradbena in obrtniška dela),
            \n - izvedbo strokovnega nadzora izvedbe del,
            \n - priprava in ureditev vseh potrebne tehnične in primopredajne dokumentacije.
            `}
          img={Adaptacije}
        />
        <StoritveItems
          className="first-storitev"
          id="suhomontaza"
          heading="Suhomontažna dela"
          text={`Vsak si želi urediti prostor po svojem navdihu in željah. Da vas razbremenimo, vam ponujamo storitve od načrtovanja idejne zasnove pa do končne izvedbo.           
            Pri adaptaciji sodelujemo v fazah:
            \n - pripravo idejne zasnove in načrtovanja vključno s 3D predstavo,
            \n - izvedbo demontaže nepotrebnega stavbnega pohištva in ostalih konstrukcijskih elementov,
            \n - izvedbo vseh storitev (gradbena in obrtniška dela),
            \n - izvedbo strokovnega nadzora izvedbe del,
            \n - priprava in ureditev vseh potrebne tehnične in primopredajne dokumentacije.
            `}
          img={Suhomontažna_dela}
        />
        <StoritveItems
          className="first-storitev"
          id="zun_ureditev"
          heading="Zunanja ureditev"
          text={`Okolica je prvi stik z objektom. Primerno oblikovno in funkcionalno dvorišče hiše ali poslovne stavbe pripomore do končnega izgleda celotnega objekta. 
            Pri zunanji ureditvi izvedemo storitve:
            \n - načrtovanja okolice,
            \n - izkopi,
            \n - razpeljava meteornih in fekalnih cevi,
            \n - tlakovanje(asfalt, tlakovci),
            \n - ureditev zemlje in travne ruše.
            `}
          img={Okolica}
        />
      </motion.div>
      <Footer />
    </>
  );
};

export default Storitve;
