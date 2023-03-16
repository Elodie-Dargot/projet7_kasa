import React from 'react';

//création du composant logo avec la couleur modulable 
const Logo = (props) => {
const logoColor = new Map([
    ['red', '/redLogo.svg'],
    ['white', '/whiteLogo.svg']
])
    return (
        <div className='header__logo footer__logo'>
            <img src={logoColor.get(props.logoColor)} alt="Logo Kasa" className="header__logo footer__logo"/>
        </div>
    );
};



export default Logo;