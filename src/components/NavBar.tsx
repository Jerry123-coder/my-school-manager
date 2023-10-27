// import React,{ useEffect, useRef, useState } from 'react'
import React,{ useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { LuBell, LuBellRing } from 'react-icons/lu'

// import { Link, useLocation } from 'react-router-dom'
// import { HiBars3BottomRight } from 'react-icons/hi2'

const Navbar = () => {
     // const location = useLocation()
     // const menuRef = useRef(null);
     // const menuItems = [
     //      {id: 1, name: 'Home', link: ''},
     //      {id: 2, name: 'About', link: 'about'},
     //      {id: 3, name: 'Service', link: 'service'},
     //      // {id: 4, name: 'Testimonials', link: 'testimonial'},
     //      {id: 4, name: 'Blog', link: 'blog'},
     //      {id: 5, name: 'Contact', link: 'contact'},
     // ]

     const [notificationActive, setNotificationActive] = useState<boolean>(false);
     // const [clicked, setClicked] = useState<boolean>(true);
     // const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
     //      event?.preventDefault()
     //      setClicked(!clicked)
     // }

     // useEffect(() => {
     //      if (clicked) {
     //           document.body.style.overflow = ''
     //      }
     //      else {
     //           document.body.style.overflow = 'hidden'
     //      }

     // }, [clicked]);

     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

     // useEffect(() => {
     //      const handleClickOutside = (event:any) => {
     //           // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access 
     //           if (menuRef.current && !menuRef?.current.contains(event?.target)) {
     //                setClicked(true);
     //           }
     //      };

     //      Attach the event listener to handle clicks outside the dropdown
     //      document.addEventListener('mousedown', handleClickOutside);

     //      Clean up the event listener when the component unmounts
     //      return () => {
     //           document.removeEventListener('mousedown', handleClickOutside);
     //      };
         
     // }, []);
     return (
          // <div className="flex flex-row items-center justify-between text-center bg-white px-8 py-5 z-[100] -ml-8 lg:px-32 w-screen lg:-ml-32 sticky top-0 overflow-x-clip">
          // <div className="flex flex-row items-center justify-between text-center bg-white px-8 py-5 z-[100] lg:px-32  sticky top-0 overflow-x-clip">
          // <div className='w-full flex justify-between items-center sticky top-0 bg-white'>
              
          //      <button disabled={!clicked} onClick={openMenu} className="lg:hidden flex text-black p-0 bg-transparent focus:outline-none disabled:pointer-events-none">
          //           <HiBars3BottomRight    size="30"  />
          //      </button>
          //      <div ref={menuRef} className={`lg:hidden bg-slate-50 text-white w-52 px-5 py-5 text-left font-semibold top-[10%] right-8 shadow-md rounded-lg transition-all duration-700 ease-in-out  ${clicked ? 'translate-x-[150%] fixed' : 'translate-x-[0] fixed'}`}>
          //           <ul className='flex flex-col gap-3'>
          //           {menuItems.map((item) => (
          //                <Link key={item.id} to={item?.link} onClick={() => setClicked(true)}>
          //                     <li className={`${'/'+ item?.link === location.pathname ? 'bg-green-400 -ml-2  text-black rounded-lg' : 'text-black'} p-2 text-sm font-semibold transition-all duration-200 ease-in-out`}>{item.name}</li>
          //                </Link>
          //           ))}
          //           </ul>
          //      </div>
          //      <div className="hidden lg:flex space-x-10">
          //           {menuItems.map((item) => (
          //                <Link key={item.id} to={item?.link}>
          //                     <p className={`${'/'+ item?.link === location.pathname ? 'text-green-600' : 'text-black'} text-sm font-semibold hover:scale-125 transition-all duration-200 ease-in-out`}>{item.name}</p>
          //                </Link>
          //           ))}
          //      </div>
          //      <div className="hidden lg:flex space-x-4">
          //           <Link to={'https://app.monitormyrehab.com'} target='_blank'>
          //                <button className='bg-transparent text-[#139c43] border-1 border-[#139c43] focus:outline-none hover:bg-[#139c43] hover:text-white'>Sign Up</button>
          //           </Link>
          //      </div>
          // </div>
          // </div>
          <nav className="bg-slate-100 p-4 shadow-md lg:px-24 ">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-900">Extra details go here</div>
            <div className="flex items-center  gap-6 relative text-left">

               <div 
               onClick={() => setNotificationActive(!notificationActive)}
               className={`text-2xl font-bold cursor-pointer transform transition-transform duration-300 ease-in-out 
                    hover:scale-125 `}
               >
                    {
                         notificationActive ? (
                              <LuBell className='text-slate-400 transition duration-300 ease-in-out'/>
                         ):(
                              <LuBellRing className='text-blue-600 hover:text-blue-500 transition duration-300 ease-in-out'/>
                         )
                    }
               </div>
               <div className='h-8 w-[2px] bg-slate-400 rounded-full'></div>
              <div onClick={toggleDropdown} className="flex items-end justify-center bg-blue-900 w-14 h-14 cursor-pointer text-white text-[2.5rem] hover:shadow-md hover:shadow-slate-300 hover:text-slate-100 rounded-full focus:outline-none">
                <FaUserAlt />
              </div>
              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 top-16 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      User Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </nav>
     )
}

export default Navbar