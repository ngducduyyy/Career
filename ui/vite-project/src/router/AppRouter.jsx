import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../Page/Home"
import Login from '../Page/Login';
import Signin from '../Page/Signin';
import ForgotPassword from '../Page/ForgotPassword';
import ChangePassword from '../Page/ChangePassword';
import UpdatePersonalInfo from '../Page/UpdatePersonalInfo';
import Navbar from '../component/Navbar/Navbar';
import RegisterJob from '../PageJob/RegisterJob';
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
  {
      path: "/forgotpassword",
      element: <ForgotPassword/>,

  },
  {
      path: "/changepassword",
      element: <ChangePassword/>,

  },
  {
      path: "/updatepersonalinfo",
      element: <UpdatePersonalInfo/>,

  },
  {
      path: "/registerjob",
      element: <RegisterJob/>,

  },


])
const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter