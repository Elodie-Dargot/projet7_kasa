import React from 'react';

//bannière pour les pages accueil et à propos
const Banner = (props) => {
    return (
        <div className='banner'>
            <img className={props.className} src={props.img} alt='fond' />
            <p>{props.text}</p>
        </div>
    );
};

export default Banner;