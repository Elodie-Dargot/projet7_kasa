import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SlideShow from '../containers/SlideShow';
import Collapse from '../containers/Collapse';
import Ratings from '../components/Ratings'


const Housing = () => {
    //je recupère les informations du fichier json contenant les informations sur les logements
    const housing = useLoaderData();
    return (
        <div className="housingPage">
            <SlideShow img={housing.pictures} />
            <div className="housingPage__resume">
                <div className="housingPage__resume__titleSection">
                    <div className="housingPage__resume__titleSection__title">
                        <p>{housing.title}</p>
                    </div>
                    <div className="housingPage__resume__titleSection__city">
                        <p>{housing.location}</p>
                    </div>
                    <div className="housingPage__resume__titleSection__tags">
                        {housing.tags.map((tags, index) => (
                            <p key={index} className= 'housingPage__resume__titleSection__tag'>{tags}</p>
                        ))}
                    </div>
                </div>
                <div className="housingPage__resume__userSection">
                    <div className="housingPage__resume__userSection__user">
                        <p>{housing.host.name}</p>
                        <img className="housingPage__resume__userSection__user__picture" src={housing.host.picture} alt={housing.host.name} />
                    </div>
                    <Ratings rate={housing.rating} />
                </div>
            </div>
            <div className='housingPage__collapses'>
                <Collapse className= 'housingPage__collapse' title= "Description" text={housing.description}/>
                <Collapse className= 'housingPage__collapse' title= "Equipements" text={housing.equipments.map((equipement,index) => (
                    <p key={index}>{equipement}</p>
                ))}/>{/* Le map permet ici d'afficher les équipements sous forme de liste */}
            </div>
        </div>
    );
    
};

export default Housing;