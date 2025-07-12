import React from "react";

const Select = ({
  options = [],
  value,
  onChange,
  label = "Select",
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 text-gray-800 bg-white border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <svg
        className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-800"
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
    </div>
  );
};

export default Select;
