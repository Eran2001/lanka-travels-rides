import React from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <section className="py-10 bg-[#f9f5e3] w-full sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#5c3d2e] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Find answers to common questions about our car rental services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {/* Q1 */}
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                How do I rent a car?
              </span>
              <svg
                className="w-6 h-6 text-gray-400 rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Choose your preferred vehicle, select rental dates, and proceed
                with the booking through our website or app.
              </p>
            </div>
          </div>

          {/* Q2 */}
          <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                What payment methods are accepted?
              </span>
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                We accept credit/debit cards, PayPal, and select mobile wallets
                for convenient payments.
              </p>
            </div>
          </div>

          {/* Q3 */}
          <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                Can I cancel or modify my booking?
              </span>
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Yes, you can cancel or modify your booking through your account
                dashboard. Please refer to our cancellation policy.
              </p>
            </div>
          </div>

          {/* Q4 */}
          <div className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                What should I do in case of an emergency?
              </span>
              <svg
                className="w-6 h-6 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="hidden px-4 pb-5 sm:px-6 sm:pb-6">
              <p>
                Contact our 24/7 support line immediately. Emergency contact
                details are included in your booking confirmation email.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you’re looking for?{" "}
          <Link
            to="faqs"
            className="font-medium text-[#006D5B] transition-all duration-200 hover:text- focus:text- hover:cursor-pointer"
          >
            Take a look at our FQAs
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
