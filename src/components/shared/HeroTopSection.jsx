import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import { gsap } from "gsap";

const HeroTopSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carImageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const carImages = ["/images/11452734.png", "/images/11452746.png"];

  // Preload car images to improve performance
  useEffect(() => {
    carImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Cycle through car images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate text, paragraph, and button on component mount
  useEffect(() => {
    if (!gsap) {
      console.warn("GSAP not loaded, skipping animations");
      return;
    }

    if (textRef.current) {
      // Animate h1 children (split into spans for typewriter effect)
      const h1 = textRef.current.querySelector("h1");
      if (h1) {
        // Split text into spans for individual character animation
        h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>");
        const spans = h1.querySelectorAll("span");
        if (spans.length > 0) {
          gsap.fromTo(
            spans,
            { x: -20, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.05,
              ease: "power1.out", // Matches animejs easeOutCubic
            }
          );
        }

        // Animate h1 children with initial stagger effect
        gsap.fromTo(
          h1.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: { amount: 0.4, from: "start" }, // Matches anime.stagger(200, { start: 200 })
            ease: "elastic.out(1, 0.5)", // Matches animejs easeOutElastic(1, 0.5)
          }
        );
      }

      // Animate paragraph with fade-in and slide
      const paragraph = textRef.current.querySelector("p");
      if (paragraph) {
        gsap.fromTo(
          paragraph,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.6,
            ease: "sine.out", // Matches animejs easeOutSine
          }
        );
      }
    } else {
      console.warn("textRef is null, skipping text animations");
    }

    // Animate button with pop-in and rotation
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { y: 40, scale: 0.8, rotation: -5, opacity: 0 },
        {
          y: 0,
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.9,
          delay: 1,
          ease: "elastic.out(1, 0.7)", // Matches animejs easeOutElastic(1, 0.7)
        }
      );
    } else {
      console.warn("buttonRef is null, skipping button animation");
    }
  }, []);

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 min-h-[70.7vh]">
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
