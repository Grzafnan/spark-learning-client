import { createBrowserRouter, } from "react-router-dom";
import About from "../components/Pages/About/About";
import Courses from "../components/Pages/Courses/Courses";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Faq from "../components/Pages/Faq/Faq";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login/Login";
import Register from "../components/Pages/Login/Register/Register";
import Footer from "../components/Pages/Shared/Footer/Footer";
import Main from "../layout/Main/Main";

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
        path: '/courses',
        element: <Courses />,
        loader: () => fetch('http://localhost:5000/courses')
      }
    ]
  }
]);