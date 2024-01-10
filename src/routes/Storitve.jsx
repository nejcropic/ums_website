import React, { useEffect }  from 'react';
import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import '../styles/Storitve.css';
import { cardAnimation } from '../components_items/Animations';

import NavBar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import StoritveItems from '../components_items/StoritveItems';

import { Storitve_img, Akt_projekti_img, Adaptacije, En_sanacije, Suhomontažna_dela, Dvojcek_zunaj } from '../index';

const Storitve = () => {
    {/*
    useEffect(() => {
        scrollToElement();
      }, []);
    
      const scrollToElement = () => {
        const suhomontaza = document.getElementById('suhomontaza');
        if (suhomontaza) {
            suhomontaza.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    */}

    const test='Lorem \r\n ipsum';

    return (  
        <>
		<NavBar />
        <Hero
        cName="hero-mid"
        heroImg={Storitve_img}
        title="Storitve"
        text="Ponujamo vam različne vrste storitev..."
        btnClass="hide"
        />
        <motion.div variants={cardAnimation} initial="hidden" animate="show" className='group-wrapper'>
            <StoritveItems 
            className="first-storitev"
            id="gr_projekti"
            heading="Gradbeni projekti"
            text={'Aenean ornare velit lacus, \n ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris'}
            img={Akt_projekti_img}
            />  
            <StoritveItems 
            className="first-storitev-reverse"
            id="adaptacije"
            heading="Adaptacije"
            text="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris"
            img={Adaptacije}
            />  
            {/*
            <StoritveItems 
            className="first-storitev"
            id="gr_projekti"
            heading="Energetske sanacije"
            text="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris"
            img={En_sanacije}
            />  
            */}
            <StoritveItems 
            className="first-storitev"
            id="suhomontaza"
            heading="Suhomontažna dela"
            text="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris"
            img={Suhomontažna_dela}
            />  
            <StoritveItems 
            className="first-storitev"
            id="zun_ureditev"
            heading="Zunanja ureditev"
            text="Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris"
            img={Dvojcek_zunaj}
            />    
        </motion.div>
        <Footer />
        </>
    );
}

export default Storitve;