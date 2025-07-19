import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import why_choose_us from "../../assets/images/why_choose_us.jpg";
import Toyota from "../../assets/images/Toyota_Canada_Inc.-Logo.wine.svg";
import BMW from "../../assets/images/BMW-Logo.wine.svg";
import Honda from "../../assets/images/Honda-Logo.wine.svg";
import Suzuki from "../../assets/images/Suzuki-Logo.wine.svg";
import Button from "@/components/ui/Button";

import { MdSupportAgent, MdCarRepair, MdAttachMoney } from "react-icons/md";
import { FaExchangeAlt, FaShieldAlt, FaCarSide } from "react-icons/fa";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carImageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const rentalTimesRef = useRef(null);
  const brandsRef = useRef(null);
  const luxuryImageRef = useRef(null);
  const luxuryTextRef = useRef(null);
  const luxuryButtonRef = useRef(null);

  const carImages = [
    "https://pngimg.com/uploads/toyota/toyota_PNG1922.png",
    "https://pngimg.com/uploads/audi/audi_PNG99491.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    anime({
      targets: textRef.current.children,
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 600,
      easing: "easeOutCubic",
    });

    anime({
      targets: buttonRef.current,
      translateY: [20, 0],
      opacity: [0, 1],
      delay: 600,
      duration: 500,
      easing: "easeOutCubic",
    });

    anime({
      targets: rentalTimesRef.current.children,
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 800 }),
      duration: 500,
      easing: "easeOutCubic",
    });

    anime({
      targets: brandsRef.current.children,
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 1000 }),
      duration: 600,
      easing: "easeOutBack(1, 1.2)",
    });

    const luxuryTargets = [
      luxuryImageRef.current,
      ...(luxuryTextRef.current
        ? Array.from(luxuryTextRef.current.children)
        : []),
      luxuryButtonRef.current,
    ].filter(Boolean);
    anime({
      targets: luxuryTargets,
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(120, { start: 1200 }),
      duration: 600,
      easing: "easeOutCubic",
    });
  }, []);

  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      duration: 200,
      easing: "easeOutQuad",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      duration: 200,
      easing: "easeOutQuad",
    });
  };

  return (
    <div className="w-full xl:pt-30 max-xl:pt-14 max-md:pt-36 max-sm:pt-48 max-sm:pb-6 bg-[#f9f5e3] ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[70.7vh]">
        {/* Text */}
        <div
          ref={textRef}
          className="w-full max-xl:w-3/4 xl:w-3/8 max-md:w-7/8 text-center md:text-left"
        >
          <h1 className="max-xl:text-5xl xl:text-6xl max-lg:text-3xl max-md:text-6xl text-[#5c3d2e] font-bold mb-6 leading-tight">
            EXCLUSIVE CARS
            <br />
            RENTAL IN SRI LANKA
          </h1>
          <p className="text-[#5c3d2e] mb-8 text-base md:text-md xl:text-lg max-w-lg mx-auto md:mx-0">
            Choose from a wide range of high-quality, well-maintained vehicles
            ready for rent. Whether you need a car for business, travel, or a
            special occasion — we've got the perfect ride for you.
          </p>
          <Button
            text="Rent Now"
            onClick={() => navigate("/rent-vehicles")}
            className="px-8 py-4 bg-[#006D5B] max-md:py-6 max-md:px-14 text-[#5c3d2e] max-md:text-xl max-sm:mt-6"
            ref={buttonRef}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          />
        </div>

        {/* Car Image with Fade Transition */}
        <div className="w-full max-xl:w-5/8 xl:w-5/8 max-md:w-7/8 max-md:hidden">
          <div className="relative w-full h-[48.5vh] flex items-center justify-center overflow-hidden">
            {carImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Car ${idx + 1}`}
                ref={idx === currentImageIndex ? carImageRef : null}
                className={`absolute transition-opacity duration-700 ease-in-out object-contain h-full w-auto ${
                  idx === currentImageIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Rental Times Bar */}
      <div className="bg-[#006D5B] py-8 xl:mt-[-1px] max-sm:mt-14">
        <div className="container mx-auto px-4">
          <div
            ref={rentalTimesRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white text-center"
          >
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
              <MdSupportAgent size={28} className="text-white" />
              <span className="text-sm font-semibold">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
              <MdCarRepair size={28} className="text-white" />
              <span className="text-sm font-semibold">
                Well-Maintained Vehicles
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
              <MdAttachMoney size={28} className="text-white" />
              <span className="text-sm font-semibold">Affordable Pricing</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
              <FaExchangeAlt size={24} className="text-white" />
              <span className="text-sm font-semibold">
                Immediate Replacement
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
              <FaShieldAlt size={24} className="text-white" />
              <span className="text-sm font-semibold">
                Comprehensive Insurance
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md hover:bg-white/20 transition">
              <FaCarSide size={24} className="text-white" />
              <span className="text-sm font-semibold">Trusted Car Brands</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brands */}
      <div className="bg-[#f0f7f4] py-16">
        {" "}
        {/* soft light green background */}
        <div className="container mx-auto px-4">
          <h3 className="text-center text-xl md:text-2xl font-semibold text-[#00513f] mb-10 uppercase tracking-wider relative">
            Featuring Top Global Car Brands Known for Safety and Reliability
            <span
              className="block w-20 h-1 bg-[#006D5B] mx-auto mt-2 rounded-full"
              aria-hidden="true"
            ></span>
          </h3>

          <div
            ref={brandsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center items-center opacity-90"
          >
            {[Toyota, BMW, Honda, Suzuki].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Brand ${index}`}
                className="h-20 w-auto p-3 bg-white rounded-xl shadow-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Luxury Collection */}
      <div className="bg-gradient-to-r from-[#e6f0ec] to-[#f9fdfb] py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-stretch luxury-section">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-center">
            <img
              ref={luxuryImageRef}
              src={why_choose_us}
              alt="Luxury Cars"
              className="h-full max-w-lg w-full rounded-2xl shadow-2xl border border-gray-200 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl cursor-pointer"
            />
          </div>

          {/* Text Content */}
          <div
            ref={luxuryTextRef}
            className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center max-md:items-center max-w-xl"
          >
            <h2 className="text-xl md:text-3xl font-semibold text-[#00513f] mb-3 tracking-wide">
              Why Choose Us
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#004936] leading-tight">
              More than 40 years of experience
            </h3>
            <p className="text-gray-700 mb-8 text-base md:text-lg">
              24 hours of service, Comprehensive insurance, Immediate
              replacement upon breakdown, New modern types of vehicles with AC,
              Reliable, Trustworthy and friendly service provided by us, free
              baby seats, Maps, guide, more than 40 years of experience,
              Reasonable prices.
            </p>
            <Button
              text="Rent a Vehicle"
              onClick={() => navigate("/rent-vehicles")}
              className="px-6 py-4 max-md:py-6 max-md:px-14 bg-[#006D5B] text-[#5c3d2e] max-md:text-xl rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl max-w-max"
              ref={luxuryButtonRef}
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
