import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import bannerHomePage from '../assets/images/bannerHomePage.png';
import Data from "../datas/logements.json"

const Home = () => {

    return (
        <div className="homePage">
            <Banner text='Chez vous, partout et ailleurs' img={bannerHomePage} />
            <div className='housings'>
                {Data.map((housing) => (
                    <Card key={housing.id} id={housing.id} title={housing.title} img={housing.cover}/>
                )
                )}
            </div>
        </div>
    );
};

export default Home;