import React from 'react';
import Section1 from '../components/Section1';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import backgroundSection1HomePage from '../assets/images/backgroundSection1HomePage.png'

const Home = () => {
    return (
        <div className="homePage">
            <Header />
            <Section1 text='Chez vous, partout et ailleurs' img= {backgroundSection1HomePage} />
            <Card />
            <Footer />
        </div>
    );
};

export default Home;