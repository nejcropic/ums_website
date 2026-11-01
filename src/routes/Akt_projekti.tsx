import { Link } from "react-router-dom";
import { currentProjects } from "../projects/projects";
import { Reveal, RevealItem } from "../components/Reveal/Reveal";
import "../components/AktualniProjekti/AktualniProjekti.css";

function Akt_projekti() {
  const featured = currentProjects[currentProjects.length - 1];
  return (
    <div className="projects-page">
      <header className="projects-hero">
        <div className="projects-hero__copy">
          <p className="projects-eyebrow">UMS / Gradnja in inženiring</p>
          <h1>
            Aktualni
            <br />
            <span>projekti</span>
          </h1>
          <p>Izbor projektov iz obstoječega pregleda UMS.</p>
        </div>
        {featured && (
          <img
            src={featured.photo}
            srcSet={featured.srcSet}
            sizes="(max-width: 760px) 100vw, 58vw"
            fetchPriority="high"
            alt={featured.title}
          />
        )}
      </header>
      <Reveal as="section" className="projects-list" label="Pregled projektov">
        {currentProjects.map((project, index) => (
          <RevealItem
            order={index}
            className={`project-entry${index === 0 ? " project-entry--featured" : ""}`}
            key={project.id}
          >
            <div className="project-entry__image">
              <img
                src={project.photo}
                srcSet={project.srcSet}
                sizes="(max-width: 760px) 100vw, 50vw"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                alt={project.title}
              />
            </div>
            <div className="project-entry__body">
              <p className="projects-eyebrow">Projekt / {project.year}</p>
              <h2>{project.title}</h2>
              <dl>
                {project.location && (
                  <div>
                    <dt>Lokacija</dt>
                    <dd>{project.location}</dd>
                  </div>
                )}
                {project.description && (
                  <div>
                    <dt>Opis</dt>
                    <dd>{project.description}</dd>
                  </div>
                )}
                <div>
                  <dt>Leto projekta</dt>
                  <dd>{project.year}</dd>
                </div>
              </dl>
            </div>
          </RevealItem>
        ))}
      </Reveal>
      <Reveal as="section" className="projects-next">
        <div>
          <p className="projects-eyebrow">Nadaljujte</p>
          <h2>Več o projektih UMS</h2>
        </div>
        <div>
          <Link to="/reference">
            Oglejte si reference <span aria-hidden="true">→</span>
          </Link>
          <Link to="/kontakt">
            Pogovorimo se o vašem projektu <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

export default Akt_projekti;
