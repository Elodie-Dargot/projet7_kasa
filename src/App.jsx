import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
    return (
        <div className='main'>
            <Header /> 
            <Outlet />
            <Footer />
        </div>
    );
};

export default App;