import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const StudentsChart = () => {
  const data = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        label: "Students",
        data: [45414, 40270],
        backgroundColor: ["#36A2EB", "#FF6384"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Students</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default StudentsChart;
