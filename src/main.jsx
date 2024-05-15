import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AllJobs from "./Pages/AllJobs/AllJobs";
import AddJob from "./Pages/AddJob/AddJob";
import MyJobs from "./Pages/MyJobs/MyJobs";
import AuthProviders from './Providers/AuthProviders';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import UpdateJob from './Pages/UpdateJob/UpdateJob';
import JobDetails from './Pages/JobDetails/JobDetails';
import AppliedJobs from './Pages/AppliedJobs/AppliedJobs';
import PrivateRoutes from './Routes/PrivateRoutes';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
          {
              path: '/',
              element: <Home></Home>
          },
          {
              path: '/blogs',
              element: <Blogs></Blogs>
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
              path: '/all-jobs',
              element: <AllJobs></AllJobs>,
              loader: () => fetch('https://job-wander-server.vercel.app/job')
          },
          {
              path: '/add-a-job',
              element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
          },
          {
              path: '/my-jobs',
              element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>,
          },
          {
              path: '/update-job/:id',
              element: <PrivateRoutes><UpdateJob></UpdateJob></PrivateRoutes>,
              loader: ({params}) => fetch(`https://job-wander-server.vercel.app/job/${params.id}`, {credentials: 'include'})
          },
          {
              path: '/job-details/:id',
              element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
              loader: ({params}) => fetch(`https://job-wander-server.vercel.app/job/${params.id}`, {credentials: 'include'})
          },
          {
              path: '/applied-jobs',
              element: <PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>,
          },
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
