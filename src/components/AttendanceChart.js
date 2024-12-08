import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AttendanceChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Total Present",
        data: [80, 85, 90, 95, 80],
        backgroundColor: "#4CAF50",
      },
      {
        label: "Total Absent",
        data: [20, 15, 10, 5, 20],
        backgroundColor: "#F44336",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Attendance</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default AttendanceChart;
