import React from "react";
import {
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 shadow-lg flex flex-col">
      <div className="p-4 bg-blue-600 text-white text-center">
        <h1 className="text-xl font-bold">SchoolHub</h1>
      </div>

      <div className="flex-grow p-4">
        <h3 className="text-gray-500 uppercase text-xs font-bold mb-3">Menu</h3>
        <ul className="space-y-2">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" />
          <SidebarItem icon={<FaChalkboardTeacher />} label="Teachers" />
          <SidebarItem icon={<FaUserGraduate />} label="Students" />
          <SidebarItem icon={<FaCalendarAlt />} label="Attendance" />
          <SidebarItem icon={<FaMoneyBillWave />} label="Finance" />
          <SidebarItem icon={<FaCalendarAlt />} label="Calendar" />
        </ul>

        {/* Other Section */}
        <h3 className="text-gray-500 uppercase text-xs font-bold mt-8 mb-3">
          Other
        </h3>
        <ul className="space-y-2">
          <SidebarItem icon={<FaCogs />} label="Settings" />
          <SidebarItem icon={<FaSignOutAlt />} label="Log Out" />
        </ul>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <li className="flex items-center p-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded cursor-pointer">
      <div className="mr-3 text-lg">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </li>
  );
};

export default Sidebar;
