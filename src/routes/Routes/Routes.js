import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FAQ from "../../components/FAQ/FAQ";
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
                path:'/courses',
                loader: () => fetch('https://programming-learning-zone-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path:'/courses/:id',
                // loader: () => fetch(``)
                element: <Courses></Courses>
            },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/faq',
                element: <FAQ/>
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