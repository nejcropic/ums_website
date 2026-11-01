import { Link } from "react-router-dom";
import { Devana2, Dvojcek, Kvartet_siska, Tem_catez } from "../images";
import { responsiveImages } from "../responsiveImages";
import "../components/AktualniProjekti/AktualniProjekti.css";

const projects = [
  { name: "Dvojček", location: "Ihan pri Domžalah", description: "Enotna hiša dvojček.", time: "2023", image: Dvojcek, responsive: responsiveImages.dvojcek },
  { name: "Devana park 2", location: "Ljubljana", description: "Stanovanjski bloki DEVANA PARK II – Ljubljana. Izvedba 5 blokov s 94 stanovanjskimi enotami v 4 etažah.", time: "V izvajanju. Predviden zaključek – maj 2024", image: Devana2 },
  { name: "Kvartet", location: "Ljubljana – Šiška", description: "Stanovanjski bloki KVARTET Šiška – Ljubljana. Izvedba 2 stolpnic s 120 stanovanjskimi enotami v 15 etažah.", time: "2023", image: Kvartet_siska, responsive: responsiveImages.kvartet_siska },
  { name: "TEM Čatež", location: "Čatež", description: "Poslovni objekt TEM Čatež.", time: "2023", image: Tem_catez },
];

function Akt_projekti() {
  const featured = projects[0];
  return <div className="projects-page">
    <header className="projects-hero">
      <div className="projects-hero__copy"><p className="projects-eyebrow">UMS / Gradnja in inženiring</p><h1>Aktualni<br /><span>projekti</span></h1><p>Izbor projektov iz obstoječega pregleda UMS.</p></div>
      <img src={featured.image} {...(featured.responsive ? { srcSet: featured.responsive.srcSet, width: featured.responsive.width, height: featured.responsive.height } : {})} sizes="(max-width: 760px) 100vw, 58vw" fetchPriority="high" alt="Hiša dvojček" />
    </header>
    <section className="projects-list" aria-label="Pregled projektov">
      {projects.map((project, index) => <article className={`project-entry${index === 0 ? " project-entry--featured" : ""}`} key={project.name}>
        <div className="project-entry__image"><img src={project.image} {...(project.responsive ? { srcSet: project.responsive.srcSet, width: project.responsive.width, height: project.responsive.height } : {})} sizes="(max-width: 760px) 100vw, 50vw" loading={index === 0 ? "eager" : "lazy"} decoding="async" alt={project.name} /></div>
        <div className="project-entry__body"><p className="projects-eyebrow">Projekt / 0{index + 1}</p><h2>{project.name}</h2><dl><div><dt>Lokacija</dt><dd>{project.location}</dd></div><div><dt>Opis</dt><dd>{project.description}</dd></div><div><dt>Časovni podatek iz obstoječe vsebine</dt><dd>{project.time}</dd></div></dl></div>
      </article>)}
    </section>
    <section className="projects-next"><div><p className="projects-eyebrow">Nadaljujte</p><h2>Več o projektih UMS</h2></div><div><Link to="/reference">Oglejte si reference <span aria-hidden="true">→</span></Link><Link to="/kontakt">Pogovorimo se o vašem projektu <span aria-hidden="true">↗</span></Link></div></section>
  </div>;
}

export default Akt_projekti;
