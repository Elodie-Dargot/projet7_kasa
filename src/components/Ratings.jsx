import React from 'react';
import redStar from '../assets/images/redStar.svg'
import greyStar from '../assets/images/greyStar.svg'

const Ratings = (props) => {

    const rate = props.rate
    const emptyRating = Array(5).fill(<img src={greyStar} alt='stars' className='housingPage__resume__userSection__rating__star'/>)
    const fillRating = emptyRating.fill(<img src={redStar} alt='stars' className='housingPage__resume__userSection__rating__star'/>, 0, rate)
    return (
        <ul className="housingPage__resume__userSection__rating">{fillRating.map((stars, index) => (
            <li key={index}>{stars}</li>
        ))}</ul>
    )
}

export default Ratings;