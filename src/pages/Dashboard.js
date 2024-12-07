import React from "react";
import MetricCard from "../components/MetricCard";
import SummaryCard from "../components/SummaryCard";
import Notices from "../components/Notices";
import AttendanceChart from "../components/AttendanceChart";

const Dashboard = () => {
  const notices = [
    "Parent-teacher meeting on Friday.",
    "Grade 10 exam starts next week.",
    "Annual sports day registration is open.",
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Students" value="250" color="blue" />
        <MetricCard title="Total Teachers" value="25" color="green" />
        <MetricCard title="Total Classes" value="15" color="purple" />
        <MetricCard title="Total Events" value="8" color="orange" />
      </div>

      {/* Attendance Summary */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Attendance Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard title="Grade 1" percentage={90} />
          <SummaryCard title="Grade 2" percentage={85} />
          <SummaryCard title="Grade 3" percentage={88} />
          <SummaryCard title="Grade 4" percentage={92} />
        </div>
      </div>

      {/* Notices */}
      <div>
        <Notices notices={notices} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <AttendanceChart />
      </div>
    </div>
  );
};

export default Dashboard;
