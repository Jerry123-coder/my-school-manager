import React, { useState, useEffect } from 'react';
import { teachers } from '../data/teachers';
import { AiOutlineSearch } from 'react-icons/ai'

const TeachersTable: React.FC = ({ handleProfileOpen }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);
  const [filterBy, setFilterBy] = useState<keyof Teacher>('name'); // Default filter property is 'name'


  type Teacher = {
    id: number;
    name: string;
    gender: string;
    class: number;
    subject: string;
    dob: string;
    address: string;
    birthday: string;
  };

  useEffect(() => {
    // Filter teachers based on the search term and selected property
    const filtered = teachers.filter((teacher) => {
      if (filterBy === 'class') {
        return teacher[filterBy].toString().includes(searchTerm);
      } else {
        return teacher[filterBy].toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    setFilteredTeachers(filtered);
  }, [searchTerm, filterBy, teachers]);


  return (
    <div className="mt-20">
      

    <div className='flex items-center w-full space-x-8'>
    <h1 className="text-2xl font-bold mb-4">Teachers On Roll</h1>
      <div className="bg-[#070d33] rounded-md text-white p-2 flex items-center space-x-2 mb-4">
        <label className="block font-semibold">Filter by:</label>
        <select
          value={filterBy}
          onChange={(e) => setFilterBy(e.target.value)}
          className="border  rounded-sm px-2 py-[2px] cursor-pointer hover:to-blue-300 focus:outline-none text-[#070d33] "
        >
          <option value="name">Name</option>
          <option value="gender">Gender</option>
          <option value="className">Class</option>
          <option value="subject">Subject</option>
          <option value="dob">DOB</option>
          <option value="address">Address</option>
          <option value="birthday">Birthday</option>
        </select>
      </div>

      <div className="mb-4 flex items-center border border-[#070d33]/40 p-[9px] rounded-md space-x-6 hover:outline-blue-300">
        <input
          type="text"
          placeholder={`Search by ${filterBy}`}
          className=" w-[30rem] focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className='text-2xl font-bold text-slate-400'><AiOutlineSearch/></span>
        
      </div>
      </div>

      <table className="min-w-full border-collapse rounded-md overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-[#070d33] text-white text-left px-4">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Gender</th>
            <th className="border px-4 py-2">Class</th>
            <th className="border px-4 py-2">Subject</th>
            <th className="border px-4 py-2">Address</th>
            <th className="border px-4 py-2">DOB</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.map((teacher, index) => (
            <tr
              key={teacher.id}
              className={`${index % 2 === 1 ? 'bg-[#070d33]/10' : 'bg-white'} cursor-pointer hover:bg-blue-300 transition duration-300 ease-in font-semibold px-4`}
              onClick={() => handleProfileOpen(teacher)}
            >
              <td className="border px-4 py-2">{teacher.id}</td>
              <td className="border px-4 py-2">{teacher.name}</td>
              <td className="border px-4 py-2">{teacher.gender}</td>
              <td className="border px-4 py-2">{teacher.class}</td>
              <td className="border px-4 py-2">{teacher.subject}</td>
              <td className="border px-4 py-2">{teacher.address}</td>
              <td className="border px-4 py-2">{teacher.dob}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersTable;
