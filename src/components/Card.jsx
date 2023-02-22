import React from 'react';

const Card = (props) => {

    return (
        <div>
            <a className="housings_cards" href={props.id}>
                <img className='housings_cards_img' src={props.img} alt="accomodation" />
                <h2>{props.title}</h2>
            </a>
        </div>
    )
};

export default Card;