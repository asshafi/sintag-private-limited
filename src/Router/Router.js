import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Components/Homepage/Homepage";
import Blog from "../Components/Blog/Blog";
import Product from "../Components/Products/Product";
import Products from "../Components/Products/Products";
import Main from "../Layout/Main";
import Faq from "../Components/FAQ/Faq";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../Components/Login/Login";
import Logout from "../Components/Logout/Logout";
import Signup from "../Components/Signup/Signup";
import Error from "../Components/Error/Error";
import BuyCourse from "../Components/Products/BuyProduct";
import OrderPlaced from "../Components/Products/OrderPlaced";

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
            {
                path: "/buy-product/:id",
                element: <PrivateRoute><BuyCourse /></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/product/${params.id}`);
                }
            },
            {
                path: "/order-placed/:id",
                element: <PrivateRoute><OrderPlaced /></PrivateRoute>,
                loader: ({ params }) => {
                    return fetch(`${process.env.REACT_APP_SERVER_URL}/product/${params.id}`);
                }
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/login",
                element: <PublicRoute><Login /></PublicRoute>
            },
            {
                path: "/logout",
                element: <PrivateRoute><Logout /></PrivateRoute>
            },
            {
                path: "/signup",
                element: <PublicRoute><Signup /></PublicRoute>
            },



            {
                path: '*',
                element: <Error />
            }
        ]

        
    }

]);

export default Router;