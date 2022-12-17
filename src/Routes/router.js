import { createBrowserRouter, } from "react-router-dom";
import About from "../components/Pages/About/About";
import Blog from "../components/Pages/Blog/Blog";
import CheckOut from "../components/Pages/Courses/CheckOut/CheckOut";
import Courses from "../components/Pages/Courses/Courses";
import CourseSummary from "../components/Pages/Courses/CourseSummary/CourseSummary";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Faq from "../components/Pages/Faq/Faq";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login/Login";
import Register from "../components/Pages/Login/Register/Register";
import Profile from "../components/Pages/Profile/Profile";

import Main from "../layout/Main/Main";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/faq',
        element: <Faq />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/course/:id',
        element: <CourseSummary />,
        loader: ({ params }) => fetch(`https://xplore-server-side-grzafnan.vercel.app/course/${params.id}`)
      },
      {
        path: 'checkout/:id',
        element: <PrivateRoutes><CheckOut /></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://xplore-server-side-grzafnan.vercel.app/course/${params.id}`)
      }

    ]
  }
]);