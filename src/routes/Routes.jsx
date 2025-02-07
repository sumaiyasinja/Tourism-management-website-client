import React from "react";
import { createBrowserRouter  } from "react-router-dom";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import Login from './../pages/login/Login';
import App from './../App';

 const router = createBrowserRouter([
    {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Login />,
      },
    ],
    },
  ]);





export default router;