import React from "react";

const TextInput = ({
  value,
  onChange,
  placeholder = "Enter text...",
  className = "",
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      className={`w-full p-3 py-2 border rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    />
  );
};

export default TextInput;
