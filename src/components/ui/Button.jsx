import React from "react";

const Button = ({
  text = "Click me",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative rounded px-5 py-2.5 overflow-hidden group bg-[#f4d35e] hover:bg-gradient-to-r hover:from-[#5c3d2e] hover:to-[#f4d35e] text-[#5c3d2e] hover:text-[#f9f5e3] hover:ring-2 hover:ring-offset-2 hover:ring-[#5c3d2e] transition-all ease-out duration-300 ${
        disabled
          ? "opacity-50 cursor-not-allowed pointer-events-none"
          : "cursor-pointer"
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
