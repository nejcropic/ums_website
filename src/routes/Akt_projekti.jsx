import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import { cardAnimation } from '../components_items/Animations';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import AktualniProjektiItems from '../components_items/AktualniProjektiItems.jsx'
import Footer from '../components/Footer.jsx';
import {Akt_projekti_img, Dvojcek} from '../index';

function Akt_projekti() {
    return (  
        <>
		<NavBar />
        <Hero
        cName="hero-mid"
        heroImg={Akt_projekti_img}
        title="Aktualni projekti"
        text="Veliko izkušenj..."
        btnClass="hide"
        />

        <motion.div variants={cardAnimation}  initial="hidden" animate="show"  className='group-wrapper'>
            <AktualniProjektiItems 
            className="first-storitev"
            heading="Dvojček"
            textLokacija="Ihan"
            textVelikost="270,00 m"
            img={Dvojcek}
            />  
            <AktualniProjektiItems 
            className="first-storitev-reverse"
            heading="Dvojček"
            textLokacija="Ihan"
            textVelikost="270,00 m"
            img={Dvojcek}
            />  
        </motion.div>
        
        <Footer/>
        </>
    );
}

export default Akt_projekti;