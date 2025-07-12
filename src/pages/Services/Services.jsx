import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";

const Services = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Drive Lanka | Services";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);
  if (isLoading) return <Loading />;
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        {/* <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h1 className="text-5xl font-bold text-[#5c3d2e] mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            At Drive Lanka, we provide premium vehicle rental services tailored
            to your needs. Whether you're exploring Sri Lanka or need reliable
            transportation, our diverse fleet and flexible options ensure a
            seamless experience.
          </p>
        </section> */}

        <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Drive Lanka, we provide premium vehicle rental services tailored
            to your needs. Whether you're exploring Sri Lanka or need reliable
            transportation, our diverse fleet and flexible options ensure a
            seamless experience.
          </p>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full items-start">
              <h3 className="text-2xl font-bold text-[#5c3d2e] mb-4">
                Rent with Driver
              </h3>
              <p className="text-gray-600">
                Enjoy a hassle-free journey with our professional drivers who
                know Sri Lanka inside out. Perfect for tourists and business
                travelers seeking comfort and convenience.
              </p>
              <Button
                text="Learn More"
                onClick={() => navigate("/with-driver")}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 "
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full items-start">
              <h3 className="text-2xl font-bold text-[#5c3d2e] mb-4">
                Self Drive
              </h3>
              <p className="text-gray-600">
                Take control of your adventure with our self-drive vehicles.
                Choose from our wide range of cars, SUVs, and more for a
                personalized driving experience.
              </p>
              <Button
                text="Learn More"
                onClick={() => navigate("/self-drive")}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 "
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full items-start">
              <h3 className="text-2xl font-bold text-[#5c3d2e] mb-4">
                Corporate Rentals
              </h3>
              <p className="text-gray-600">
                Tailored solutions for businesses, including long-term rentals
                and fleet management. Reliable vehicles to keep your operations
                running smoothly.
              </p>
              <Button
                text="Contact Us"
                onClick={() => navigate("/contact")}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 "
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full items-start">
              <h3 className="text-2xl font-bold text-[#5c3d2e] mb-4">
                Event Transportation
              </h3>
              <p className="text-gray-600">
                Whether it's a wedding, conference, or special gathering, we
                offer stylish and punctual transportation solutions to ensure
                your event runs smoothly and guests arrive in comfort.
              </p>
              <Button
                text="Rent Now"
                onClick={() => navigate("/contact")}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 "
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full items-start">
              <h3 className="text-2xl font-bold text-[#5c3d2e] mb-4">
                Tour Packages
              </h3>
              <p className="text-gray-600">
                Discover Sri Lanka with our curated tour packages. From cultural
                sites to scenic beaches, we provide vehicles and guides for an
                unforgettable experience.
              </p>
              <Button
                text="Explore Tours"
                onClick={() => navigate("/special-offers")}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 "
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full items-start">
              <h3 className="text-2xl font-bold text-[#5c3d2e] mb-4">
                Special Events
              </h3>
              <p className="text-gray-600">
                Make your events memorable with our luxury vehicles for
                weddings, parties, and more. Customized transport solutions for
                your special occasions.
              </p>
              <Button
                text="Get a Quote"
                onClick={() => navigate("/contact")}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 "
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-[#5c3d2e] text-white rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Drive Lanka?
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
                <h3 className="text-xl font-bold">Quality Vehicles</h3>
                <p className="max-lg:text-sm">
                  Our fleet is regularly maintained to ensure safety and
                  comfort.
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
                <h3 className="text-xl font-bold">Flexible Options</h3>
                <p className="max-lg:text-sm">
                  Choose from self-drive or chauffeured services to suit your
                  needs.
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
                  Our team is available around the clock to assist you.
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
                <h3 className="text-xl font-bold">Competitive Pricing</h3>
                <p className="max-lg:text-sm">
                  Transparent pricing with no hidden fees for all our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Book your vehicle today and experience the freedom of the open road
            with Drive Lanka.
          </p>
          <Button
            text="Rent Now"
            onClick={() => navigate("/rent-vehicles")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 "
          />
        </section>
      </div>
    </div>
  );
};

export default Services;
