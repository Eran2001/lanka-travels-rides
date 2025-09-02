import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const LuxuryCollectionSection = () => {
  const navigate = useNavigate();
  const luxuryImageRef = useRef(null);
  const luxuryTextRef = useRef(null);
  const luxuryButtonRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const playAnimations = () => {
      // Animate image with a smooth slide-in and zoom
      anime({
        targets: luxuryImageRef.current,
        translateX: [-100, 0],
        scale: [1.1, 1],
        opacity: [0, 1],
        duration: 1200,
        delay: 200,
        easing: "easeOutElastic(1, 0.5)",
      });

      // Animate text elements with a staggered typewriter-like effect
      anime({
        targets: luxuryTextRef.current.children,
        translateY: [60, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, { start: 400 }),
        duration: 1000,
        easing: "easeOutElastic(1, 0.6)",
        begin: () => {
          // Split h3 text into spans for character-by-character animation
          const h3 = luxuryTextRef.current.querySelector("h3");
          if (h3) {
            h3.innerHTML = h3.textContent
              .split("")
              .map((char) => `<span>${char}</span>`)
              .join("");
            anime({
              targets: h3.querySelectorAll("span"),
              translateX: [-20, 0],
              opacity: [0, 1],
              delay: anime.stagger(50),
              duration: 600,
              easing: "easeOutCubic",
            });
          }
        },
      });

      // Animate button with a dramatic pop-in and slight rotation
      anime({
        targets: luxuryButtonRef.current,
        translateY: [50, 0],
        scale: [0.7, 1],
        rotate: [-10, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 800,
        easing: "easeOutElastic(1, 0.7)",
      });
    };

    // Intersection Observer to trigger animations when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playAnimations();
          observer.disconnect(); // Run animations only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-gradient-to-r from-[#e6f0ec] to-[#f9fdfb] py-16"
    >
      <div className="container mx-auto px-0 flex flex-col lg:flex-row gap-12 items-stretch luxury-section">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            ref={luxuryImageRef}
            src="/images/nine-arch-bridge-5657721.jpg"
            alt="Luxury Cars"
            className="h-full w-full rounded-2xl shadow-2xl border border-gray-200 object-cover"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/300x200?text=Luxury+Car";
            }}
          />
        </div>

        {/* Text Section */}
        <div
          ref={luxuryTextRef}
          className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center max-lg:items-center max-w-full"
        >
          <h2 className="text-xl md:text-3xl font-semibold text-[#00513f] mb-3 tracking-wide">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#004936] leading-tight">
            More than 40 years of experience
          </h3>
          <p className="text-gray-700 mb-8 text-base md:text-lg">
            With over 40 years of trusted experience, Lanka Travel Rides is your
            reliable partner for exploring Sri Lanka. We offer modern,
            air-conditioned vehicles with comprehensive insurance, free baby
            seats, maps, and guides — ensuring comfort and safety for every
            journey. Our 24-hour service, immediate replacement upon breakdown,
            and friendly, professional team guarantee peace of mind. Whether
            you’re discovering the island’s breathtaking landscapes or renting a
            vehicle for convenience, we provide trustworthy service at
            reasonable prices that make your travel truly unforgettable.
          </p>
          <Button
            icon="heroicons:arrow-trending-up"
            iconSize={24}
            text="PLAN YOUR TRIP"
            onClick={() => navigate("/discover-sri-lanka")}
            className="px-6 py-4 max-md:py-6 max-md:px-14 bg-[#006D5B] text-[#5c3d2e] max-md:text-xl rounded-lg shadow-lg max-w-max"
            ref={luxuryButtonRef}
          />
        </div>
      </div>
    </div>
  );
};

export default LuxuryCollectionSection;
