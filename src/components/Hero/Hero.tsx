import "./Hero.css";
import { motion } from "framer-motion";
import { backgroundAnimation, mainAnimation } from "../Animations";

interface HeroProps { cName: string; heroImg: string; title: string; text: string; }

function Hero(props: HeroProps) {
  return (
    <>
      <motion.div
        variants={backgroundAnimation}
        initial="hidden"
        animate="show"
        className={props.cName}
      >
        <img alt="HeroImg" src={props.heroImg} />
      </motion.div>

      <motion.div
        variants={mainAnimation}
        initial="hidden"
        animate="show"
        className="hero-text"
      >
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </motion.div>
    </>
  );
}

export default Hero;
