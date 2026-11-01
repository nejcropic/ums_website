import { Link } from "react-router-dom";
import { Logo } from "../../images";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <Link to="/" className="site-footer__brand" aria-label="UMS — domov"><img src={Logo} alt="UMS inženiring" width="124" height="66" /></Link>
        <div><p className="site-footer__heading">UMS STORITVE d.o.o.</p><p>Brodarjev trg 14<br />1000 Ljubljana</p><a href="mailto:info@ums.si">info@ums.si</a></div>
        <nav aria-label="Povezave v nogi"><p className="site-footer__heading">Raziščite</p><Link to="/storitve">Storitve</Link><Link to="/akt_projekti">Aktualni projekti</Link><Link to="/reference">Reference</Link><Link to="/o_podjetju">O podjetju</Link><Link to="/kontakt">Kontakt</Link></nav>
        <div><p className="site-footer__heading">Stopimo v stik</p><a href="tel:+38640619246">Sašo: 040 619 246</a><a href="tel:+38651228443">Milan: 051 228 443</a><a href="tel:+38670894959">Uroš: 070 894 959</a></div>
      </div>
      <div className="site-footer__bottom"><span>© {new Date().getFullYear()} UMS STORITVE d.o.o.</span><a href="#main-content">Nazaj na vsebino ↑</a></div>
    </footer>
  );
}
