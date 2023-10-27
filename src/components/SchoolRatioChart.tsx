import React, { useState } from "react";
import { Pie } from "react-chartjs-2";

const SchoolRatioChart: React.FC = () => {
  // Sample data for the pie chart (you can replace this with your actual data)
  const initialData = {
    labels: ["Males", "Females"],
    datasets: [
      {
        data: [300, 400], // Replace with your data
        backgroundColor: ["#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
      },
    ],
  };

  const [data, setData] = useState(initialData);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const handleFilterChange = (filter: string) => {
    switch (filter) {
      case "student-teacher":
        setData({
          labels: ["Students", "Teachers"],
          datasets: [
            {
              data: [600, 20], // Replace with your data
              backgroundColor: ["#FF6384", "#36A2EB"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB"],
            },
          ],
        });
        break;
      case "parent-student":
        setData({
          labels: ["Parents", "Students"],
          datasets: [
            {
              data: [200, 600], // Replace with your data
              backgroundColor: ["#FFCE56", "#FF6384"],
              hoverBackgroundColor: ["#FFCE56", "#FF6384"],
            },
          ],
        });
        break;
      case "male-female-teacher":
        setData({
          labels: ["Male Teachers", "Female Teachers"],
          datasets: [
            {
              data: [10, 10], // Replace with your data
              backgroundColor: ["#36A2EB", "#FFCE56"],
              hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
            },
          ],
        });
        break;
      default:
        setData(initialData);
        break;
    }
  };

  return (
    <div className="p-4 h-[23.5rem] ">
      <div className="mb-4 flex justify-between items-center">
        <label className="mr-2 font-bold text-xl">School Ratios</label>
        <select
          onChange={(e) => handleFilterChange(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        >
          <option value="gender">Male vs Female</option>
          <option value="student-teacher">Student to Teacher</option>
          <option value="parent-student">Parent to Student</option>
          <option value="male-female-teacher">Teachers</option>
        </select>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md h-full mx-auto ">
        {/* <h2 className="text-xl font-semibold mb-2">School Ratios</h2> */}
        <div className="w-full h-[18rem] mt-5 mx-auto">
        <Pie data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SchoolRatioChart;
