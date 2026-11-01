import "../components/Reference/Reference.css";
import { projects } from "../projects/projects";

function Reference() {
  const featured = projects[Math.floor(projects.length / 2)];
  return (
    <div className="references-page">
      <header className="references-hero">
        <div>
          <p className="references-eyebrow">UMS / Izbor projektov</p>
          <h1>Reference</h1>
          <p>Izbor projektov iz obstoječega portfelja.</p>
        </div>
        {featured && (
          <img
            src={featured.photo}
            srcSet={featured.srcSet}
            sizes="(max-width: 760px) 100vw, 50vw"
            alt={featured.title}
            fetchPriority="high"
          />
        )}
      </header>
      <section className="reference-wrapper" aria-label="Reference UMS">
        <div className="reference-card">
          {projects.map((project) => (
            <article className="r-card" key={project.id}>
              <div className="r-image">
                <img
                  src={project.photo}
                  srcSet={project.srcSet}
                  sizes="(max-width: 550px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  loading="lazy"
                  decoding="async"
                  alt={project.title}
                />
              </div>
              <div className="r-card__caption">
                <h2>{project.title}</h2>
                <p>
                  Leto projekta: <strong>{project.year}</strong>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Reference;
