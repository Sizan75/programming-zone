import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CheckOut from "../../components/CheckOut/CheckOut";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import FAQ from "../../components/FAQ/FAQ";
import Head from "../../components/Head/Head";

import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main/Main/Main";
import PrivateRoutes from "../PrivateRoute/PrivateRoute";

export const routes= createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Head></Head>
            },
            {
                path:'/courses',
                loader: () => fetch('https://programming-learning-zone-server.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path:'/courses/:id',
                loader: ({params}) => fetch(`https://programming-learning-zone-server.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({params})=> fetch(`https://programming-learning-zone-server.vercel.app/checkout/${params.id}`)
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