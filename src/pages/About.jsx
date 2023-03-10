import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import bannerAboutPage from '../assets/images/bannerAboutPage.png'
import Collapse from '../containers/Collapse';

const About = () => {
    //je recupère les informations du fichier json contenant les informations des collapses
    const AboutCollapsesData = useLoaderData()
    return (
        <div className="aboutPage">
            <Banner className='bannerAboutPage' img={bannerAboutPage} />
            <div className='aboutPage_collapses'>
                {AboutCollapsesData.map((data) => (
                    <Collapse key={data.id} className= 'aboutPage_collapse' title={data.title} text={data.text} />
                ))}
            </div>
        </div>
    );
};

export default About;