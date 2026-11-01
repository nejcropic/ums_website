import { useClientReducedMotion } from "../../hooks/useClientReducedMotion";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { sliderData } from "./BackgroundSliderData";
import "./BackgroundSlider.css";

export default function BackgroundSlider() {
  const [current, setCurrent] = useState(0);
  const [incoming, setIncoming] = useState<number | null>(null);
  const [incomingLoaded, setIncomingLoaded] = useState(false);
  const incomingRef = useRef<{ index: number; requestId: number } | null>(null);
  const requestSequence = useRef(0);
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const reducedMotion = useClientReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onVisibility = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);
  useEffect(() => {
    if (paused || engaged || reducedMotion !== false || !visible) return;
    const timer = window.setInterval(() => {
      const baseIndex = incomingRef.current?.index ?? current;
      const index = (baseIndex + 1) % sliderData.length;
      requestSequence.current += 1;
      incomingRef.current = { index, requestId: requestSequence.current };
      setIncoming(index);
      setIncomingLoaded(false);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [paused, engaged, reducedMotion, visible, current]);

  useEffect(() => {
    if (incoming === null || !incomingLoaded) return;
    const requestId = incomingRef.current?.requestId;
    const timer = window.setTimeout(() => {
      if (incomingRef.current?.requestId !== requestId) return;
      setCurrent(incoming);
      incomingRef.current = null;
      setIncoming(null);
      setIncomingLoaded(false);
    }, reducedMotion === false ? 500 : 0);
    return () => window.clearTimeout(timer);
  }, [incoming, incomingLoaded, reducedMotion]);

  const slide = sliderData[current];
  const incomingRequestId =
    incoming !== null && incomingRef.current?.index === incoming
      ? incomingRef.current.requestId
      : null;
  const requestSlide = (index: number) => {
    if (reducedMotion !== false) {
      setCurrent(index);
      incomingRef.current = null;
      setIncoming(null);
      setIncomingLoaded(false);
      return;
    }
    requestSequence.current += 1;
    incomingRef.current = { index, requestId: requestSequence.current };
    setIncoming(index);
    setIncomingLoaded(false);
  };
  const changeSlide = (direction: number) => {
    setPaused(true);
    const baseIndex = incomingRef.current?.index ?? current;
    requestSlide((baseIndex + direction + sliderData.length) % sliderData.length);
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
      {incoming !== null && (
        <motion.img
          key={sliderData[incoming].image.src}
          className="home-slider__image home-slider__image--incoming"
          {...sliderData[incoming].image}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          onLoad={(event) => {
            const requestId = incomingRequestId;
            void event.currentTarget
              .decode()
              .catch(() => undefined)
              .then(() => {
                if (incomingRef.current?.requestId === requestId) setIncomingLoaded(true);
              });
          }}
          onError={() => {
            if (incomingRef.current?.requestId === incomingRequestId) {
              incomingRef.current = null;
              setIncoming(null);
              setIncomingLoaded(false);
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: incomingLoaded ? 1 : 0 }}
          transition={{ duration: reducedMotion === false ? 0.48 : 0, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
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
        {reducedMotion === false && (
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
