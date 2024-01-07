import React, { useEffect } from 'react';
import {preLoaderAnim} from '../animations/index.js';
import Logo from '../images/logo_pisan.png';
import '../styles/Preloader.css'
const PreLoader = () => {
    
    useEffect(() =>{
        preLoaderAnim()
    })

    return (
        <div className="preloader">
            <div className="texts-container">
                <span><img src={Logo}/></span>
            </div>
        </div>
    )
}

export default PreLoader