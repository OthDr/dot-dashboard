import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Users from "../scenes/users/Users";
import Products from "../scenes/products/Products";
import Home from "../scenes/home/Home";

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
    }
]);