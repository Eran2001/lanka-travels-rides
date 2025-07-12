import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";

import Button from "@/components/ui/Button";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carImages = [
    "https://pngimg.com/uploads/toyota/toyota_PNG1922.png",
    "https://pngimg.com/uploads/audi/audi_PNG99491.png",
  ];

  // Automatic slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carImages.length]);

  return (
    <div className="relative h-[200vh] w-full">
      {/* Main Hero Section - First Part */}
      <div className="h-[100vh] relative bg-[#f9f5e3]">
        <div className="container mx-auto px-4 h-full">
          <div className="h-full flex max-md:flex-col items-center justify-between relative">
            {/* Text Content - Left Side */}
            <div className="max-w-2xl max-xl:max-w-110 z-10 max-md:relative max-md:top-36 max-md:text-center">
              <h1 className="2xl:text-6xl max-2xl:text-5xl max-xl:text-4xl max-lg:text-2xl max-md:text-5xl text-[#5c3d2e] font-bold mb-6 leading-tight">
                EXCLUSIVE CARS
                <br />
                RENTAL IN SRI LANKA
              </h1>
              <p className="text-[#5c3d2e] mb-8 max-w-xl max-xl:text-sm max-xl:max-w-80 max-md:text-xl max-md:w-full max-md:mx-auto">
                Choose from a wide range of high-quality, well-maintained
                vehicles ready for rent. Whether you need a car for business,
                travel, or a special occasion — we've got the perfect ride for
                you.
              </p>
              <Button
                text="Rent Now"
                onClick={() => navigate("/rent-vehicles")}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 bg-[#006D5B]"
              />
            </div>

            {/* Car Image - Right Side */}
            <div
              className="
                h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[500px] overflow-hidden 
                w-1/2 absolute right-0 top-1/2 -translate-y-1/2
                max-md:static max-md:w-full max-md:translate-y-0 max-md:justify-center max-md:items-center max-md:hidden
              "
            >
              <img
                src={carImages[currentImageIndex]}
                alt={`Car ${currentImageIndex + 1}`}
                className="
                  w-full h-full object-cover 
                  max-md:w-[250px] max-md:h-auto max-md:object-contain
                "
                style={{ clipPath: "inset(0 0 5% 0)" }}
              />
            </div>
          </div>
        </div>

        {/* Diagonal Green Shape */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          <div
            className="absolute bottom-0 left-0 w-full h-full bg-[#006D5B]"
            style={{
              clipPath: "polygon(0 100%, 100% 100%, 0 0)",
            }}
          />
        </div>

        {/* Rental Times Bar */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="container mx-auto px-4 max-lg:px-2">
            <div className="bg-white max-md:hidden shadow-lg rounded-t-lg grid grid-cols-2 lg:grid-cols-6 gap-4 p-6 text-center text-[#5c3d2e] font-medium text-md">
              {/* Feature Items */}
              <div className="max-lg:mb-2">24/7 Support</div>
              <div className="max-lg:mb-2">Well-Maintained Vehicles</div>
              <div className="max-sm:hidden sm:block max-lg:mb-2">
                Affordable Pricing
              </div>
              <div className="max-lg:mb-2 max-sm:col-span-2 sm:col-span-1">
                Easy Online Booking
              </div>
              <div className="max-lg:mb-2 max-sm:col-span-2 sm:col-span-1">
                Comprehensive Insurance
              </div>
              <div className="max-lg:mb-2 max-sm:col-span-2 sm:col-span-1">
                Trusted Car Brands
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Brands Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-xl text-[#5c3d2e] mb-16">
            Featuring Top Global Car Brands Known for Safety and Reliability
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-7 max-md:gap-16 gap-8 items-center justify-items-center opacity-60">
            <img
              src="https://p1.hiclipart.com/preview/74/87/742/luxury-mercedesbenz-car-mercedesstern-mercedesbenz-sprinter-logo-mercedesbenz-sclass-vehicle-png-clipart.jpg"
              alt="Toyota"
              className="h-15"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
              alt="BMW"
              className="h-15"
            />
            <img
              src="https://1000logos.net/wp-content/uploads/2021/03/Bentley-logo.png"
              alt="Mercedes-Benz"
              className="h-15"
            />
            <img
              src="https://images.seeklogo.com/logo-png/19/2/mercedes-benz-logo-png_seeklogo-190348.png"
              alt="Audi"
              className="h-15"
            />
            <img
              src="https://fabrikbrands.com/wp-content/uploads/Famous-luxury-car-logos-17-1200x750.png"
              alt="Honda"
              className="h-15"
            />
            <img
              src="https://icon2.cleanpng.com/lnd/20241121/bj/96a913c68a8055c91e7626887336cc.webp"
              alt="Ford"
              className="h-15"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3_4xRHQcnM4mRQ5Pj1GCnDBt3OcFGd7yu5A&s"
              alt="Nissan"
              className="h-15"
            />
          </div>
        </div>
      </div>

      {/* Luxury Collection Section */}
      <div className="bg-white py-28">
        <div className="container mx-auto px-4 flex max-md:flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Car image */}
          <div className="md:w-1/2 flex justify-start">
            <img
              src="https://media.istockphoto.com/id/1285180944/photo/cars-on-a-parking.jpg?s=612x612&w=0&k=20&c=nVMwAXJHf6cwKdB-Wf-xedj3CuVpLA6fOBPhE2LVUzk="
              alt="Car Collection"
              className="max-w-full h-[400px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text + Button */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-bold mb-6 max-lg:mb-2 max-lg:text-[30px]">
              More than 105+ luxury collection cars
            </h3>
            <p className="text-gray-600 mb-8 max-lg:mb-2">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a gallery of
              type and scrambled it to make a type specimen book.
            </p>
            <Button
              text="Rent a Vehicle"
              onClick={() => navigate("/rent-vehicles")}
              className="px-8 py-4 max-sm:px-6 max-sm:py-2 bg-[#006D5B]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
