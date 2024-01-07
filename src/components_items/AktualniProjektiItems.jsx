import '../styles/Akt_projekti.css';
import { Component } from 'react';
import { motion } from '../../node_modules/framer-motion/dist/framer-motion';

import { cardY } from '../components_items/Animations';

class AktualniProjektiItems extends Component {
    render() {

    return (
        <motion.div variants={cardY} className={this.props.className}>
            <div className='storitev-text'>
                <h2>{this.props.heading}</h2>
                <p>Lokacija: {this.props.textLokacija}</p>
                <p>Velikost: {this.props.textVelikost}<sup>2</sup></p>
            </div>
            <div className='image'>
                <img src={this.props.img} alt="img" />
            </div>
        </motion.div>
    )
    }
}

export default AktualniProjektiItems;