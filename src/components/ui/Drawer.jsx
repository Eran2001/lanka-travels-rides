import React from "react";

const Drawer = ({
  isOpen,
  onClose,
  title = "Drawer",
  children,
  width = "w-[80vw]", // default width if not passed
}) => {
  return (
    <div
      className={`fixed inset-0 transition duration-300 ease-in-out z-[99999] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer panel */}
      <div
        className={`absolute right-0 top-0 h-full ${width} bg-[#f9f5e3] shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button - OUTSIDE */}
        <button
          onClick={onClose}
          className={`absolute -left-10 top-4 text-white p-1 transition ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
