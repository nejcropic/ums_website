import "./AktualniProjekti.css";
import { Component } from "react";
import { motion } from "framer-motion";

import { cardY } from "../Animations";

interface ProjektProps { className: string; heading: string; textLokacija: string; textOpis: string; textLeto: string; img: string; }

class AktualniProjektiItems extends Component<ProjektProps> {
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
          <img loading="lazy" decoding="async" src={this.props.img} alt="img" />
        </div>
      </motion.div>
    );
  }
}

export default AktualniProjektiItems;
