import { Component } from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

import { cardY } from "../Animations";
import "./Storitve.css";

function StoritveItems({ className, id, heading, text, img }) {
  return (
    <motion.div variants={cardY} className={className} id={id}>
      <div className="storitev-text">
        <h2>{heading}</h2>
        <div>
          <pre>{text}</pre>
        </div>
      </div>
      <div className="storitev-image">
        <img src={img} alt="img" />
      </div>
    </motion.div>
  );
}

export default StoritveItems;
