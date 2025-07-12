import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error("Route Error:", error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-gray-900">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Oops!</h1>
      <p className="text-lg mb-2 text-gray-800 dark:text-gray-200">
        Something went wrong while loading this page.
      </p>
      <p className="text-sm text-gray-500 mb-6">
        {error?.statusText || error?.message}
      </p>
      <a
        href="/"
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Back to Home
      </a>
    </div>
  );
};

export default ErrorPage;
