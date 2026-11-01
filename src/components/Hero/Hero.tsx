import "./Hero.css";

interface HeroProps { cName: string; heroImg: string; title: string; text: string; }

export default function Hero({ cName, heroImg, title, text }: HeroProps) {
  return (
    <section className={`page-hero ${cName}`} aria-label={title}>
      <img className="page-hero__image" src={heroImg} alt="" fetchPriority="high" />
      <div className="hero-text"><h1>{title}</h1>{text && <p>{text}</p>}</div>
    </section>
  );
}
