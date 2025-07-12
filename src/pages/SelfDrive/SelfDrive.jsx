import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";

const SelfDrive = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Drive Lanka | Self Drive";
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-5xl font-bold text-[#5c3d2e] text-center mb-12">
          Self Drive
        </h1> */}

        {/* Introduction */}
        <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Drive Your Adventure
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our Self Drive service gives you the freedom to explore Sri Lanka at
            your own pace. Choose from our diverse fleet and hit the road with
            confidence.
          </p>
        </section>

        {/* Process */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                1. Select Your Vehicle
              </h3>
              <p className="text-gray-600">
                Browse our fleet of well-maintained cars, SUVs, and vans to find
                the perfect match for your journey.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                2. Book Online
              </h3>
              <p className="text-gray-600">
                Use our easy online booking system to reserve your vehicle and
                choose your pickup location.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                3. Hit the Road
              </h3>
              <p className="text-gray-600">
                Pick up your vehicle, receive a quick orientation, and start
                your adventure across Sri Lanka.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-[#5c3d2e] text-white rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Benefits of Self Drive
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start max-lg:flex-col max-lg:items-center max-lg:gap-4">
              <div className="bg-[#f4d35e] text-[#5c3d2e] p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11l-4-4 1.4-1.4L10 9.2l3.6-3.6L15 7l-5 5z" />
                </svg>
              </div>
              <div className="max-lg:text-center max-lg:w-80">
                <h3 className="text-xl font-bold">Freedom to Explore</h3>
                <p className="max-lg:text-sm">
                  Create your own itinerary and travel at your own pace.
                </p>
              </div>
            </div>
            <div className="flex items-start max-lg:flex-col max-lg:items-center max-lg:gap-4">
              <div className="bg-[#f4d35e] text-[#5c3d2e] p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11l-4-4 1.4-1.4L10 9.2l3.6-3.6L15 7l-5 5z" />
                </svg>
              </div>
              <div className="max-lg:text-center max-lg:w-80">
                <h3 className="text-xl font-bold">Quality Vehicles</h3>
                <p className="max-lg:text-sm">
                  Our fleet is regularly maintained to ensure reliability and
                  safety.
                </p>
              </div>
            </div>
            <div className="flex items-start max-lg:flex-col max-lg:items-center max-lg:gap-4">
              <div className="bg-[#f4d35e] text-[#5c3d2e] p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11l-4-4 1.4-1.4L10 9.2l3.6-3.6L15 7l-5 5z" />
                </svg>
              </div>
              <div className="max-lg:text-center max-lg:w-80">
                <h3 className="text-xl font-bold">Flexible Rentals</h3>
                <p className="max-lg:text-sm">
                  Rent for a day, a week, or longer, with easy extensions if
                  needed.
                </p>
              </div>
            </div>
            <div className="flex items-start max-lg:flex-col max-lg:items-center max-lg:gap-4">
              <div className="bg-[#f4d35e] text-[#5c3d2e] p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11l-4-4 1.4-1.4L10 9.2l3.6-3.6L15 7l-5 5z" />
                </svg>
              </div>
              <div className="max-lg:text-center max-lg:w-80">
                <h3 className="text-xl font-bold">24/7 Support</h3>
                <p className="max-lg:text-sm">
                  Our team is available to assist you at any time during your
                  rental.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Start Your Journey Today
          </h2>
          {/* <Link
            to="/rent-vehicles"
            className="bg-[#f4d35e] text-[#5c3d2e] font-bold py-3 px-6 rounded-full hover:bg-[#e0c250] transition"
          >
            Choose Your Vehicle
          </Link> */}
          <Button
            text="Choose Your Vehicle"
            onClick={() => navigate("/rent-vehicles")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default SelfDrive;
