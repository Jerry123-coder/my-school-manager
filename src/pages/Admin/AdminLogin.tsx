// SignupForm.tsx
import React, { useState } from "react";
// import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const AdminSignUp: React.FC = () => {
  const [schoolEmail, setSchoolEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  const navigate = useNavigate();

  const handleLinkToSignUp = () => {
    navigate('/admin/signup')
  };

  const submitForm = () => {
    // Submit form data to your server
    // Redirect to a success page or perform any other action
    alert("Login Successful! Let's get work started!");
    navigate("/admin/dashboard");
  };

  return (
    <div className="mx-auto p-[10rem] bg-slate-100 w-screen h-screen flex items-center justify-center flex-col">
      <div className="relative bg-white rounded shadow-lg w-[35rem] h-[30rem] px-24 pt-16 ">
       
        <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">
          Welcome... Login here
        </h1>
        <form>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-8 text-center">
              
            </h2>

            <div className="mb-4">
              <label htmlFor="schoolEmail">School Email:</label>
              <input
                type="email"
                id="schoolEmail"
                placeholder="Enter admin email address"
                value={schoolEmail}
                onChange={(e) => setSchoolEmail(e.target.value)}
                required
                className="border rounded p-2 w-full focus:outline-blue-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border rounded p-2 w-full focus:outline-blue-400"
              />
            </div>

            <button type="button" onClick={submitForm} className="bg-green-500 text-white p-2 rounded mt-10">
                Login
              </button>
              <p className='text-md text-center mt-4'>Don't have an account? <span onClick={handleLinkToSignUp} className="cursor-pointer text-blue-500 font-semibold text-center">Sign-up here</span></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignUp;
