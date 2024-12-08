import React from "react";
import InfoCard from "./InfoCard";

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <InfoCard bgColor="bg-blue-500" count="124,684" label="Students" />

      <InfoCard bgColor="bg-yellow-500" count="12,379" label="Teachers" />

      <InfoCard bgColor="bg-purple-500" count="29,300" label="Staffs" />

      <InfoCard bgColor="bg-orange-500" count="95,800" label="Awards" />
    </div>
  );
};

export default CardsContainer;
