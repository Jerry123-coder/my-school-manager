// SignupForm.tsx
import React, { useState } from "react";
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";


const AdminSignUp: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [adminName, setAdminName] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");
  const [schoolEmail, setSchoolEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [digitalAddress, setDigitalAddress] = useState<string>("");
  const stepIndicatorWidth = `${(step - 1) * 25}%`; 

  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const submitForm = () => {
    // Submit form data to your server
    // Redirect to a success page or perform any other action
    alert("Signup Successful! You can redirect to a success page now.");
    navigate('/admin/dashboard')
  };

  return (
    <div className="mx-auto p-[10rem] bg-slate-100 w-screen h-screen flex items-center justify-center flex-col">
      <div className="relative bg-white rounded shadow-lg w-[35rem] h-[40rem] px-24 pt-16 ">
      {
        step !== 1 && (
          <div 
          onClick={() => setStep(step-1)}
          className=" absolute mt-[4px] text-3xl text-blue-500 hover:text-blue-600 hover:text-[2rem] transition-all duration-200 ease-in  font-bold cursor-pointer"><BsArrowLeftCircleFill /></div>
   
        )
      }
 <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center">Let's Get You Setup</h1>
        <form>
          {step === 1 && (
            <div className="flex flex-col justify-center">
             
              <h2 className="text-2xl font-semibold mb-8 text-center">School details</h2>
              <div className="mb-4">
                <label htmlFor="adminName">Admin Name:</label>
                <input
                  type="text"
                  id="adminName"
                  placeholder="Enter admin name"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  required
                  className="border rounded p-2 w-full focus:outline-blue-400"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="schoolName">School Name:</label>
                <input
                  type="text"
                  id="schoolName"
                  placeholder="Enter school name"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  required
                  className="border rounded p-2 w-full focus:outline-blue-400"
                />
              </div>
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
              <button type="button" onClick={nextStep} className="bg-blue-500 text-white p-2 mt-5 rounded">
                Next
              </button>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-8 text-center">Security Details</h2>
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
              <div className="mb-4">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  required
                  className="border rounded p-2 w-full focus:outline-blue-400"
                />
              </div>
              <button type="button" onClick={nextStep} className="bg-blue-500 text-white p-2 mt-5 rounded">
                Next
              </button>
            </div>
          )}
          {step === 3 && (
             <div className="flex flex-col justify-center">
             <h2 className="text-2xl font-semibold mb-8 text-center">Additional Details</h2>
             <div className="mb-4">
               <label htmlFor="schoolCategory">School Category</label>
               <input
                 type="text"
                 id="schoolCategory"
                 placeholder="Eg. Basic School / Senior High / Tertiary"
                 value={category}
                 onChange={(e) => setCategory(e.target.value)}
                 required
                 className="border rounded p-2 w-full focus:outline-blue-400"
               />
             </div>
             <div className="mb-4">
               <label htmlFor="digitalAddress">Digital Address</label>
               <input
                 type="text"
                 id="digitalAddress"
                 placeholder="Enter Digital Adrress"
                 value={digitalAddress}
                 onChange={(e) => setDigitalAddress(e.target.value)}
                 required
                 className="border rounded p-2 w-full focus:outline-blue-400"
               />
             </div>
             <button type="button" onClick={nextStep} className="bg-blue-500 text-white p-2 mt-5 rounded">
               Next
             </button>
           </div>
          )}
          {step === 4 && (
            <div className="flex flex-col justify-center gap-3">
              <h2 className="text-lg font-semibold mb-4 text-center">Please confirm your data</h2>
              {/* <p>Please confirm your data:</p> */}
              <p>
                <strong>Admin Name:</strong> {adminName}
              </p>
              <p>
                <strong>School Name:</strong> {schoolName}
              </p>
              <p>
                <strong>School Email:</strong> {schoolEmail}
              </p>
              <p>
                <strong>Catgory:</strong> {category}
              </p>
              <p>
                <strong>Digital Address:</strong> {digitalAddress}
              </p>
              {/* Add more information for confirmation if needed */}
              <button type="button" onClick={submitForm} className="bg-green-500 text-white p-2 rounded mt-10">
                Submit
              </button>
            </div>
          )}
        </form>
      </div>

       {/* Step indicator line map */}
       <div className="w-full mt-[5rem] relative flex items-center justify-start">
        <div className="h-[4px] bg-blue-500 " style={{ width: stepIndicatorWidth }}></div>
        <div className="absolute flex w-full">
        <div className="w-1/4  transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 h-4 w-4 rounded-full border border-white"></div>
        <div className="w-1/4  transform -translate-x-1/2 -translate-y-1/2 bg-white h-4 w-4 rounded-full border border-blue-500"></div>
        <div className="w-1/4  transform -translate-x-1/2 -translate-y-1/2 bg-white h-4 w-4 rounded-full border border-blue-500"></div>
        <div className="w-1/4  transform -translate-x-1/2 -translate-y-1/2 bg-white h-4 w-4 rounded-full border border-blue-500"></div>
      
       
        </div>
      </div>

    </div>
  );
};

export default AdminSignUp;
