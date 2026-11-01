import "../components/O_podjetju/O-podjetju.css";
import { motion } from "framer-motion";
import { textAnimation } from "../components/Animations";

import Hero from "../components/Hero/Hero";
import { Mansarda } from "../images";

function O_podjetju() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={Mansarda}
        title="O podjetju"
        text=""
      />
      <motion.div
        variants={textAnimation}
        initial={false}
        animate="show"
        className="about-container"
      >
        <div className="about-subcontainer">
          <h2>O NAS</h2>
          <p>
            Podjetje ustanovljeno v letu 2013 z glavno dejavnostjo vgradnja
            suhomontažnih sistemov. V letu 2019 smo začeli širiti storitve v
            smeri izvedbe nepremičninskih objektov. V tem času smo si nabrali
            slabe in dobre izkušnje pri gradnji. Vsi izvedeni projekti so
            izvedeni v časovnih in finančnih okvirjih zastavljeni pred pričetkom
            izvedbe.
          </p>

          <h2>VIZIJA</h2>
          <p>Povečanje izgradnje novih nepremičninskih projektov. </p>

          <h2>CILJI</h2>
          <p>
            S prilagodljivostjo storitve in cene omogočiti naročnikom lažjo in
            hitrejšo odločitev pri izbiri storitve.
          </p>

          <h2>PODATKI O PODJETJU</h2>
          <div className="podatki-container">
            <div className="podatki-wrapper">
              <h3>Ime podjetja</h3>
              <p>UMS STORITVE d.o.o.</p>
            </div>

            <div className="podatki-wrapper">
              <h3>Sedež podjetja</h3>
              <p>Brodarjev trg 14, 1000 Ljubljana</p>
            </div>

            <div className="podatki-wrapper">
              <h3>Telefon</h3>
              <p>
                Sašo Ropič, direktor 040 619 246
                <br />
                Milan Milovič, vodja projektov 051 228 443
                <br />
                Uroš Rutnik, vodja projektov 070 894 959
              </p>
            </div>

            <div className="podatki-wrapper">
              <h3>Email</h3>
              <a href="mailto:info@ums.si">info@ums.si</a>
            </div>

            <div className="podatki-wrapper">
              <h3>Matična številka</h3>
              <p>6409377000</p>
            </div>

            <div className="podatki-wrapper">
              <h3>Identifikacijska št. za DDV:</h3>
              <p>SI20019238</p>
            </div>

            <div className="podatki-wrapper">
              <h3>Številka računa in banka</h3>
              <p>
                NKBM d.d. - S156 0430 2000 3471905
                <br />
                NLB d.d. - S156 0292 4026 5217 491
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default O_podjetju;
