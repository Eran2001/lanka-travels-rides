import React from "react";

const TextArea = ({
  value,
  onChange,
  placeholder = "Enter text...",
  className = "",
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-3 border rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    />
  );
};

export default TextArea;
