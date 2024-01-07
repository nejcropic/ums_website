import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import '../styles/Reference.css';
import { cardAnimation, cardX } from '../components_items/Animations.jsx';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer.jsx';
import { ReferenceItems } from '../components_items/ReferenceItems.jsx'
import { Intercontinental } from '../index';

function Reference() {
    
    return (  
        <>
		<NavBar />
        <Hero
        cName="hero-mid"
        heroImg={Intercontinental}
        title="Reference"
        text="Reference ..."
        url="/reference"
        btnClass="show"
        />

        <div className='reference-wrapper'>
            <motion.div variants={cardAnimation}  initial="hidden" animate="show" className='reference-card'>
                {ReferenceItems.map((item, index) =>{
                            return(
                <motion.div variants={cardX} animate= {{ rotate: 360 }} className='r-card' key={index} >
                    <div className='r-image'>
                        <img src={item.image} alt="" />
                    </div>        
                    <h4>{item.title}</h4>
                    {/*<p>{item.besedilo}</p>*/}
                </motion.div>
              )})}
            </motion.div>
        </div>
        <Footer />
        </>
    );
}

export default Reference;