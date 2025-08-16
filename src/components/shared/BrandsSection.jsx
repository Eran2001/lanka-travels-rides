import React, { useRef, useEffect } from "react";
import Toyota from "../../assets/images/Toyota_Canada_Inc.-Logo.wine.svg";
import BMW from "../../assets/images/BMW-Logo.wine.svg";
import Honda from "../../assets/images/Honda-Logo.wine.svg";
import Suzuki from "../../assets/images/Suzuki-Logo.wine.svg";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const BrandsSection = () => {
  const brandsRef = useRef(null);

  useEffect(() => {
    anime({
      targets: brandsRef.current.children,
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 600,
      easing: "easeOutBack(1, 1.2)",
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

  const logos = [Toyota, BMW, Honda, Suzuki];

  return (
    <div className="bg-[#f0f7f4] py-20 md:py-14">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-2xl md:text-3xl font-bold text-[#00513f] mb-12 uppercase tracking-wider relative">
          Featuring Top Global Car Brands Known for Safety and Reliability
          <span
            className="block w-24 h-1 bg-[#006D5B] mx-auto mt-3 rounded-full"
            aria-hidden="true"
          ></span>
        </h3>
        <div
          ref={brandsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 justify-items-center items-center opacity-95"
        >
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            >
              <img
                src={logo}
                alt={`Brand ${idx}`}
                className="h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
