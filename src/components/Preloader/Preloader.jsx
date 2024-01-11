import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations/index";
import { Logo } from "../../index";
import "./Preloader.css";
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  });

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>
          <img src={Logo} />
        </span>
      </div>
    </div>
  );
};

export default PreLoader;
