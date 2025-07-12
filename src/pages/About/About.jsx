import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import OurTeam from "../Home/OurTeam";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Drive Lanka | About Us";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        {/* Introduction */}
        {/* <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h1 className="text-5xl font-bold text-[#5c3d2e] mb-4">
            About Drive Lanka
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At <span className="font-semibold">Drive Lanka</span>, we are
            dedicated to providing reliable, affordable, and high-quality
            transportation solutions across Sri Lanka. Whether you're a tourist
            exploring our vibrant island or a local seeking convenient travel,
            we have the perfect vehicle for you.
          </p>
        </section> */}

        <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            About Drive Lanka
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At <span className="font-semibold">Drive Lanka</span>, we are
            dedicated to providing reliable, affordable, and high-quality
            transportation solutions across Sri Lanka. Whether you're a tourist
            exploring our vibrant island or a local seeking convenient travel,
            we have the perfect vehicle for you.
          </p>
        </section>

        {/* Our Mission */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                Exceptional Service
              </h3>
              <p className="text-gray-600">
                We strive to deliver seamless rental experiences with
                transparent pricing and 24/7 support, ensuring every journey is
                stress-free.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                Quality Fleet
              </h3>
              <p className="text-gray-600">
                Our diverse fleet, from economy cars to luxury vans, is
                meticulously maintained to guarantee safety and comfort for all
                travelers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                Customer-Centric
              </h3>
              <p className="text-gray-600">
                We tailor our services to meet your needs, offering flexible
                plans for business, leisure, or special events across Sri Lanka.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
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
                <h3 className="text-xl font-bold">
                  Over a Decade of Experience
                </h3>
                <p className="max-lg:text-sm">
                  With more than 10 years in the industry, we understand what
                  makes a great travel experience.
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
                <h3 className="text-xl font-bold">Trusted by Thousands</h3>
                <p className="max-lg:text-sm">
                  Our customers rely on us for safe, reliable, and affordable
                  transportation solutions.
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
                <h3 className="text-xl font-bold">Nationwide Coverage</h3>
                <p className="max-lg:text-sm">
                  From urban centers to remote destinations, we serve all
                  corners of Sri Lanka.
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
                <h3 className="text-xl font-bold">Sustainable Travel</h3>
                <p className="max-lg:text-sm">
                  We prioritize eco-friendly vehicles and practices to minimize
                  our environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 text-center">
          <OurTeam />
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Join the Drive Lanka Experience
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to explore Sri Lanka with us? Contact us today to start your
            journey.
          </p>
          <Button
            text="Contact Us"
            onClick={() => navigate("/contact")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default About;
