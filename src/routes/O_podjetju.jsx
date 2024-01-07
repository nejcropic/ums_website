import '../styles/O_podjetju.css'
import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import { textAnimation } from '../components_items/Animations';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import {Suhomontažna_dela} from '../index';

function O_podjetju() {
    return (  
        <>
		<NavBar />
        <Hero
        cName="hero-mid"
        heroImg={Suhomontažna_dela}
        title="O podjetju"
        text="Nekaj besed o podjetju..."
        url="/o_podjetju"
        btnClass="hide"
        />
        <motion.div variants={textAnimation} initial="hidden" animate="show" className="about-container">
            <h1>O nas</h1>
            <p>Smo družinsko podjetje, ki z večletnimi izkušnjami na področju suhomontaže in 
                slikopleskarstva ponujamo storitve po sprejemljivih cenah po celotni Sloveniji.</p>

            <h1>Vizija</h1>
            <p>Z izkušnjami razširiti storitve zunaj slovenskega ozemlja.</p>

            <h1>Cilj</h1>
            <p>S prilagodljivostjo storitve in cene omogočiti naročnikom lažjo in 
                hitrejšo odločitev pri izbiri storitve.</p>
        </motion.div>
        <Footer />
        </>
    );
}

export default O_podjetju;