import React from "react";

const InfoCard = ({ bgColor, count, label }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor} text-white`}>
      <h2 className="text-3xl font-bold">{count}</h2>
      <p className="text-lg font-medium">{label}</p>
    </div>
  );
};

export default InfoCard;
