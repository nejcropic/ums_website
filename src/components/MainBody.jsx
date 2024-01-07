import React from 'react';
import StoritveItems from '../components_items/StoritveItems.jsx'

function MainBody() {
    return (  
        <>
        <div className='group-wrapper'>
            <div className='row'>
                {StoritveItems.map((item, index) =>{
                            return(
                <div className='col-lg-4' key={index}>
                    <div className='group_container'>
                                <h2 class="major">{item.title}</h2>
                                <img class="image_main" src={item.image} alt="" />
                                <p>{item.besedilo}</p>
                    </div>
                </div>
              )})}
            </div>
        </div>
        </>
    );
}

export default MainBody;