import { useEffect, useRef } from "react";
import { preLoaderAnim } from "../../animations/index";
import { Logo } from "../../images";
import "./Preloader.css";

const PreLoader = () => {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!container.current) return;
    const animation = preLoaderAnim(container.current);
    return () => animation.revert();
  }, []);
  return (
    <div className="preloader" ref={container} aria-hidden="true">
      <div className="texts-container"><span><img src={Logo} alt="" /></span></div>
    </div>
  );
};
export default PreLoader;
