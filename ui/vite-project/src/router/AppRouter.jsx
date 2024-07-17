import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../Page/Home"
import Login from '../Page/Login';
import Signin from '../Page/Signin';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home/>,

  },
  {
      path: "/login",
      element: <Login />,

  }, 
  {
      path: "/signin",
      element: <Signin/>,

  },

])
const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter