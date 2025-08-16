import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import why_choose_us from "../../assets/images/why_choose_us.jpg";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const LuxuryCollectionSection = () => {
  const navigate = useNavigate();
  const luxuryImageRef = useRef(null);
  const luxuryTextRef = useRef(null);
  const luxuryButtonRef = useRef(null);

  useEffect(() => {
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
      delay: anime.stagger(120),
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
    <div className="bg-gradient-to-r from-[#e6f0ec] to-[#f9fdfb] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-stretch luxury-section">
        <div className="w-full md:w-1/2 flex justify-center md:justify-center">
          <img
            ref={luxuryImageRef}
            src={why_choose_us}
            alt="Luxury Cars"
            className="h-full max-w-lg w-full rounded-2xl shadow-2xl border border-gray-200 object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-3xl cursor-pointer"
          />
        </div>
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
            24 hours of service, Comprehensive insurance, Immediate replacement
            upon breakdown, New modern types of vehicles with AC, Reliable,
            Trustworthy and friendly service provided by us, free baby seats,
            Maps, guide, more than 40 years of experience, Reasonable prices.
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
  );
};

export default LuxuryCollectionSection;
