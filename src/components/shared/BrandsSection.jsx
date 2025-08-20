import React, { useRef, useEffect } from "react";
import Button from "@/components/ui/Button";
import { gsap } from "gsap";

const BrandsSection = () => {
  const brandsRef = useRef(null);
  const headerRef = useRef(null);
  const sectionRef = useRef(null);

  const logos = [
    "/images/Toyota_Canada_Inc.-Logo.wine.svg",
    "/images/BMW-Logo.wine.svg",
    "/images/Honda-Logo.wine.svg",
    "/images/Suzuki-Logo.wine.svg",
  ];

  useEffect(() => {
    if (!gsap) {
      console.warn("GSAP not loaded, skipping animations");
      return;
    }

    const playAnimations = () => {
      if (headerRef.current) {
        // Animate header with a slide-in and fade effect
        gsap.fromTo(
          headerRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2,
            ease: "elastic.out(1, 0.5)", // Matches easeOutElastic(1, 0.5)
          }
        );

        // Animate the underline bar with a stretch effect
        const underline = headerRef.current.querySelector("span");
        if (underline) {
          gsap.fromTo(
            underline,
            { scaleX: 0, opacity: 0 },
            {
              scaleX: 1,
              opacity: 1,
              duration: 0.8,
              delay: 0.4,
              ease: "power1.out", // Matches easeOutCubic
            }
          );
        } else {
          console.warn(
            "Underline span not found, skipping underline animation"
          );
        }
      } else {
        console.warn("headerRef is null, skipping header animations");
      }

      if (brandsRef.current) {
        // Animate brand logos with a sequential flip and bounce
        gsap.fromTo(
          brandsRef.current.children,
          { y: 80, rotateX: 90, opacity: 0, scale: 0.8 },
          {
            y: 0,
            rotateX: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            stagger: { amount: 0.8, from: "start" }, // Matches anime.stagger(200, { start: 600 })
            delay: 0.6,
            ease: "elastic.out(1, 0.6)", // Matches easeOutElastic(1, 0.6)
          }
        );

        // Animate logo images with a subtle spin and pop
        const logoImages = brandsRef.current.querySelectorAll("img");
        if (logoImages.length > 0) {
          gsap.fromTo(
            logoImages,
            { scale: 0, rotation: 360, opacity: 0 },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 1,
              stagger: { amount: 0.8, from: "start" }, // Matches anime.stagger(200, { start: 800 })
              delay: 0.8,
              ease: "elastic.out(1, 0.7)", // Matches easeOutElastic(1, 0.7)
            }
          );
        } else {
          console.warn("No logo images found, skipping logo animations");
        }
      } else {
        console.warn("brandsRef is null, skipping brand animations");
      }
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
                alt={`Brand ${idx + 1}`}
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
