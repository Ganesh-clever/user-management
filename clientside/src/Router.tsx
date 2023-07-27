import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { ProductedRouter, PublicRouter } from "./Utils/GlobalFunctions";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<ProductedRouter><Dashboard/></ProductedRouter>
    },
    {
        path:'/login',
        element:<PublicRouter><Login/></PublicRouter>
    },
    {
        path:'/register',
        element:<Register/>
    }
])