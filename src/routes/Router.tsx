import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../scenes/home/Home";
import SignIn from "../scenes/auth/SignIn";
import SignUp from "../scenes/auth/SignUp";
import NotFound from "../scenes/404/NotFound";
import Tables from "../scenes/tables/Tables";
import Settings from "../scenes/settings/Settings";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <Home />
            },
            {
                path: "/tables",
                element: <Tables />
            },
            {
                path: "/settings",
                element: <Settings />
            },
        ]
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/sign-up",
        element: <SignUp />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);