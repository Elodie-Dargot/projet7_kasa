import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import "./styles/_main.scss";
import App from "./App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,

        children: [
            
            {
                path: "",
                element: <Home />
            },
            {
                path: ":id",
                element: <Housing />
            },
            {
                path: "about",
                element: <About />
            },
        ]
    },
 
]);

export default router

