import React from "react";

const Button = ({
  icon,
  text = "Click",
  iconPosition = "left",
  iconSize = 20,
  className = "",
  textClass = "",
  onClick,
  type = "button",
}) => {
  // Render icon if provided
  const renderIcon = () =>
    icon
      ? React.cloneElement(icon, {
          style: {
            fontSize: iconSize,
            width: iconSize,
            height: iconSize,
            verticalAlign: "middle",
          },
          className: `inline-block align-middle ${
            iconPosition === "left" ? "mr-2" : "ml-2"
          }`,
        })
      : null;

  const iconLeft = iconPosition === "left";
  const Content = (
    <>
      {iconLeft && renderIcon()}
      <span
        className={`relative transition-colors duration-300 delay-200 group-hover:text-white ease ${textClass}`}
      >
        {text}
      </span>
      {!iconLeft && renderIcon()}
    </>
  );

  const baseClass =
    "relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 shadow-inner group " +
    className;

  return (
    <button type={type} className={baseClass} onClick={onClick}>
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
      {Content}
    </button>
  );
};

export default Button;
