import { Link } from "react-router-dom";
import { Storitve_img } from "../images";
import { Reveal, RevealItem } from "../components/Reveal/Reveal";
import "../components/Kontakt/Kontakt.css";

const contacts = [
  { name: "Sašo Ropič", title: "Direktor", qualification: "uni.dipl.ing.str.", phone: "040 619 246", phoneHref: "+38640619246", email: "saso.ropic@ums.si" },
  { name: "Milan Milović", title: "Vodja projektov", phone: "051 228 443", phoneHref: "+38651228443", email: "info@ums.si" },
  { name: "Uroš Rutnik", title: "Vodja projektov", phone: "070 894 959", phoneHref: "+38670894959", email: "info@ums.si" },
];

export default function Kontakt() {
  return <div className="contact-page">
    <header className="contact-hero"><div className="contact-hero__copy"><p className="contact-eyebrow">UMS STORITVE d.o.o.</p><h1>Stopimo<br /><span>v stik.</span></h1><p>Za pogovor o gradnji, prenovi ali naših storitvah.</p><a className="contact-hero__email" href="mailto:info@ums.si">info@ums.si <span aria-hidden="true">↗</span></a></div><img src={Storitve_img} alt="Gradbena dela na objektu" fetchPriority="high" /></header>
    <Reveal as="section" className="contact-people" label="Kontaktne osebe">{contacts.map((contact, index) => <RevealItem className="contact-person" key={contact.name} order={index}><p className="contact-eyebrow">{contact.title}</p><h2>{contact.name}</h2>{contact.qualification && <p className="contact-person__qualification">{contact.qualification}</p>}<div className="contact-person__links"><a href={`tel:${contact.phoneHref}`}><span>Telefon</span><strong>{contact.phone}</strong></a><a href={`mailto:${contact.email}`}><span>E-pošta</span><strong>{contact.email}</strong></a></div></RevealItem>)}</Reveal>
    <Reveal as="section" className="contact-address"><div><p className="contact-eyebrow">Sedež podjetja</p><h2>UMS STORITVE d.o.o.</h2></div><address>Brodarjev trg 14<br />1000 Ljubljana</address><Link to="/o_podjetju">Več o podjetju <span aria-hidden="true">→</span></Link></Reveal>
  </div>;
}
