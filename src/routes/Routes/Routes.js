import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main/Main/Main";

export const routes= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register/>
            }
        ]
    }
])