import React from "react";

const OurProgress = () => {
  return (
    <section className="py-10 w-full bg-gray-100 sm:py-16 lg:py-24">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#5c3d2e] sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-[#5c3d2e] md:mt-8">
            Trusted by thousands of customers across the island. See how we’ve
            grown as a reliable car rental partner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006D5B] to-[#6ca0dc]">
                6+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Years in Service
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Providing quality rentals
            </p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006D5B] to-[#6ca0dc]">
                4800+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Happy Rentals
            </p>
            <p className="text-base mt-0.5 text-gray-500">Across the island</p>
          </div>

          <div>
            <h3 className="font-bold text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#006D5B] to-[#6ca0dc]">
                35+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Vehicles Available
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              From economy to luxury
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProgress;
