import React from "react";

const Card = ({ title = "Card Title", children, className = "" }) => {
  return (
    <div className={`border rounded-lg shadow-md p-6 bg-white ${className}`}>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="text-gray-600">{children}</div>
    </div>
  );
};

export default Card;
