import "../styles/Hero.css";
import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import { backgroundAnimation, mainAnimation } from '../components_items/Animations';

function Hero(props) {

    return (  
        <>
        <motion.div variants={backgroundAnimation} initial="hidden" animate="show" className={props.cName}>
            <img alt="HeroImg" src={props.heroImg}/>
        </motion.div>

        <motion.div variants={mainAnimation} initial="hidden" animate="show"  className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </motion.div>
        </>
    );
}

export default Hero;