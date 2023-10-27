// import React from 'react'
import {useRoutes} from 'react-router-dom'
import Container from '../components/Container'
// import { Home } from '../pages/Home'
import AdminLogin from '../pages/Admin/AdminLogin'
import UserLogin from '../pages/UserLogin'
// import { NotFound } from '../assets'
import Home from '../pages/Home'
import AdminSignUp from '../pages/Admin/AdminSignUp'
import AdminDashboard from '../pages/Admin/AdminDashboard'
import AdminStudents from '../pages/Admin/AdminStudents'
import AdminTeachers from '../pages/Admin/AdminTeachers'
import AdminBilling from '../pages/Admin/AdminBilling'
import AdminCourses from '../pages/Admin/AdminCourses'
import AdminSettings from '../pages/Admin/AdminSettings'



export const Router = () => {
  return useRoutes([

    {element: <Home />, index:true},
    {element: <AdminLogin />, path:'admin/login'},
    {element: <AdminLogin />, path:'admin/'},
    {element: <AdminSignUp />, path:'admin/signup'},
    {element: <UserLogin />, path:'login'},
      
    
    {
         path: '',
         element:<Container />,
         children: [
              {element: <Home />, index:true},
              {element: <AdminDashboard />, path:'admin/dashboard'},
              {element: <AdminStudents />, path:'admin/students'},
              {element: <AdminTeachers />, path:'admin/teachers'},
              {element: <AdminBilling />, path:'admin/billing'},
              {element: <AdminCourses />, path:'admin/courses'},
              {element: <AdminSettings />, path:'admin/settings'},
           
         ],
    },
    {
         path: '*',
        //  element: <NotFound />,
    }
 ])
}
