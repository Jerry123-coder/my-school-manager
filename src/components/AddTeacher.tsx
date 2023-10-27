import React, { useState, useRef } from "react";
import { GrAddCircle } from 'react-icons/gr'

const AddTeacher = ({ onClose }) => {
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState({
    fullName: "",
    email: "",
    gender: "",
    class: "",
    subject: "",
    dob: "",
    phoneNumber: {
        countryCode: "",
        number: "",
      },
  });
  let fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher({ ...newTeacher, [name]: value });
  };

 
  const handleImportCSV = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          if (result.data && result.data.length > 0) {
            const csvData = result.data;

            // Assuming the CSV has columns like "Full Name," "Email," "Gender," etc.
            if (csvData[0].includes("Full Name")) {
              const [fullNameIndex, emailIndex, genderIndex, classIndex, subjectIndex, dobIndex] = csvData[0].map((header) =>
                header.toLowerCase()
              );

              // Start from index 1 to skip the header row
              for (let i = 1; i < csvData.length; i++) {
                const newTeacherData = {
                  fullName: csvData[i][fullNameIndex],
                  email: csvData[i][emailIndex],
                  gender: csvData[i][genderIndex],
                  class: csvData[i][classIndex],
                  subject: csvData[i][subjectIndex],
                  dob: csvData[i][dobIndex],
                  
                  // Map other fields accordingly
                };

                // Add the new teacher data to the state
                setTeachers([...teachers, newTeacherData]);
              }
            }
          }
        },
        header: true,
      });
    }
  };

  const handleAddAnotherTeacher = () => {
    setTeachers([...teachers, newTeacher]);
    setNewTeacher({
      fullName: "",
      email: "",
      gender: "",
      class: "",
      subject: "",
      dob: "",
      phoneNumber: {
        countryCode: "",
        number: "",
      },
    });
  };

  const handleSubmit = () => {
    // Handle the submission of teacher data, e.g., send it to an API
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10 rounded-lg">
        <div className=" flex flex-col top-10 left-20 p-4 mt-4 w-[60rem] h-[45rem] glass-dark z-10 rounded-lg">
          <div className="flex justify-between mb-6">
            <h3 className="text-white text-lg font-semibold mb-2">
              Add Teachers{" "}
            </h3>
            <div
              onClick={onClose}
              className="flex items-center justify-center font-bold text-white cursor-pointer w-7 h-7 bg-red-500 rounded-full text-sm"
            >
              X
            </div>
          </div>

          <div className="px-24 py-8">
            <h2 className="text-4xl font-bold text-white">Add Teachers</h2>


            <input 
                type='file'
                accept=".csv"
                onChange={handleImportCSV}
                className="hidden"
                ref={(input) => fileInputRef = input } 
            />

            <button
              onClick={() => fileInputRef?.current.click()}
              className="bg-[#070d33] hover:bg-blue-400 hover:text-[#070d33] font-bold  text-white my-10 transition duration-300 ease-in"
            >
              Import CSV
            </button>

            <form>
              <input
                type="text"
                name="fullName"
                value={newTeacher.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-3 rounded-md focus:outline-blue-500 border-none mb-8 "
              />
              <input
                type="text"
                name="email"
                value={newTeacher.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full p-3 rounded-md focus:outline-blue-500 border-none mb-8 "
              />

              <div className="flex  flex-wrap space-x-5 mb-10">
                <select
                  className="flex-2 p-3 rounded-md"
                  name="gender"
                  value={newTeacher.gender}
                  onChange={handleInputChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <select
                  className="flex-2 p-3 rounded-md"
                  name="class"
                  value={newTeacher.class}
                  onChange={handleInputChange}
                >
                  <option value="">Select Class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  {/* Add more class options */}
                </select>
                <select
                  className="flex-1 p-3 rounded-md"
                  name="subject"
                  value={newTeacher.subject}
                  onChange={handleInputChange}
                >
                  <option value="">Select Subject</option>
                  <option value="1">Maths</option>
                  <option value="2">ICT</option>
                  <option value="3">French</option>
                  {/* Add more class options */}
                </select>
              </div>

            <div className="flex space-x-5 justify-between  mb-10">
              <input
              className="flex-1 p-3 rounded-md"
                type="date"
                name="dob"
                value={newTeacher.dob}
                onChange={handleInputChange}
              />

<div className="flex space-x-2 justify-between rounded-md">
          <select
            className="w-[5rem] p-3 rounded-md"
            name="phoneNumberCountryCode"
            value={newTeacher.phoneNumber.countryCode}
            onChange={handleInputChange}
          >
            <option value="">Country Code</option>
            <option value="+1">+1 (United States)</option>
            <option value="+44">+44 (United Kingdom)</option>
            {/* Add more country code options */}
          </select>
          <input
            type="text"
            name="phoneNumber"
            value={newTeacher.phoneNumber.number}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="rounded-md p-3"
          />
        </div>
              {/* <input
              className="flex-1 p-3 rounded-md"
                type="text"
                name="phoneNumber"
                value={newTeacher.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
              /> */}
              </div>
            </form>

            <div className="flex gap-5 w-full">
            <button onClick={handleAddAnotherTeacher}
            className="w-1/3 flex justify-center items-center gap-3 bg-[#070d33] hover:bg-blue-400 hover:text-[#070d33] font-bold  text-white transition duration-300 ease-in"
            ><span className=" text-white hover:text-[#070d33] font-bold"><GrAddCircle /></span>Add Another</button>
            <button onClick={handleSubmit}
            className="w-3/4 flex justify-center items-center gap-3 bg-green-400 hover:bg-green-500 font-bold  text-[#070d33] transition duration-300 ease-in focus:outline-none"
            >Submit</button>
            </div>

            {/* <div>
              {teachers.map((teacher, index) => (
                <div key={index}>{JSON.stringify(teacher)}</div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
