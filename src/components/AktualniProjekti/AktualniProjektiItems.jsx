import "./AktualniProjekti.css";
import { Component } from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";

import { cardY } from "../Animations";

class AktualniProjektiItems extends Component {
  render() {
    return (
      <motion.div variants={cardY} className={this.props.className}>
        <div className="projekti-text">
          <h2>{this.props.heading}</h2>
          <p>Lokacija: {this.props.textLokacija}</p>
          <br />
          <p>{this.props.textOpis}</p>
          <br />
          <p>Leto izvedbe: {this.props.textLeto}</p>
        </div>
        <div className="image">
          <img src={this.props.img} alt="img" />
        </div>
      </motion.div>
    );
  }
}

export default AktualniProjektiItems;
