import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Users from "../scenes/users/Users";
import Products from "../scenes/products/Products";
import Home from "../scenes/home/Home";
import SignIn from "../scenes/auth/SignIn";
import SignUp from "../scenes/auth/SignUp";
import NotFound from "../scenes/404/NotFound";

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
                path: "/users",
                element: <Users />
            },
            {
                path: "/products",
                element: <Products />
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