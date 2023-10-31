import React, { useState } from 'react'
import StudentsTable from '../../components/StudentsTable'
import AddStudent from '../../components/AddStudent'
import StudentProfile from '../../components/StudentProfile'

const AdminStudents = () => {
  const [addStudent, setAddStudent]=useState<boolean>(false)
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);

  const handleAddStudent = () => {
    setAddStudent(!addStudent)
  }

  const handleProfileOpen = (user) => {
    setSelectedTeacher(user);
    setProfileOpen(true);
  };

  const handleProfileClose = () => {
    setProfileOpen(false);
  };


  return (
    <div className="p-24">
      <div className="flex items-center gap-5 cursor-pointer justify-end">
        <div>Export CSV</div>
        <button className="bg-green-400 hover:bg-green-600 text-white font-semibold transition duration-300 ease-in">
          Export CSV
        </button>
        <button 
        onClick={handleAddStudent}
        className="bg-[#070d33] hover:bg-blue-400 hover:text-[#070d33] text-white font-semibold transition duration-300 ease-in">
          Add Students
        </button>
      </div>

      {
        addStudent && (
          <AddStudent
           onClose={handleAddStudent}
          />
        )
      }

      {profileOpen ? (<StudentProfile
          user={selectedStudent}
          onClose={handleProfileClose}
          // onImageChange={handleImageChange}
        />):(
          ''
        )
        
      }
      <StudentsTable handleProfileOpen={handleProfileOpen}/>
    </div>
  );
}

export default AdminStudents