import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import Courses from "../pages/Courses/Courses";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Categories from "../pages/Categories/Categories";
import Course from "../pages/Course/Course";
import PrivateRoutes from "./PrivateRoutes";
import GetStarted from "../pages/GetStarted/GetStarted";
import PopularCourses from "../pages/PopularCourses/PopularCourses";
import Checkout from "../pages/Checkout/Checkout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <GetStarted></GetStarted>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/courses',
                        element: <PopularCourses></PopularCourses>,
                        loader: () => fetch(`https://my-assignment-ten-server-nahiannahin.vercel.app/courses`)
                    },
                    {
                        path: '/courses/category/:id',
                        element: <Categories></Categories>,
                        loader: ({ params }) => fetch(`https://my-assignment-ten-server-nahiannahin.vercel.app/category/${params.id}`)
                    },
                    
                ]
            },
            {
                path: '/courses/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://my-assignment-ten-server-nahiannahin.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('https://my-assignment-ten-server-nahiannahin.vercel.app/blogs'),
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
                loader: () => fetch('https://my-assignment-ten-server-nahiannahin.vercel.app/faq')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://my-assignment-ten-server-nahiannahin.vercel.app/courses/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])