import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Data from "../datas/logements.json";
import { useParams } from 'react-router-dom';
import SlideShow from '../components/SlideShow';
import Collapse from '../components/Collapse';


const Housing = () => {
    const idObject = useParams();
    const housing = Data.find(data => data.id === idObject.id)
    
    return (
        <div className="housingPage">
            <Header />
            <SlideShow img={housing.pictures[0]} />

            <div className="housing_resume">
                <div className="housing_resume_titleSection">
                    <div className="housing_resume_titleSection_title">
                        <p>{housing.title}</p>
                    </div>
                    <div className="housing_resume_titleSection_city">
                        <p>{housing.location}</p>
                    </div>
                    <div className="housing_resume_titleSection_tags">
                        {housing.tags.map((tags, index) => (
                            <p key={index}>{tags}</p>
                        ))}
                    </div>
                </div>
                <div className="housing_resume_userSection">
                    <div className="housing_resume_userSection_user">
                        <p>{housing.host.name}</p>
                        <img src={housing.host.picture} alt={housing.host.name} />
                    </div>
                    <div className="housing_resume_userSection_rating">
                        <p>ratings</p>
                    </div>
                </div>
            </div>
            <div>
                <Collapse className= 'housingPage_collapse' title= "Description" text={housing.description}/>
                <Collapse className= 'housingPage_collapse' title= "Equipements" text={housing.equipments.map((equipement,index) => (
                    <p key={index}>{equipement}</p>
                ))}/>
            </div>
            <Footer />
        </div>
    );
};

export default Housing;