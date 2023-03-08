import React from 'react';

const Card = (props) => {

    return (
        <div className="housings_cards">
            <a className="housings_cards--link" href={"housing/"+ props.id}>
                <img className='housings_cards_img' src={props.img} alt="accomodation" />
                <h2>{props.title}</h2>
            </a>
        </div>
    )
};

export default Card;