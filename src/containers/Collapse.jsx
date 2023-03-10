import React, { useState, useEffect } from 'react';
import arrow from '../assets/images/Vector.svg';

const Collapse = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    }

    useEffect(() => {
        const mediaQueryList = window.matchMedia('(orientation: portrait)');

        const handleMediaQueryChange = (e) => {
            setOpen(e.matches);
        };

        mediaQueryList.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQueryList.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <div className={props.className}>
            <button onClick={toggle} className='collapse__button'>
                <p>{props.title}</p>
                <img src={arrow} alt="flèche" className={open ? "button__toggle--open" : "button__toggle"} />
            </button>
            {open && <div className='housingPage__collapse__text aboutPage__collapse__text'>
                <div>{props.text}</div>
            </div>}
        </div>
    )
};

export default Collapse;