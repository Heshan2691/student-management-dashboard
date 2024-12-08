import React from "react";
import StudentsChart from "./StudentsChart";
import AttendanceChart from "./AttendanceChart";

const ChartsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <StudentsChart />

      <AttendanceChart />
    </div>
  );
};

export default ChartsContainer;
