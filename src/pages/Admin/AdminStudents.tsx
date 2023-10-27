import React, { useState } from 'react'
import StudentsTable from '../../components/StudentsTable'
import AddStudent from '../../components/AddStudent'

const AdminStudents = () => {
  const [addStudent, setAddStudent]=useState<boolean>(false)

  const handleAddTeacher = () => {
    setAddStudent(!addStudent)
  }
  return (
    <div className="p-24">
      <div className="flex items-center gap-5 cursor-pointer justify-end">
        <div>Export CSV</div>
        <button className="bg-green-400 hover:bg-green-600 text-white font-semibold transition duration-300 ease-in">
          Export CSV
        </button>
        <button 
        onClick={handleAddTeacher}
        className="bg-[#070d33] hover:bg-blue-400 hover:text-[#070d33] text-white font-semibold transition duration-300 ease-in">
          Add Students
        </button>
      </div>

      {
        addStudent && (
          <AddStudent
           onClose={handleAddTeacher}
          />
        )
      }
      <StudentsTable />
    </div>
  );
}

export default AdminStudents