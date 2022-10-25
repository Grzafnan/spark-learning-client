import { createBrowserRouter, } from "react-router-dom";
import Courses from "../components/Pages/Courses/Courses";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
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
        path: '/courses',
        element: <Courses />,
        loader: () => fetch('http://localhost:5000/courses')
      }
    ]
  }
]);