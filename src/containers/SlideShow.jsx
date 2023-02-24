import React, {useState} from 'react';
import arrow from '../assets/images/arrow.png'

const SlideShow = (props) => {

    const [number, setNumber] = useState(0);
    const slide = props.img;

    function ChangeSlide(sens) {

        let newNumber = number + sens;

        if (newNumber < 0) {
            newNumber = slide.length -1
        }
            
            
        if (newNumber > slide.length - 1) {
            newNumber = 0;
        }  

        setNumber(newNumber);
    }

    return (
        <div className='slider'>
            <img src={slide[number]} alt="accomodations" className='slider__slide' />
            <div onClick={() => ChangeSlide(-1)}><img src={arrow} alt='flèche' className="previous"/></div>
            <div onClick={() => ChangeSlide(1)}><img src={arrow} alt='flèche' className="next"/></div>
            <div className='slider__counter'>{number + 1}/{slide.length}</div>
        </div>
    );
};

export default SlideShow;