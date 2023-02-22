import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import PageNotFound from "./pages/PageNotFound";
import "./styles/_main.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/:id",
        element: <Housing />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
    },
    {
        path: "*",
        element: <PageNotFound />,
        errorElement: <ErrorPage />,
    },
]);

export default router

