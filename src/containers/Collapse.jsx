import React, {useState, useEffect} from 'react';
import arrow from '../assets/images/Vector.svg';
// import '../styles/components/_collapse.scss'
// import '../styles/utils/_variables.scss'


const Collapse = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    }

    useEffect (() => {
        
    })

    return (
        <div className= {props.className}>
            <button onClick={toggle} className='collapse__button'>
                <p>{props.title}</p>
                <img src={arrow} alt="flèche" className={open ? "button__toggle--open" : "button__toggle"}/>
            </button>
            {open && <div className='collapse_text'>
                <p>{props.text}</p>
            </div>}
        </div>
    )
};

export default Collapse;