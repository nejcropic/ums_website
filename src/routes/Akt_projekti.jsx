import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import { cardAnimation } from "../components/Animations";

import NavBar from "../components/NavBar/NavBar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AktualniProjektiItems from "../components/AktualniProjekti/AktualniProjektiItems.jsx";
import { Devana2, Dvojcek, Kvartet_siska, Naslovna, Tem_catez } from "../index";

function Akt_projekti() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={Naslovna}
        title="Aktualni projekti"
        text=""
        btnClass="hide"
      />

      <motion.div
        variants={cardAnimation}
        initial="hidden"
        animate="show"
        className="group-wrapper"
      >
        <AktualniProjektiItems
          className="first-storitev"
          heading="Dvojček"
          textLokacija="Ihan pri Domžalah"
          textOpis="Enotna hiša dvojček."
          textLeto="2023"
          img={Dvojcek}
        />
        <AktualniProjektiItems
          className="first-storitev-reverse"
          heading="Devana park 2"
          textLokacija="Ljubljana"
          textOpis="Stanovanjski bloki DEVANA PARK II - Ljubljana. Izvedba 5 blokov v katerih je 94 stanovanjskih enot v 4 etažah"
          textLeto="V izvajanju. Predviden zaključek - maj 2024"
          img={Devana2}
        />
        <AktualniProjektiItems
          className="first-storitev-reverse"
          heading="Kvartet"
          textLokacija="Ljubljana - Šiška"
          textOpis="Stanovanjski bloki KVARTET Šiška - Ljubljana. Izvedba 2 stolpnic v katerih je 120 stanovanjskih enot v 15 etažah."
          textLeto="2023"
          img={Kvartet_siska}
        />
        <AktualniProjektiItems
          className="first-storitev-reverse"
          heading="TEM Čatež"
          textLokacija="Čatež"
          textOpis="Poslovni objekt TEM Čatež"
          textLeto="2023"
          img={Tem_catez}
        />
      </motion.div>

      <Footer />
    </>
  );
}

export default Akt_projekti;
