import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashbord from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Category/Category";
import Colors from "../Pages/Colors/Colors";
import Team from "../Pages/Team/Team";
import Discount from "../Pages/Discount/Discount";
import Faq from "../Pages/Faq/Faq";
import Sizes from "../Pages/Sizes/Sizes";
import News from "../Pages/News/News";
import Contact from "../Pages/Contact/Contact";
import Products from "../Pages/Products/Products";

export const Router = createBrowserRouter([
    {
        path:'login',
        element:<Login/>
    },
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Products/>
            },
            {
                path:'/category',
                element:<Category/>
            },
            {
                path:'/discount',
                element:<Discount/>
            },
            {
                path:'/colors',
                element:<Colors/>
            },
            {
                path:'/faq',
                element:<Faq/>
            },
            {
                path:'/sizes',
                element:<Sizes/>
            },
            {
                path:'/team',
                element:<Team/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/news',
                element:<News/>
            }, 
        ]
    }
])