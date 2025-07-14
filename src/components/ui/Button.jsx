import React, { useEffect, useRef } from "react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const Button = ({
  text = "Click me",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) => {
  const buttonRef = useRef(null);

  // Entrance animation
  useEffect(() => {
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        translateY: [30, 0],
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutElastic(1, 0.9)",
        delay: 200,
      });
    }
  }, []);

  // Hover animation
  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -5],
      boxShadow: [
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      ],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-5, 0],
      boxShadow: [
        "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      ],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative rounded-lg px-5 py-2.5 overflow-hidden group bg-[#f4d35e] hover:bg-gradient-to-r hover:from-[#5c3d2e] hover:to-[#f4d35e] text-[#5c3d2e] hover:text-[#f9f5e3] hover:ring-2 hover:ring-offset-2 hover:ring-[#5c3d2e] transition-all ease-out duration-300 shadow-md hover:shadow-lg ${
        disabled
          ? "opacity-50 cursor-not-allowed pointer-events-none"
          : "cursor-pointer"
      } ${className}`}
      onMouseEnter={(e) => !disabled && handleHover(e.currentTarget)}
      onMouseLeave={(e) => !disabled && handleHoverLeave(e.currentTarget)}
    >
      {text}
    </button>
  );
};

export default Button;
