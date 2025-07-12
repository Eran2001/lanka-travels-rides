import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const RentWithDriver = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Drive Lanka | Rent A Driver";
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-5xl font-bold text-[#5c3d2e] text-center mb-12">
          Rent with Driver
        </h1> */}

        {/* Introduction */}
        <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Explore Sri Lanka with Ease
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our Rent with Driver service offers a stress-free way to explore Sri
            Lanka. Our experienced drivers are not only skilled behind the wheel
            but also knowledgeable about the best routes, attractions, and
            hidden gems across the country.
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
                1. Choose Your Vehicle
              </h3>
              <p className="text-gray-600">
                Select from our wide range of vehicles, from compact cars to
                spacious vans, based on your group size and needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                2. Book Your Driver
              </h3>
              <p className="text-gray-600">
                Our professional drivers are assigned to ensure a safe and
                comfortable journey. They are trained, licensed, and familiar
                with Sri Lanka’s roads.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                3. Enjoy Your Trip
              </h3>
              <p className="text-gray-600">
                Sit back, relax, and let our driver take you to your
                destinations, whether it’s a city tour, beach getaway, or
                cultural exploration.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-[#5c3d2e] text-white rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Benefits of Renting with a Driver
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
                <h3 className="text-xl font-bold">Local Expertise</h3>
                <p className="max-lg:text-sm">
                  Our drivers double as guides, offering insights into local
                  culture and attractions.
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
                <h3 className="text-xl font-bold">Safety First</h3>
                <p className="max-lg:text-sm">
                  All drivers are vetted and vehicles are regularly inspected
                  for your peace of mind.
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
                <h3 className="text-xl font-bold">Convenience</h3>
                <p className="max-lg:text-sm">
                  No need to navigate unfamiliar roads or worry about parking.
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
                <h3 className="text-xl font-bold">Customizable Itineraries</h3>
                <p className="max-lg:text-sm">
                  Plan your trip with our team to create a personalized travel
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Book Your Chauffeured Journey
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

export default RentWithDriver;
