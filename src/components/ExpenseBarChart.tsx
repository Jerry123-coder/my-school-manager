import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const ExpenseBarChart: React.FC = () => {
  // Sample data for the bar chart (you can replace this with your actual data)
  const data = {
    labels: ["Days", "Weeks", "Months", "Years"],
    datasets: [
      {
        label: "Expenses Covered",
        data: [1000, 2500, 8000, 40000], // Replace with your data
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const [filter, setFilter] = useState("Months"); // Initial filter

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          // text: "Time Period",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          // text: "Expenses",
        },
      },
    },
  };

  return (
    <div className="p-4 h-[23.5rem]">
      <div className="mb-4 flex justify-between items-center">
        <label className="mr-2 font-bold text-xl">Expenses</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        >
          <option value="Days">Days</option>
          <option value="Weeks">Weeks</option>
          <option value="Months">Months</option>
          <option value="Years">Years</option>
        </select>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mx-auto h-full">
        {/* <h2 className="text-xl font-semibold mb-2">Expenses</h2> */}
        <div className="w-full h-[20rem] mt-5 mx-auto">
          <div className="h-full w-full">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseBarChart;
