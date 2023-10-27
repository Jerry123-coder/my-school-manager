// import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './NavBar'
import SideNav from './SideNav'
// import Footer from './Footer'

const Container = () => {
     return (
          <div className='flex w-screen max-w-[100vw] min-h-screen'>
              <SideNav />
              <div className='w-full flex flex-col'>
                    {/* Nav */}
               <Navbar />
               {/* Outlet */}
               <div className="lg:min-h-[70vh] overflow-y-hidden">
                    <Outlet />
               </div>
              </div>
               
               
          </div>
     )
}

export default Container