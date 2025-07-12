import React from "react";

const Services = () => {
  return (
    <section className="py-12 bg-[#f9f5e3] sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#5c3d2e] sm:text-4xl xl:text-5xl font-pj">
            Reliable Car Rental Services for Every Journey
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5c3d2e] sm:mt-8 font-pj">
            Choose from a wide range of vehicles, enjoy transparent pricing, and
            travel with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
          {/* 1 */}
          <div className="md:p-8 lg:p-14">
            {/* Icon */}
            <svg
              className="mx-auto"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
            >
              <path
                d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              24/7 Customer Support
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Need help anytime, anywhere? Our support team is available around
              the clock to assist you with bookings and inquiries.
            </p>
          </div>

          {/* 2 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-[#5c3d2e]">
            <svg
              className="mx-auto"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
            >
              <path
                d="M27 27H19V45H27V27Z"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 37H1V45H9V37Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M45 17H37V45H45V17Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 17L15 7L23 15L37 1"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 1H37V10"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Affordable Pricing
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              No hidden charges. Get clear and upfront pricing on all vehicles
              and rental durations.
            </p>
          </div>

          {/* 3 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-[#5c3d2e]">
            <svg
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              <path
                d="M41 1H1V41H41V1Z"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 7H7V20H18V7Z"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 26H7V35H18V26Z"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35 7H24V35H35V7Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Easy Booking
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Rent a car in just a few clicks. Our intuitive booking system
              ensures a seamless experience.
            </p>
          </div>

          {/* 4 */}
          <div className="md:p-8 lg:p-14 md:border-t md:border-[#5c3d2e]">
            <svg
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
            >
              {/* SVG path remains unchanged */}
              <path d="M9 9H33" stroke="#161616" strokeWidth="2" />
              <path d="M9 17H33" stroke="#161616" strokeWidth="2" />
              <path d="M1 25H13V31H29V25H41" stroke="#161616" strokeWidth="2" />
              <path
                d="M37 1H5C2.79 1 1 2.79 1 5V37C1 39.2 2.79 41 5 41H37C39.2 41 41 39.2 41 37V5C41 2.79 39.2 1 37 1Z"
                stroke="#161616"
                strokeWidth="2"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Flexible Rentals
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Daily, weekly, or monthly — rent a car for as long as you need,
              with flexible plans.
            </p>
          </div>

          {/* 5 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-[#5c3d2e] md:border-t">
            <svg
              className="mx-auto"
              width="46"
              height="42"
              viewBox="0 0 46 42"
              fill="none"
            >
              {/* SVG path remains unchanged */}
              <path
                d="M30.5 18.5..."
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
              />
              <path d="M41 41H5..." stroke="#161616" strokeWidth="2" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Top-Notch Vehicles
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Enjoy well-maintained, modern cars for a smooth and safe ride
              every time.
            </p>
          </div>

          {/* 6 */}
          <div className="md:p-8 lg:p-14 md:border-l md:border-[#5c3d2e] md:border-t">
            <svg
              className="mx-auto"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              {/* SVG path remains unchanged */}
              <path d="M25 7C..." stroke="#161616" strokeWidth="2" />
              <path
                d="M19 1C..."
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Real-Time Availability
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Check car availability in real-time and plan your travel without
              delays or guesswork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
