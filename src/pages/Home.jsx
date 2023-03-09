import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import Card from '../components/Card';
import bannerHomePage from '../assets/images/bannerHomePage.png';

const Home = () => {

    const HousingList = useLoaderData()

    return (
        <div className="homePage">
            <Banner className='bannerHomePage' text='Chez vous, partout et ailleurs' img={bannerHomePage} />
            <div className='housingSection'>
                {HousingList.map((housing) => (
                    <Card key={housing.id} id={housing.id} title={housing.title} img={housing.cover}/>
                )
                )}
            </div>
            
        </div>
    );
};

export default Home;