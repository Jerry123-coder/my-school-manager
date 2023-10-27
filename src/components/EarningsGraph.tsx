import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const EarningsGraph: React.FC = () => {
  const [filter, setFilter] = useState("daily"); // Initial filter
  const chartRef = useRef<Chart | null>(null);

  const dailyData = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Fees Collection",
        data: [200, 300, 500, 400, 600, 800, 700], // Daily data
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Total Collections",
        data: [400, 500, 700, 600, 800, 1000, 900], // Daily data
        borderColor: "green",
        fill: false,
      },
    ],
  };

  const monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Fees Collection",
        data: [2200, 2400, 2800, 2500, 2800, 3200, 3100, 2900, 3000, 3200, 3300, 3400], // Monthly data
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Total Collections",
        data: [4000, 4500, 4900, 4600, 5000, 5500, 5300, 5200, 5500, 5800, 5700, 5900], // Monthly data
        borderColor: "green",
        fill: false,
      },
    ],
  };

  const yearlyData = {
    labels: ["2022", "2023", "2024", "2025", "2026"],
    datasets: [
      {
        label: "Fees Collection",
        data: [25000, 28000, 32000, 30000, 33000], // Yearly data
        borderColor: "blue",
        fill: false,
      },
      {
        label: "Total Collections",
        data: [48000, 52000, 56000, 55000, 58000], // Yearly data
        borderColor: "green",
        fill: false,
      },
    ],
  };

  let dataToUse;

  if (filter === "daily") {
    dataToUse = dailyData;
  } else if (filter === "monthly") {
    dataToUse = monthlyData;
  } else if (filter === "yearly") {
    dataToUse = yearlyData;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          // text: "Amount in Earnings",
        },
      },
      x: {
        title: {
          display: true,
          // text: filter === "daily" ? "Days of the Week" : filter === "monthly" ? "Months" : "Years",
        },
        type: filter === "daily" ? "category" : "timeseries",
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = dataToUse;
      chartRef.current.update();
    }
  }, [filter, dataToUse]);

  return (
    <div className="p-4 h-[23.5rem]">
      <div className="flex justify-between items-center mb-4">
        <label className="mr-2 font-bold text-xl">Earnings</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mx-auto h-full">
        {/* <h2 className="text-xl font-semibold mb-2">Earnings</h2> */}
        <div className="w-full h-[20rem] mt-5 mx-auto">
          <Line data={dataToUse} options={options} ref={chartRef} />
        </div>
      </div>
    </div>
  );
};

export default EarningsGraph;
