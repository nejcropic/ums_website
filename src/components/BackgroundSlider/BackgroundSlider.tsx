import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { sliderData } from "./BackgroundSliderData";
import "./BackgroundSlider.css";

export default function BackgroundSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  useEffect(() => {
    if (paused || engaged || reducedMotion || !visible) return;
    const timer = window.setInterval(
      () => setCurrent((index) => (index + 1) % sliderData.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [paused, engaged, reducedMotion, visible]);

  const slide = sliderData[current];
  const changeSlide = (direction: number) => {
    setPaused(true);
    setCurrent(
      (index) => (index + direction + sliderData.length) % sliderData.length,
    );
  };
  return (
    <div
      className="home-slider"
      role="region"
      aria-roledescription="karusel"
      aria-label="Izbor projektov UMS"
    >
      <img
        className="home-slider__image"
        {...slide.image}
        sizes="100vw"
        alt=""
        fetchPriority="high"
      />
      <div className="home-slider__shade" />
      <div
        className="home-slider__caption"
        aria-live={paused || reducedMotion ? "polite" : "off"}
        aria-atomic="true"
      >
        <p>{slide.title}</p>
        <span>{slide.body}</span>
      </div>
      <div
        className="home-slider__controls"
        onMouseEnter={() => setEngaged(true)}
        onMouseLeave={() => setEngaged(false)}
        onFocus={() => setEngaged(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setEngaged(false);
        }}
      >
        <span className="home-slider__count" aria-hidden="true">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(sliderData.length).padStart(2, "0")}
        </span>
        {!reducedMotion && (
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused ? "Predvajaj fotografije" : "Ustavi menjavanje fotografij"
            }
          >
            <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
          </button>
        )}
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Prejšnja fotografija"
        >
          <span aria-hidden="true">←</span>
        </button>
        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Naslednja fotografija"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
