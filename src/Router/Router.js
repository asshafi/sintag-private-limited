import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Product from "../Components/Products/Product";
import Products from "../Components/Products/Products";
import Main from "../Layout/Main";


const Router= createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Homepage />,
                loader: () => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/products`);
                }
            },
            {
                path: "/products",
                element: <Products />,
                loader: () => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/products`);
                }
            },
            {
                path: "/product/:id",
                element: <Product />,
                loader: () => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/products`);
                }
            },

        ]

        
    }

]);

export default Router;