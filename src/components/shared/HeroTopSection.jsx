import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeroSUV from "../../assets/images/11452734.png";
import Button from "@/components/ui/Button";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const HeroTopSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carImageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

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
          className="px-8 py-4 bg-[#006D5B] max-md:py-6 max-md:px-14 text-[#5c3d2e] max-md:text-xl max-sm:mt-14"
          ref={buttonRef}
          onMouseEnter={(e) => handleHover(e.currentTarget)}
          onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
        />
      </div>

      {/* Car Image */}
      <div className="w-full max-xl:w-5/8 xl:w-5/8 max-md:w-7/8 max-md:hidden">
        <div className="relative w-full h-[48.5vh] flex items-center justify-center overflow-hidden">
          {carImages.map((img, idx) => (
            <img
              key={idx}
              src={HeroSUV}
              alt={`Car ${idx + 1}`}
              ref={idx === currentImageIndex ? carImageRef : null}
              className={`absolute transition-opacity duration-700 ease-in-out object-contain h-full w-auto ${
                idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTopSection;
