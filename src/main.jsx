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
              loader: () => fetch('http://localhost:5000/job')
          },
          {
              path: '/add-a-job',
              element: <AddJob></AddJob>
          },
          {
              path: '/my-jobs',
              element: <MyJobs></MyJobs>,
          },
          {
              path: '/update-job/:id',
              element: <UpdateJob></UpdateJob>,
              loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
          },
          {
              path: '/job-details/:id',
              element: <JobDetails></JobDetails>,
              loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
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
