import React from "react";

const GetStarted = () => {
  const phoneNumber = "0768932410"; // Replace with your number (no + or leading 0)
  const defaultMessage = "Hello, I found you from your website!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Let's Connect!
        </h1>
        <p className="text-gray-600 mb-6">
          Tap the button below to connect with me on WhatsApp instantly.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white transition"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.52 3.48A11.83 11.83 0 0012 0 11.89 11.89 0 000 12a11.66 11.66 0 001.61 6L0 24l6.42-1.67A11.8 11.8 0 0012 24a11.89 11.89 0 008.52-20.52zM12 21.58a9.63 9.63 0 01-5.19-1.5l-.37-.22-3.81 1 1-3.7-.24-.38a9.69 9.69 0 01-1.49-5.17 9.71 9.71 0 0116.58-6.87 9.64 9.64 0 010 13.67A9.64 9.64 0 0112 21.58zm5.3-7.58l-1.5-.76a.74.74 0 00-1 .26l-.63 1a.76.76 0 01-1 .33 8.33 8.33 0 01-4.1-4.1.76.76 0 01.33-1l1-.63a.74.74 0 00.26-1l-.76-1.5a.74.74 0 00-1-.33 4.89 4.89 0 00-2.1 2.8 8.36 8.36 0 007.44 7.44 4.89 4.89 0 002.8-2.1.74.74 0 00-.33-1z" />
          </svg>
          Connect on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default GetStarted;
