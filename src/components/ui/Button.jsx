import React from "react";
import { Icon as IconifyIcon } from "@iconify/react";

const Button = ({
  icon,
  text = "Click",
  iconPosition = "left",
  iconSize = 20,
  href = "#_",
  className = "",
  textClass = "",
  onClick,
  type = "button",
}) => {
  const isLink = !!href;

  const content = (
    <span className="relative inline-flex items-center justify-center">
      {/* Icon Left */}
      {icon && iconPosition === "left" && (
        <IconifyIcon
          icon={icon}
          width={iconSize}
          height={iconSize}
          className={`${text ? "mr-2" : ""}`}
        />
      )}

      {/* Text */}
      {text && <span className={`relative ${textClass}`}>{text}</span>}

      {/* Icon Right */}
      {icon && iconPosition === "right" && (
        <IconifyIcon
          icon={icon}
          width={iconSize}
          height={iconSize}
          className={`${text ? "ml-2" : ""}`}
        />
      )}
    </span>
  );

  const baseClasses = `
    relative rounded px-5 py-2.5 overflow-hidden group 
    bg-primary text-light hover:bg-gradient-to-r 
    hover:from-primary hover:to-green-400 hover:ring-2 
    hover:ring-offset-2 hover:ring-green-400 
    transition-all ease-out duration-300
    ${className}
  `;

  return isLink ? (
    <a href={href} className={baseClasses} onClick={onClick}>
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
      {content}
    </a>
  ) : (
    <button type={type} className={baseClasses} onClick={onClick}>
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
      {content}
    </button>
  );
};

export default Button;
