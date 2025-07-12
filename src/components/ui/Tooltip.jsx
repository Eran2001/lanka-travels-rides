import React, { useState } from "react";

const Tooltip = ({ text = "Tooltip", children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute z-10 px-3 py-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
