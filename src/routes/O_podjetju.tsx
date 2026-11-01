import { Link } from "react-router-dom";
import { responsiveImages } from "../responsiveImages";
import "../components/O_podjetju/O-podjetju.css";

const companyDetails = [
  { title: "Ime podjetja", content: "UMS STORITVE d.o.o." },
  { title: "Sedež podjetja", content: "Brodarjev trg 14, 1000 Ljubljana" },
  { title: "Telefon", content: <><a href="tel:+38640619246">Sašo Ropič, direktor · 040 619 246</a><a href="tel:+38651228443">Milan Milović, vodja projektov · 051 228 443</a><a href="tel:+38670894959">Uroš Rutnik, vodja projektov · 070 894 959</a></> },
  { title: "E-pošta", content: <a href="mailto:info@ums.si">info@ums.si</a> },
  { title: "Matična številka", content: "6409377000" },
  { title: "Identifikacijska št. za DDV", content: "SI20019238" },
  { title: "Številka računa in banka", content: <>NKBM d.d. – S156 0430 2000 3471905<br />NLB d.d. – S156 0292 4026 5217 491</> },
];

export default function O_podjetju() {
  return <div className="about-page">
    <header className="about-hero"><div className="about-hero__copy"><p className="about-eyebrow">UMS STORITVE d.o.o.</p><h1>O<br /><span>podjetju</span></h1><p>Znanje in izkušnje na področju gradnje, prenove in suhomontažnih sistemov.</p></div><img {...responsiveImages.mansarda} sizes="(max-width: 760px) 100vw, 58vw" fetchPriority="high" alt="Urejena mansarda po prenovi" /></header>
    <section className="about-story" aria-labelledby="about-story-title"><div><p className="about-eyebrow">Naša pot</p><h2 id="about-story-title">Od suhomontažnih sistemov do izvedbe objektov.</h2></div><div className="about-story__copy"><p>Podjetje je bilo ustanovljeno leta 2013 z glavno dejavnostjo vgradnje suhomontažnih sistemov. Leta 2019 smo začeli širiti storitve v smeri izvedbe nepremičninskih objektov.</p><p>V tem času smo pridobili izkušnje pri gradnji. Obstoječa predstavitev podjetja navaja, da so bili izvedeni projekti zaključeni v časovnih in finančnih okvirih, zastavljenih pred začetkom izvedbe.</p></div></section>
    <section className="about-direction" aria-label="Vizija in cilji"><article><p className="about-eyebrow">Vizija</p><h2>Razvijati področje izvedbe novih nepremičninskih projektov.</h2><p>Usmeritev podjetja je povečanje izgradnje novih nepremičninskih projektov.</p></article><article><p className="about-eyebrow">Cilj</p><h2>Olajšati izbiro storitve.</h2><p>S prilagodljivostjo storitve in cene naročnikom omogočiti lažjo in hitrejšo odločitev pri izbiri storitve.</p></article></section>
    <section className="about-details" aria-labelledby="company-details-title"><div className="about-details__heading"><p className="about-eyebrow">Uradni podatki</p><h2 id="company-details-title">Podatki o podjetju</h2></div><dl>{companyDetails.map(item => <div key={item.title}><dt>{item.title}</dt><dd>{item.content}</dd></div>)}</dl></section>
    <section className="about-next"><div><p className="about-eyebrow">Spoznajmo vaš projekt</p><h2>Stopimo v stik.</h2></div><div><Link to="/kontakt">Kontaktni podatki <span aria-hidden="true">→</span></Link><Link to="/reference">Oglejte si reference <span aria-hidden="true">↗</span></Link></div></section>
  </div>;
}
