import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "../../images";
import { NavMenuItems } from "./NavMenuItems";
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const menuId = useId();
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    };
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);
  return (
    <>
      <a className="skip-link" href="#main-content">Preskoči na vsebino</a>
      <header ref={header} className={`site-header${scrolled || location.pathname !== "/" || open ? " site-header--solid" : ""}`}>
        <div className="site-header__inner">
          <Link className="site-header__brand" to="/" aria-label="UMS — domov" onClick={closeMenu}>
            <img src={Logo} width="112" height="60" alt="UMS inženiring" />
          </Link>
          <button ref={toggle} type="button" className="site-header__toggle" aria-expanded={open} aria-controls={menuId} onClick={() => setOpen(!open)}>
            <span>{open ? "Zapri" : "Meni"}</span><span className={`menu-symbol${open ? " menu-symbol--open" : ""}`} aria-hidden="true"><span /><span /></span>
          </button>
          <nav id={menuId} className={`site-nav${open ? " site-nav--open" : ""}`} aria-label="Glavna navigacija" onBlur={(event) => {
            if (event.relatedTarget instanceof Node && !header.current?.contains(event.relatedTarget)) closeMenu();
          }}>
            {NavMenuItems.map(item => (
              <NavLink key={item.url} to={item.url} end={item.url === "/"} className={({ isActive }) => `site-nav__link${isActive ? " site-nav__link--active" : ""}${item.url === "/kontakt" ? " site-nav__link--contact" : ""}`} onClick={closeMenu}>
                {item.title}{item.url === "/kontakt" && <span aria-hidden="true">↗</span>}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
