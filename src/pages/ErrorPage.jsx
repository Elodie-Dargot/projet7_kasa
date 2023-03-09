import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";


const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="errorPage">
            <Header />
            <section className="errorPageBody">
                <h1 className="errorPage__title">404</h1>
                <p className="errorPage__text">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/">
                    <p className='errorPage__link'>Retourner sur la page d'accueil</p>
                </NavLink>
            </section>
            <Footer />
        </div>
    );
};
export default ErrorPage;