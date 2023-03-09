import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import PageNotFound from "./pages/PageNotFound"
import "./styles/_main.scss";
import App from "./App";
import HousingList from "./datas/logements.json"
import AboutCollapsesData from './datas/collapseRes.json'


const router = createBrowserRouter([
    
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            {
                path: "",
                element: <Home />,
                loader: async () => {
                    return HousingList
                }
            },
            {
                path: "housing/:id",
                element: <Housing />,
                loader: async ({ params }) => {

                    const housing = HousingList.find(data => data.id === params.id)

                    if (!housing) {
                        return redirect("*")

                    } else {
                        return housing
                    }
                }
            },
            {
                path: "about",
                element: <About />,
                loader: async () => {
                    return AboutCollapsesData
                }
            },
            {
                path: "*",
                element: <PageNotFound />,
            },
        ]
    },
 
]);

export default router

