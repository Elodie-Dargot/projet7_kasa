import React, {useState} from 'react';
import arrow from '../assets/images/arrow.png'

const SlideShow = (props) => {

    const [numero, setNumero] = useState(0);
    const slide = props.img;

    function ChangeSlide(sens) {

        let nouveauNumero = numero + sens;

        if (nouveauNumero < 0) {
            nouveauNumero = slide.length -1
        }
            
            
        if (nouveauNumero > slide.length - 1) {
            nouveauNumero = 0;
        }  

        setNumero(nouveauNumero);
    }

    return (
        <div className='slider'>
            <img src={slide[numero]} alt="accomodations" className='slide' />
            <div onClick={() => ChangeSlide(-1)}><img src={arrow} alt='flèche' className="precedent"/></div>
            <div onClick={() => ChangeSlide(1)}><img src={arrow} alt='flèche' className="suivant"/></div>
        </div>
    );
};

export default SlideShow;