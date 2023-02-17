import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='header'>
            <Logo logoColor='red'/>
            <Navigation />
        </div>
    );
};

export default Header;