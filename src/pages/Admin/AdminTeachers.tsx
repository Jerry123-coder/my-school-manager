import React, {useState} from "react";
import TeachersTable from "../../components/TeachersTable";
import AddTeacher from "../../components/AddTeacher";

const AdminTeachers = () => {
  const [addTeacher, setAddTeacher]=useState<boolean>(false)

  const handleAddTeacher = () => {
    setAddTeacher(!addTeacher)
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
          Add Teacher
        </button>
      </div>

      {
        addTeacher && (
          <AddTeacher 
           onClose={handleAddTeacher}
          />
        )
      }
      <TeachersTable />
    </div>
  );
};

export default AdminTeachers;
