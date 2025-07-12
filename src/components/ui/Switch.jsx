import React from "react";

const Switch = ({ checked, onChange, label = "Toggle", className = "" }) => {
  return (
    <label
      className={`flex items-center space-x-2 cursor-pointer ${className}`}
    >
      <span className="text-gray-800">{label}</span>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-10 h-6 bg-gray-300 rounded-full transition-colors ${
            checked ? "bg-blue-500" : ""
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-transform ${
              checked ? "translate-x-4" : ""
            }`}
          ></div>
        </div>
      </div>
    </label>
  );
};

export default Switch;
