import React from "react";

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  className = "",
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-white border rounded-lg text-gray-800 hover:bg-gray-50 disabled:opacity-50"
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 border rounded-lg ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800 hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-white border rounded-lg text-gray-800 hover:bg-gray-50 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
