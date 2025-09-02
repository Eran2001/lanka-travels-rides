import React, { useEffect, useState } from "react";
import Loading from "../../components/ui/Loading";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Tours = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Lanka Travel Rides | Tours & Rentals";
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-10">
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 py-16 space-y-20">
        {/* Vehicle Pricing */}
        <section>
          <section className="text-center py-16 bg-[#f4d35e] rounded-lg mb-8">
            <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
              Vehicle Pricing Details
            </h2>
            <p className="text-lg text-gray-700 max-w-auto px-0 mx-auto">
              Explore our range of vehicles with both driver-included and
              self-drive options. Choose the best fit for your journey.
            </p>
          </section>

          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-[#f4d35e] text-[#5c3d2e]">
                <tr>
                  <th className="py-3 px-4 text-left">Vehicle Type</th>
                  <th className="py-3 px-4 text-left">Fuel</th>
                  <th className="py-3 px-4 text-left">Seats</th>
                  <th className="py-3 px-4 text-left">Auto / Manual</th>
                  <th className="py-3 px-4 text-left">Price with Driver</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-3 px-4">AC Buses (29 & 33 seats)</td>
                  <td className="py-3 px-4">Diesel</td>
                  <td className="py-3 px-4">29 / 33</td>
                  <td className="py-3 px-4">Manual</td>
                  <td className="py-3 px-4">$120</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">AC Bus (45 seats)</td>
                  <td className="py-3 px-4">Diesel</td>
                  <td className="py-3 px-4">45</td>
                  <td className="py-3 px-4">Auto</td>
                  <td className="py-3 px-4">$200</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">KDH High Roof</td>
                  <td className="py-3 px-4">Diesel</td>
                  <td className="py-3 px-4">14</td>
                  <td className="py-3 px-4">Auto</td>
                  <td className="py-3 px-4">$70</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">KDH Flat Roof</td>
                  <td className="py-3 px-4">Diesel</td>
                  <td className="py-3 px-4">9</td>
                  <td className="py-3 px-4">Auto</td>
                  <td className="py-3 px-4">$60</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    Cars (Shuttle, Aqua, Wagon-R, Vezel, Prius, Every Buddy)
                  </td>
                  <td className="py-3 px-4">Petrol</td>
                  <td className="py-3 px-4">3 – 6</td>
                  <td className="py-3 px-4">Auto</td>
                  <td className="py-3 px-4">$50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tours Info */}
        <section>
          <div className="text-center py-10 bg-[#f4d35e] rounded-2xl shadow-md mb-12">
            <h2 className="text-3xl font-bold text-[#5c3d2e] mb-2">
              Tour Packages
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover Sri Lanka with our <strong>One Day Tours</strong>,{" "}
              <strong>Round Tours</strong>, and <strong>Multi-Day Trips</strong>
              . Share your{" "}
              <strong>days, stop places, and preferred route</strong>, and we’ll
              prepare a custom quotation just for you.
            </p>
          </div>
        </section>

        {/* Rentals Info */}
        <section>
          <div className="text-center py-10 bg-[#f4d35e] rounded-2xl shadow-md mb-12">
            <h2 className="text-3xl font-bold text-[#5c3d2e] mb-2">
              Self-Drive & Rentals
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Enjoy flexible <strong>without driver rentals</strong>. Send us
              the rental days and we’ll provide a quotation with optional
              services tailored for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                KDH Flat Roof
              </h3>
              <p className="text-gray-700 leading-relaxed">
                One Day: Rs.15,000 ($50)
                <br />
                150 km included
                <br />
                Extra km: Rs.50/km
              </p>
            </div>
            <div className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">Cars</h3>
              <p className="text-gray-700 leading-relaxed">
                One Day: Rs.8,000 ($30)
                <br />
                150 km included
                <br />
                Extra km: Rs.30/km
              </p>
            </div>
          </div>
        </section>
        <section className="py-8 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Book your vehicle today and experience the freedom of the open road
            with Lanka Travel Rides.
          </p>
          <Button
            text="Hire Now"
            onClick={() => navigate("/check-out-our-fleet")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8"
          />
        </section>
      </div>
    </div>
  );
};

export default Tours;
