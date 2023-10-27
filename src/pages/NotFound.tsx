// import React from 'react'
import { useNavigate } from "react-router-dom";
// import { NotFound as NotFound404 } from '../assets/index';
// import ErrorNotFound from '../assets/'

const NotFound = () => {
     const navigate = useNavigate()

     return (
          <div className=' h-screen w-screen flex flex-col items-center justify-center gap-10'>
               {/* <img src={NotFound404} width={500}/> */}
               <button onClick={() => {navigate(-1)}}>Back to previous page</button>
          </div>
     )
}

export default NotFound