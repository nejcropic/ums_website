import { Component } from 'react';
import { motion } from '../../node_modules/framer-motion/dist/framer-motion';

import { cardY } from '../components_items/Animations';
import '../styles/Storitve.css';

class StoritveItems extends Component {
    render() {

    return (
        <motion.div variants={cardY} className={this.props.className} id={this.props.id}>
            <div className='storitev-text'>
                <h2>{this.props.heading}</h2>
                <pre>{this.props.text}</pre>
            </div>
            <div className='image'>
                <img src={this.props.img} alt="img" />
            </div>
        </motion.div>
    )
    }
}

export default StoritveItems;