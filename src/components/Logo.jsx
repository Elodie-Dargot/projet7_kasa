import React from 'react';

const Logo = (props) => {

const logoColor = new Map([
    ['red', './redLogo.svg'],
    ['white', './whiteLogo.svg']
])
    return (
        <div >
            <img src={logoColor.get(props.logoColor)} alt="Logo Kasa" className="header_logo footer_logo"/>
        </div>
    );
};



export default Logo;