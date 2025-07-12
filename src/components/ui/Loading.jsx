import React from "react";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#5c3d2e] border-t-transparent"></div>
      <p className="text-lg font-medium text-[#2c6e49] mt-4">{message}</p>
    </div>
  );
};

export default Loading;
