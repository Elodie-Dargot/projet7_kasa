import { NavLink } from "react-router-dom"

const PageNotFound = () => {
//page générée lorsque l'URL n'existe pas
    return (
        <div className="PageNotFound">
            <section className="PageNotFoundBody">
                <h1 className="PageNotFound__title">404</h1>
                <p className="PageNotFound__text">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                    <p className='PageNotFound__link'>Retourner sur la page d'accueil</p>
                </NavLink>
            </section>
        </div>
    );
};

export default PageNotFound;