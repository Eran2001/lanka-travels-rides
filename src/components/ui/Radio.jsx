import React from "react";

const Radio = ({
  label = "Radio",
  name,
  value,
  checked,
  onChange,
  className = "",
}) => {
  return (
    <label
      className={`flex items-center space-x-2 cursor-pointer ${className}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
      />
      <span className="text-gray-800">{label}</span>
    </label>
  );
};

export default Radio;
