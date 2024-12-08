import React from "react";
import Sidebar from "../components/Sidebar";
import CardsContainer from "../components/CardsContainer";
import ChartsContainer from "../components/ChartsContainer";
import FinanceChart from "../components/FinanceChart";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-grow p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

        <CardsContainer />

        <ChartsContainer />

        <div className="col-span-2">
          <FinanceChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
