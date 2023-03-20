import React, { useState, useEffect } from 'react';
import arrow from '../assets/images/Vector.svg';

const Collapse = (props) => {
    //le useState permet de gérer l'ouverture et la fermeture des collapses
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    }
    //le useEffect permet d'ouvrir les collapses à partir du format tablette en mode portrait, sinon trop d'espace après le footer 
    useEffect(() => {
        const handleMediaQueryChange = (e) => {
            if (window.innerWidth >= 767 && e.matches) {
                setOpen(true);
            } else {
                setOpen(false)
            }
        };  
        const mediaQueryList = window.matchMedia('(orientation: portrait)');
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