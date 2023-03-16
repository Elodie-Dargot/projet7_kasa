import React from 'react';

//cartes des logements de la page d'accueil
const Card = (props) => {

    return (
        <div className="housings__cards">
            <a className="housings__cards__link" href={"housing/"+ props.id}> 
                <img className='housings__cards__img' src={props.img} alt="accomodation" />
                <h2>{props.title}</h2>
            </a>
        </div>
    )
};

export default Card;