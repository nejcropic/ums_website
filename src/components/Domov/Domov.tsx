import { useClientReducedMotion } from "../../hooks/useClientReducedMotion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../images";
import BackgroundSlider from "../BackgroundSlider/BackgroundSlider";
import { services } from "./homeContent";
import { projects } from "../../projects/projects";
import { Reveal } from "../Reveal/Reveal";
import { AnimatePresence, motion } from "framer-motion";
import "./Domov.css";

const featuredProjects = projects.slice(0, 3);

export default function Domov() {
  const [selectedProjectId, setSelectedProjectId] = useState(featuredProjects[0]?.id ?? "");
  const project = featuredProjects.find((item) => item.id === selectedProjectId) ?? featuredProjects[0];
  const reducedMotion = useClientReducedMotion();

  return (
    <>
      <div className="home-page">
        <section className="home-hero" aria-label="UMS – gradnja in inženiring">
          <BackgroundSlider />
          <div className="home-hero__center">
            <h1 className="home-hero__logo">
              <span className="sr-only">UMS – gradnja in inženiring</span>
              <img src={Logo} width="440" height="234" alt="" />
            </h1>
            <nav className="home-hero__services" aria-label="Področja dela">
              {services.map((service) => (
                <Link key={service.id} to={`/storitve#${service.id}`}>
                  {service.heroTitle ?? service.title}
                </Link>
              ))}
            </nav>
          </div>
          <a className="home-hero__scroll" href="#o-nas">
            Spoznajte UMS <span aria-hidden="true">↓</span>
          </a>
        </section>

        <Reveal
          as="section"
          id="o-nas"
          className="home-intro"
          labelledBy="intro-title"
        >
          <div>
            <p className="home-eyebrow">UMS STORITVE d.o.o.</p>
            <h2 id="intro-title">
              Gradnja. Prenova.
              <br />
              <span>Celovita izvedba.</span>
            </h2>
          </div>
          <div className="home-intro__copy">
            <p>
              Od suhomontažnih sistemov do izvedbe stanovanjskih in poslovnih
              objektov.
            </p>
            <p>
              Od leta 2013 razvijamo znanje in izkušnje, s katerimi naročnikom
              pomagamo pri vseh fazah gradnje.
            </p>
            <Link to="/o_podjetju" className="home-button">
              Spoznajte UMS <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>

        <section className="home-services" aria-labelledby="services-title">
          <div className="home-section-heading">
            <div>
              <p className="home-eyebrow">Kaj delamo</p>
              <h2 id="services-title">Naša področja dela</h2>
            </div>
            <p>
              Posamezna dela ali organizacija celotne izvedbe. Glede na potrebe
              vašega projekta.
            </p>
          </div>
          <Reveal className="home-services__grid">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={`/storitve#${service.id}`}
                className={`home-service${service.image ? " home-service--photo" : ""}`}
              >
                {service.image && (
                  <img
                    className="home-service__image"
                    {...service.image}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                )}
                <span className="home-service__number">0{index + 1} /</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="home-service__arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </Reveal>
        </section>

        <Reveal as="section" className="home-projects" labelledBy="projects-title">
          <div className="home-section-heading">
            <div>
              <p className="home-eyebrow">Naše reference</p>
              <h2 id="projects-title">Projekti, pri katerih sodelujemo.</h2>
            </div>
            <Link className="home-text-link" to="/reference">
              Vse reference <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div
            className="home-project"
            id="featured-project"
            role="region"
            aria-label="Izbrana referenca"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                className="home-project__content"
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reducedMotion === false ? 0.22 : 0, ease: "easeOut" }}
              >
                <div className="home-project__visual">
                  <img
                    className="home-project__image"
                    src={project.photo}
                    srcSet={project.srcSet}
                    sizes="(max-width: 700px) 100vw, 60vw"
                    loading="lazy"
                    decoding="async"
                    alt={project.title}
                  />
                </div>
                <div className="home-project__body">
                  <p className="home-eyebrow">Naša referenca</p>
                  <h3>{project.title}</h3>
                  {project.description && <p>{project.description}</p>}
                  <dl>
                    {project.location && <div>
                      <dt>Lokacija</dt>
                      <dd>{project.location}</dd>
                    </div>}
                    <div>
                      <dt>Leto projekta</dt>
                      <dd>{project.year}</dd>
                    </div>
                  </dl>
                  <Link className="home-text-link" to="/reference">
                    Oglejte si reference <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            className="home-project-picker"
            role="group"
            aria-label="Izberite referenčni projekt"
          >
            {featuredProjects.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={selectedProjectId === item.id}
                aria-controls="featured-project"
                onClick={() => setSelectedProjectId(item.id)}
              >
                {item.title}
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            Izbrana referenca: {project.title}{project.location ? `, ${project.location}` : ""}, {project.year}.
          </p>
        </Reveal>

        <Reveal as="section" className="home-contact" labelledBy="contact-title">
          <div>
            <p className="home-eyebrow">Stopimo v stik</p>
            <h2 id="contact-title">
              Načrtujete gradnjo
              <br />
              ali prenovo?
            </h2>
          </div>
          <div className="home-contact__details">
            <a className="home-contact__email" href="mailto:info@ums.si">
              info@ums.si <span aria-hidden="true">↗</span>
            </a>
            <p>
              Sašo Ropič · <a href="tel:+38640619246">040 619 246</a>
            </p>
            <Link to="/kontakt" className="home-text-link">
              Vsi kontakti <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  );
}
