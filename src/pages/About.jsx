import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import bannerAboutPage from '../assets/images/bannerAboutPage.png'
import Collapse from '../components/Collapse';
import Data from '../datas/collapseRes.json'
import '../styles/pages/_about.scss'

const About = () => {
    return (
        <div className="aboutPage">
            <Header />
            <Banner img={bannerAboutPage} />
            <div className='aboutPage_collapses'>
                {Data.map((collapseRes) => (
                    <Collapse key={collapseRes.id} className= 'aboutPage_collapse' title={collapseRes.title} text={collapseRes.text} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default About;