import React, { useRef, useEffect } from "react";
import Toyota from "../../assets/images/Toyota_Canada_Inc.-Logo.wine.svg";
import BMW from "../../assets/images/BMW-Logo.wine.svg";
import Honda from "../../assets/images/Honda-Logo.wine.svg";
import Suzuki from "../../assets/images/Suzuki-Logo.wine.svg";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const BrandsSection = () => {
  const brandsRef = useRef(null);
  const headerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const playAnimations = () => {
      // Animate header with a slide-in and fade effect
      anime({
        targets: headerRef.current,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutElastic(1, 0.5)",
        delay: 200,
      });

      // Animate the underline bar with a stretch effect
      anime({
        targets: headerRef.current.querySelector("span"),
        scaleX: [0, 1],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutCubic",
        delay: 400,
      });

      // Animate brand logos with a sequential flip and bounce
      anime({
        targets: brandsRef.current.children,
        translateY: [80, 0],
        rotateX: [90, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: anime.stagger(200, { start: 600 }),
        duration: 1200,
        easing: "easeOutElastic(1, 0.6)",
      });

      // Animate logo images with a subtle spin and pop
      anime({
        targets: brandsRef.current.querySelectorAll("img"),
        scale: [0, 1.1, 1],
        rotate: [360, 0],
        opacity: [0, 1],
        delay: anime.stagger(200, { start: 800 }),
        duration: 1000,
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

  const logos = [Toyota, BMW, Honda, Suzuki];

  return (
    <div ref={sectionRef} className="bg-[#f0f7f4] py-20 md:py-14">
      <div className="container mx-auto px-4">
        <h3
          ref={headerRef}
          className="text-center text-2xl md:text-3xl font-bold text-[#00513f] mb-12 uppercase tracking-wider relative"
        >
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
              className="p-4 bg-white rounded-2xl shadow-lg transform transition-transform duration-300"
            >
              <img
                src={logo}
                alt={`Brand ${idx}`}
                className="h-20 w-auto object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/150x50?text=Brand+Logo";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
