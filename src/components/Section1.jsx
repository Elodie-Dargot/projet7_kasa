import React from 'react';

const Section1 = (props) => {
    return (
        <div className='section1'>
            <img className='section1HomePageBackground' src={props.img} alt='fond' />
            <p>{props.text}</p>
        </div>
    );
};

export default Section1;