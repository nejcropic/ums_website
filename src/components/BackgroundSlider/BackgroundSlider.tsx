import { useEffect, useState } from "react";
import "./BackgroundSlider.css";

import { sliderData } from "./BackgroundSliderData";

const BackgroundSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide(current => (current + 1) % slideLength);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [slideLength]);
  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div className="image_slider">
                <img src={slide.image} alt="" className="image" />
                <div className="content">
                  <div className="content-inside">
                    <h2>{slide.title}</h2>
                    <p>{slide.body}</p>
                  </div>
                  <hr />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BackgroundSlider;
