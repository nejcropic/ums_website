import '../styles/HomeBody.css';
import { motion } from '../../node_modules/framer-motion/dist/framer-motion';
import { Link } from 'react-router-dom';

import { Logo } from '../index';
import NavBar from './Navbar';
import Footer from './Footer';

function HomeBody() {

	const backgroundAnimation = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'ease',
			}
		}
	}
	
	const mainAnimation = {
		hidden: {
			opacity: 0,
			scaleY: 0,
		},
		show: {
			opacity: 1,
			scaleY: 1,
			transition: {
				delay: 0.5,
				type: "spring", 
				stiffness: 100,
				duration: 0.5,
				ease: 'easeInOut',
			}
		}
	}
	
	const navAnimation = {
		hidden: {
			opacity: 0,
			scaleX: 0,
		},
		show: {
			opacity: 1,
			scaleX: 1,
			transition: {
				delay: 1,
				duration: 0.5,
				ease: 'easeInOut',
			}
		}
	}

	return ( 
		<>
		<NavBar /> 
        <motion.div variants={backgroundAnimation} initial="hidden" animate="show" className='first-container'>
			<motion.div variants={mainAnimation} initial="hidden" animate="show" className="first-container-effect" >
				<div className='first-container-title'>
					<div className='first-container-title-inner'>
						<img src={Logo} />
					</div>	
				</div>
				<motion.nav variants={navAnimation} initial="hidden" animate="show" >
					<ul>
						<li><Link to="/storitve#gr_projekti">Gradbeni projekti</Link></li>
						<li><Link to="/storitve#adaptacije">Adaptacije</Link></li>
						<li><Link to="/storitve#suhomontaza">Suhomontažna dela</Link></li>
						<li><Link to="/storitve#zun_ureditev">Zunanja ureditev</Link></li>
					</ul>
				</motion.nav>  	
			</motion.div>
            
        </motion.div>
		
		<Footer/>
		</>
    );

	
}

export default HomeBody;