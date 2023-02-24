import React from 'react';
import redStar from '../assets/images/redStar.png'
import greyStar from '../assets/images/greyStar.png'

const Ratings = (props) => {

    const ratings = []
    let rate = props.rate
    for (let i = 0; i < 5; i++) {
        if (rate > 0) {
            ratings.push(<img key={i} src={redStar} alt='stars' className='housingPage__resume__userSection__rating__star'/>)
            rate-- 
        } else {
            ratings.push(<img key={i} src={greyStar} alt='stars' className='housingPage__resume__userSection__rating__star'/>)
        }
    }

    return (
        <div className="housingPage__resume__userSection__rating">
            {ratings}
        </div>
        
    );
}

export default Ratings;