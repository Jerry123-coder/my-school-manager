// Sidebar.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { PiStudentFill, PiBooksFill } from "react-icons/pi";
import { ImUserTie } from "react-icons/im";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const SideNav: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav
      // className={`relative bg-[#070d33] text-white w-${
      //   isSidebarOpen ? "1/5" : "16"
      // } h-screen  transition duration-400 ease-in-out`}

      className={`relative bg-[#070d33] text-white w-${isSidebarOpen ? "1/5" : "1/6"} h-[100vh] transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "transform translate-x-0" : "transform -translate-x-0"
      }`}

      // className={`relative bg-[#070d33] text-white w-${isSidebarOpen ? "1/5" : "1/6"} h-screen transition-transform duration-400 ease-in-out`}
   
    >
      <div
        className="absolute top-16 -right-5 block bg-white rounded-full text-3xl curser-pointer text-[#070d33] z-200  p-[5px] "
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <BsFillArrowLeftCircleFill className="cursor-pointer border-6 border-white rounded-full" />
        ) : (
          <BsFillArrowRightCircleFill className="cursor-pointer  border-6 border-white rounded-full" />
        )}
      </div>
      {isSidebarOpen ? (
        <div>
          <div className="px-8 mb-8 flex flex-col items-center py-6">
            {/* <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12 mx-auto rounded-full" /> */}
            <div className="bg-slate-200 w-24 h-24 rounded-full"></div>
            <p className="mt-2 text-md font-semibold">Batsa Montisory</p>
          </div>

          <ul className="flex flex-col gap-3 p-2">
            <li>
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4 lg:px-10"
              >
                {" "}
                <span>
                  <BiSolidDashboard />
                </span>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/teachers"
                className="flex items-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4 lg:px-10"
              >
                <span>
                  <ImUserTie />
                </span>
                Teachers
              </Link>
            </li>
            <li>
              <Link
                to="/admin/students"
                className="flex items-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4 lg:px-10"
              >
                <span>
                  <PiStudentFill />
                </span>
                Students
              </Link>
            </li>
            <li>
              <Link
                to="/admin/courses"
                className="flex items-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4 lg:px-10"
              >
                <span>
                  <PiBooksFill />
                </span>
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/admin/billing"
                className="flex items-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4 lg:px-10"
              >
                <span>
                  <FaMoneyCheckDollar />
                </span>
                Billing
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className="flex items-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4 lg:px-10"
              >
                <span>
                  <IoMdSettings />
                </span>
                Settings
              </Link>
            </li>
          </ul>

          <div className="absolute bottom-10 w-3/5 mt-auto">
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-5 text-xl bg-slate-400/60 hover:bg-red-700 focus:outline-none px-4 py-2 rounded-md w-full transition duration-300 ease-in-out"
            >
              Logout
              <span>
                <MdLogout />
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div>
        <div className="text-center mb-8 flex flex-col justify-center items-center py-6 px-4">
          {/* <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12 mx-auto rounded-full" /> */}
          <div className="bg-slate-200 w-14 h-14 rounded-full"></div>
          {/* <p className="mt-2 text-sm font-semibold">Batsa Montisory</p> */}
        </div>

        <ul className="flex flex-col gap-3 px-2">
          <li>
            <Link
              to="/admin/dashboard"
              className="flex items-center justify-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4"
            >
              {" "}
              <span>
                <BiSolidDashboard />
              </span>
             
            </Link>
          </li>
          <li>
            <Link
              to="/admin/teachers"
              className="flex items-center justify-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4"
            >
              <span>
                <ImUserTie />
              </span>
           
            </Link>
          </li>
          <li>
            <Link
              to="/admin/students"
              className="flex items-center justify-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4"
            >
              <span>
                <PiStudentFill />
              </span>
            
            </Link>
          </li>
          <li>
            <Link
              to="/admin/courses"
              className="flex items-center justify-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4"
            >
              <span>
                <PiBooksFill />
              </span>
         
            </Link>
          </li>
          <li>
            <Link
              to="/admin/billing"
              className="flex items-center justify-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4"
            >
              <span>
                <FaMoneyCheckDollar />
              </span>
           
            </Link>
          </li>
          <li>
            <Link
              to="/admin/settings"
              className="flex items-center justify-center gap-4 text-xl py-2 text-white transition duration-300 ease-in-out rounded-md hover:bg-blue-300 hover:text-[#070d33] p-4"
            >
              <span>
                <IoMdSettings />
              </span>
        
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-10 w-3/5 mt-auto">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-5 text-xl bg-slate-400/60 hover:bg-red-700 focus:outline-none px-4 py-2 rounded-md w-full transition duration-300 ease-in-out"
          >
          
            <span>
              <MdLogout />
            </span>
          </button>
        </div>
      </div>
      )}
    </nav>
  );
};

export default SideNav;
