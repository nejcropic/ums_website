import gsap from "gsap";

export const preLoaderAnim = (element: HTMLDivElement) => {
  return gsap.context(() => {
    gsap.timeline()
      .from(".texts-container span", { duration: 0.35, y: 240, skewY: 10, ease: "power3.out" })
      .to(element, { duration: 0.5, height: 0, ease: "power3.out" })
      .set(element, { display: "none" });
  }, element);
};
