import React, { useState } from "react";

const Dropdown = ({
  items = [],
  label = "Select an option",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const handleSelect = (item) => {
    setSelected(item.label);
    setIsOpen(false);
    item.onClick?.();
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-48 px-4 py-2 text-sm font-medium text-gray-800 bg-white border rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selected}
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-48 mt-2 bg-white border rounded-lg shadow-lg">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => handleSelect(item)}
              className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
