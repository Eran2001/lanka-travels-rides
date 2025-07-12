import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, title = "Modal", children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center xl:mt-30 lg:mt-20 md:mt-20 max-md:mt-20 justify-center bg-black/50 backdrop-blur">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:bg-gray-200 rounded-full p-2 transition"
            aria-label="Close"
          >
            <FaTimes size={22} />
          </button>
        </div>
        {/* Body */}
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
