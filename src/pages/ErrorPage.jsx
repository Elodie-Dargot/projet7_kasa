import React from "react";
import { NavLink } from "react-router-dom"

//page générée si l'erreur provient de l'application
const ErrorPage = () => {
    return (
        <div id="errorPage">
            <h1 className="errorPage__title">Oops!</h1>
            <p className="errorPage__text">Sorry, an unexpected error has occured.</p>
            <NavLink to="/">
                <p className='pageNotFound__link errorPage__link'>Retourner sur la page d'accueil</p>
            </NavLink>
        </div>
    );
};

export default ErrorPage;