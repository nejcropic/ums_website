import { motion } from "framer-motion";

import { cardY } from "../Animations";
import "./Storitve.css";

interface StoritveProps { className: string; id: string; heading: string; text: string; img: string; }

function StoritveItems({ className, id, heading, text, img }: StoritveProps) {
  return (
    <motion.div variants={cardY} className={className} id={id}>
      <div className="storitev-text">
        <h2>{heading}</h2>
        <div>
          <pre>{text}</pre>
        </div>
      </div>
      <div className="storitev-image">
        <img loading="lazy" decoding="async" src={img} alt="img" />
      </div>
    </motion.div>
  );
}

export default StoritveItems;
