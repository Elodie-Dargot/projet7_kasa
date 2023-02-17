import React from 'react';
import Data from "../datas/logements.json"

const Card = () => {

    return (
        <div className='housings'>
            {Data.map(housing => {
                return (
                    <div key={housing.id} className="housings_cards">
                        <h2>{housing.title}</h2>
                    </div>

                )
            })}
        </div>
    );
};

export default Card;