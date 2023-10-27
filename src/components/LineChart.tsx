import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

interface EarningsGraphProps {
  data: {
    labels: string[];  // Days of the week
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      fill: boolean;
    }[];
  };
}

const LineChart: React.FC<EarningsGraphProps> = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Earnings</h2>
      <Line
        data={data}
        options={{
          responsive: true,
          scales: {
            x: {
              type: 'category',  // Set x-axis as category scale
              labels: data.labels,
            },
            y: {
              type: 'linear',    // Set y-axis as linear scale
              beginAtZero: true,  // Adjust this based on your data
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
