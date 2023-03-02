import React from 'react';

const Banner = (props) => {
    return (
        <div className='banner'>
            <img className={props.className} src={props.img} alt='fond' />
            <p>{props.text}</p>
        </div>
    );
};

export default Banner;