import "../components/O_podjetju/O-podjetju.css";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion";
import { textAnimation } from "../components/Animations";

import NavBar from "../components/NavBar/NavBar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Mansarda } from "../index";

function O_podjetju() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={Mansarda}
        title="O podjetju"
        text=""
        url="/o_podjetju"
        btnClass="hide"
      />
      <motion.div
        variants={textAnimation}
        initial="hidden"
        animate="show"
        className="about-container"
      >
        <div className="about-subcontainer">
          <h1>O NAS</h1>
          <p>
            Podjetje ustanovljeno v letu 2013 z glavno dejavnostjo vgradnja
            suhomontažnih sistemov. V letu 2019 smo začeli širiti storitve v
            smeri izvedbe nepremičninskih objektov. V tem času smo si nabrali
            slabe in dobre izkušnje pri gradnji. Vsi izvedeni projekti so
            izvedeni v časovnih in finančnih okvirjih zastavljeni pred pričetkom
            izvedbe.
          </p>

          <h1>VIZIJA</h1>
          <p>Povečanje izgradnje novih nepremičninskih projektov. </p>

          <h1>CILJI</h1>
          <p>
            S prilagodljivostjo storitve in cene omogočiti naročnikom lažjo in
            hitrejšo odločitev pri izbiri storitve.
          </p>

          <h1>PODATKI O PODJETJU</h1>
          <div className="podatki-container">
            <div className="podatki-wrapper">
              <h2>Ime podjetja</h2>
              <p>UMS STORITVE d.o.o.</p>
            </div>

            <div className="podatki-wrapper">
              <h2>Sedež podjetja</h2>
              <p>Brodarjev trg 14, 1000 Ljubljana</p>
            </div>

            <div className="podatki-wrapper">
              <h2>Telefon</h2>
              <p>
                Sašo Ropič, direktor 040 619 246
                <br />
                Milan Milovič, vodja projektov 051 228 443
                <br />
                Uroš Rutnik, vodja projektov 070 894 959
              </p>
            </div>

            <div className="podatki-wrapper">
              <h2>Email</h2>
              <a href="mailto:info@ums.si">info@ums.si</a>
            </div>

            <div className="podatki-wrapper">
              <h2>Matična številka</h2>
              <p>6409377000</p>
            </div>

            <div className="podatki-wrapper">
              <h2>Identifikacijska št. za DDV:</h2>
              <p>SI20019238</p>
            </div>

            <div className="podatki-wrapper">
              <h2>Številka računa in banka</h2>
              <p>
                NKBM d.d. - S156 0430 2000 3471905
                <br />
                NLB d.d. - S156 0292 4026 5217 491
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default O_podjetju;
