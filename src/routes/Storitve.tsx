import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Storitve_img } from "../images";
import { serviceContent } from "../components/Storitve/serviceContent";
import { Reveal } from "../components/Reveal/Reveal";
import "../components/Storitve/ServicePage.css";

export default function Storitve() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start", behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return (
    <div className="services-page">
      <header className="services-hero">
        <div className="services-hero__body">
          <nav className="services-breadcrumb" aria-label="Drobtinice"><Link to="/">Domov</Link><span aria-hidden="true">/</span><span aria-current="page">Storitve</span></nav>
          <p className="services-eyebrow">Gradnja in inženiring</p>
          <h1>Storitve za<br />vaš projekt.</h1>
          <p className="services-hero__intro">Posamezna dela ali celovita izvedba. Od načrtovanja do zadnjih podrobnosti.</p>
          <a className="services-hero__link" href="#podrocja">Raziščite področja dela <span aria-hidden="true">↓</span></a>
        </div>
        <img className="services-hero__image" src={Storitve_img} alt="Gradbena dela na objektu" fetchPriority="high" />
      </header>

      <nav id="podrocja" className="services-index" aria-label="Izberite področje dela">
        <div>{serviceContent.map((service, index) => <Link key={service.id} to={`#${service.id}`} onClick={() => document.getElementById(service.id)?.scrollIntoView({ block: "start" })} className={hash === `#${service.id}` ? "services-index__link services-index__link--active" : "services-index__link"} aria-current={hash === `#${service.id}` ? "location" : undefined}><span className="services-index__number">0{index + 1}</span><span>{service.title}</span><span className="services-index__arrow" aria-hidden="true">↓</span></Link>)}</div>
      </nav>

      <div className="services-details">
        {serviceContent.map((service, index) => (
          <Reveal as="section" id={service.id} key={service.id} className="service-detail" labelledBy={`${service.id}-title`}>
            <div className="service-detail__visual">
              <div className="service-detail__photo"><img {...service.image} sizes="(max-width: 800px) 100vw, 45vw" loading="lazy" decoding="async" alt={service.alt} /></div>
              <div className="service-detail__caption"><span>UMS / Področja dela</span><span>0{index + 1}</span></div>
            </div>
            <div className="service-detail__body">
              <p className="services-eyebrow">Področje 0{index + 1}</p>
              <h2 id={`${service.id}-title`}>{service.title}</h2>
              <p className="service-detail__lead">{service.lead}</p>
              <p className="service-detail__description">{service.description}</p>
              {service.groups.map(group => <div key={group.title} className="service-detail__group"><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}
              <Link className="service-detail__contact" to="/kontakt">Pogovorimo se o projektu <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal as="section" className="services-next" labelledBy="services-next-title">
        <div><p className="services-eyebrow">Od načrtov k izvedbi</p><h2 id="services-next-title">Kaj načrtujete vi?</h2><p>Povejte nam, kaj želite zgraditi ali prenoviti.<br />Skupaj opredelimo naslednje korake.</p></div>
        <div className="services-next__links"><Link to="/kontakt">Stopite v stik <span aria-hidden="true">↗</span></Link><Link to="/reference">Oglejte si naše reference <span aria-hidden="true">→</span></Link></div>
      </Reveal>
    </div>
  );
}
