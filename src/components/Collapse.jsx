import React, {useState, useEffect} from 'react';
import vector from '../assets/images/vector.png';
import '../styles/components/_collapse.scss'


const Collapse = (props) => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    }

    useEffect (() => {
        
    })

    return (
        <div className= {props.className}>
            <button onClick={toggle}>
                <p>{props.title}</p>
                <img src={vector} alt="flèche" className='button--toggle open close'/>
            </button>
            {open && <div className='collapse_text'>
                <span>{props.text}</span>
            </div>}
        </div>
    )
};

export default Collapse;