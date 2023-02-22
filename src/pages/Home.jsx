import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import bannerHomePage from '../assets/images/bannerHomePage.png';
import Data from "../datas/logements.json"

const Home = () => {

    return (
        <div className="homePage">
            <Header />
            <Banner text='Chez vous, partout et ailleurs' img={bannerHomePage} />
            <div className='housings'>
                {Data.map((housing) => (
                    <Card key={housing.id} id={housing.id} title={housing.title} img={housing.cover}/>
                )
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;