import { NavLink } from "react-router-dom"

const PageNotFound = () => {
//page générée lorsque l'URL n'existe pas
    return (
        <div className="pageNotFound">
            <section className="pageNotFoundBody">
                <h1 className="pageNotFound__title">404</h1>
                <p className="pageNotFound__text">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                    <p className='pageNotFound__link'>Retourner sur la page d'accueil</p>
                </NavLink>
            </section>
        </div>
    );
};

export default PageNotFound;