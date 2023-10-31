// src/components/UserProfile.tsx
import React, { useState, ChangeEvent } from 'react';
// import { teachers } from '../data/teachers';
// import { User } from '../types';


// interface User {
//     id: number;
//     name: string;
//     gender: string;
//     class: number;
//     subject: string;
//     dob: string;
//     address: string;
//   }

type Student = {
    id: number;
    name: string;
    gender: string;
    class: number;
    subject: string;
    dob: string;
    address: string;
    birthday: string;
  };

//   interface TeacherProfileProps {
//     user: Teacher;
//     onClose: () => void;
//   }
  

interface UserProfileProps {
  user: Student;
  onClose: any;
  onImageChange: (image: File) => void;
}

const StudentProfile: React.FC<UserProfileProps> = ({ user, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    //   onImageChange(file);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-10 rounded-lg">
    <div className="relative bg-white p-20 w-[58rem] border rounded-lg shadow-md">
        {/* <button onClick={onClose}>Close Profile</button> */}
        <div
              onClick={onClose}
              className="absolute top-5 right-5 flex items-center justify-center font-bold text-white cursor-pointer w-10 h-10 bg-red-500 rounded-full text-lg"
            >
              X
            </div>
    <div className='flex items-center space-x-40 '>
      <div className="flex flex-col items-center justify-center mb-4">
        {selectedImage ? (
          <img src={selectedImage} alt="User Image" className="w-60 h-60 object-cover flex items-center justify-center rounded-full" />
        ) : (
          <div className="w-60 h-60 bg-gray-300 rounded-full" />)
        }
        <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mt-10 "
      />
      {/* <button
       onClick={handleImageChange}
      >Add Image</button> */}
      </div>
      <div className='w-full'>
      <h2 className="text-5xl font-bold mb-10">{user.name}</h2>
      <p className="w-full flex bg-slate-100 text-gray-700 mb-2"><span className='w-1/2'>ID Number:</span> <span className='font-semibold text-lg border-b-2 border-b-slate-200 w-1/2'>{user.id}</span></p>
      <p className="w-full flex bg-slate-200  text-gray-700 mb-2"><span className='w-1/2'>Subject:</span> <span className='font-semibold text-lg border-b-2 border-b-slate-200 w-1/2'>{user.subject}</span></p>
      <p className="w-full flex bg-slate-100 text-gray-700 mb-2"><span className='w-1/2'>Class(es):</span> <span className='font-semibold text-lg border-b-2 border-b-slate-200 w-1/2'>{user.class}</span></p>

      {/* <p className="w-full flex  text-gray-700 mb-2 mt-10">Others:</p> */}
      <p className="w-full flex bg-slate-200 text-gray-700 mb-2"><span className='w-1/2'>Gender:</span> <span className='font-semibold text-lg border-b-2 border-b-slate-200 w-1/2'>{user.gender}</span></p>
      <p className="w-full flex bg-slate-100 text-gray-700 mb-2"><span className='w-1/2'>Address:</span> <span className='font-semibold text-lg border-b-2 border-b-slate-200 w-1/2'>{user.address}</span></p>
      <p className="w-full flex bg-slate-200 text-gray-700 mb-2"><span className='w-1/2'>DOB:</span> <span className='font-semibold text-lg border-b-2 border-b-slate-200 w-1/2'>{user.dob}</span></p>

      
      </div>
      </div>
      </div>
    </div>
  );
};

export default StudentProfile;
