import "../components/Reference/Reference.css";
import { ReferenceItems } from "../components/Reference/ReferenceItems";
import { Intercontinental } from "../images";

function Reference() {
  return (
    <div className="references-page">
      <header className="references-hero"><div><p className="references-eyebrow">UMS / Izbor projektov</p><h1>Reference</h1><p>Izbor projektov iz obstoječega portfelja.</p></div><img src={Intercontinental} alt="Hotel InterContinental" fetchPriority="high" /></header>
      <section className="reference-wrapper" aria-label="Reference UMS"><div className="reference-card">{ReferenceItems.map((item) => <article className="r-card" key={item.title}><div className="r-image"><img src={item.image} {...("responsive" in item && item.responsive ? { srcSet: item.responsive.srcSet, width: item.responsive.width, height: item.responsive.height } : {})} sizes="(max-width: 550px) 100vw, (max-width: 1000px) 50vw, 33vw" loading="lazy" decoding="async" alt={item.title} /></div><div className="r-card__caption"><h2>{item.title}</h2><p>Leto izgradnje: <strong>{item.besedilo}</strong></p></div></article>)}</div></section>
    </div>
  );
}

export default Reference;
