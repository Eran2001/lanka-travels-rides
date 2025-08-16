import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeroSUV from "../../assets/images/11452734.png";
import whiteSUV from "../../assets/images/11452746.png";
import Button from "@/components/ui/Button";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const HeroTopSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carImageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const carImages = [HeroSUV, whiteSUV];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate text elements with a dynamic typewriter-like effect
    anime({
      targets: textRef.current.querySelector("h1").children,
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 200 }),
      duration: 800,
      easing: "easeOutElastic(1, 0.5)",
      begin: () => {
        // Split text into spans for individual character animation
        const h1 = textRef.current.querySelector("h1");
        h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>");
        anime({
          targets: h1.querySelectorAll("span"),
          translateX: [-20, 0],
          opacity: [0, 1],
          delay: anime.stagger(50),
          duration: 600,
          easing: "easeOutCubic",
        });
      },
    });

    // Animate paragraph with a fade-in and slight slide
    anime({
      targets: textRef.current.querySelector("p"),
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 600,
      easing: "easeOutSine",
    });

    // Animate button with a pop-in and subtle rotation
    anime({
      targets: buttonRef.current,
      translateY: [40, 0],
      scale: [0.8, 1],
      rotate: [-5, 0],
      opacity: [0, 1],
      duration: 900,
      delay: 1000,
      easing: "easeOutElastic(1, 0.7)",
    });
  }, []);

  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[70.7vh]">
      {/* Text */}
      <div
        ref={textRef}
        className="w-full max-xl:w-3/4 xl:w-3/8 max-md:w-7/8 text-center md:text-left"
      >
        <h1 className="max-xl:text-5xl xl:text-6xl max-lg:text-6xl max-md:text-6xl text-[#5c3d2e] font-bold mb-6 leading-tight">
          EXCLUSIVE CARS <br />
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
          className="px-8 py-4 bg-[#006D5B] max-md:py-6 max-md:px-14 text-[#5c3d2e] max-md:text-xl max-sm:mt-8 cursor-pointer"
          ref={buttonRef}
        />
      </div>

      {/* Car Image */}
      <div className="w-full max-xl:w-5/8 xl:w-5/8 max-md:w-7/8 max-lg:hidden">
        <div className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden">
          {carImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Car ${idx + 1}`}
              ref={idx === currentImageIndex ? carImageRef : null}
              className={`absolute transition-opacity duration-700 ease-in-out object-contain max-h-full max-w-full ${
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
