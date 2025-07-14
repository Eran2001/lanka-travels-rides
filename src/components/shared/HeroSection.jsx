import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaCar } from "react-icons/fa";
import Toyota from "../../assets/images/Toyota_Canada_Inc.-Logo.wine.svg";
import BMW from "../../assets/images/BMW-Logo.wine.svg";
import Honda from "../../assets/images/Honda-Logo.wine.svg";
import Suzuki from "../../assets/images/Suzuki-Logo.wine.svg";
import Button from "@/components/ui/Button";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const carImageRef = useRef(null);
  const rentalTimesRef = useRef(null);
  const brandsRef = useRef(null);
  const luxuryImageRef = useRef(null);
  const luxuryTextRef = useRef(null);
  const luxuryButtonRef = useRef(null);

  const carImages = [
    "https://pngimg.com/uploads/toyota/toyota_PNG1922.png",
    "https://pngimg.com/uploads/audi/audi_PNG99491.png",
  ];

  // Automatic slideshow effect with animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (carImageRef.current) {
        anime({
          targets: carImageRef.current,
          opacity: [1, 0],
          translateX: [0, 50],
          duration: 500,
          easing: "easeOutQuad",
          complete: () => {
            setCurrentImageIndex((prevIndex) =>
              prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
            );
            anime({
              targets: carImageRef.current,
              opacity: [0, 1],
              translateX: [-50, 0],
              duration: 500,
              easing: "easeOutQuad",
            });
          },
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [carImages.length]);

  // Initial animations
  useEffect(() => {
    // Text content animation (bounce-in)
    if (textRef.current) {
      anime({
        targets: textRef.current.children,
        translateY: [50, 0],
        scale: [0.85, 1],
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 200 }),
        duration: 800,
        easing: "easeOutElastic(1, 0.8)",
      });
    }

    // Button animation
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        translateY: [30, 0],
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 700,
        easing: "easeOutElastic(1, 0.9)",
        delay: 600,
      });
    }

    // Rental times bar animation (staggered)
    if (rentalTimesRef.current) {
      anime({
        targets: rentalTimesRef.current.children,
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 800 }),
        duration: 600,
        easing: "easeOutQuad",
      });
    }

    // Brand logos animation (staggered)
    if (brandsRef.current) {
      anime({
        targets: brandsRef.current.children,
        scale: [0.8, 1],
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 1000 }),
        duration: 700,
        easing: "easeOutElastic(1, 0.8)",
      });
    }

    // Luxury collection section animation
    const luxuryTargets = [
      luxuryImageRef.current,
      ...(luxuryTextRef.current
        ? Array.from(luxuryTextRef.current.children)
        : []),
      luxuryButtonRef.current,
    ].filter(Boolean); // Remove null/undefined refs
    if (luxuryTargets.length > 0) {
      anime({
        targets: luxuryTargets,
        translateY: [50, 0],
        scale: [0.9, 1],
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 1200 }),
        duration: 800,
        easing: "easeOutElastic(1, 0.8)",
      });
    }
  }, []);

  // Hover animation for buttons and brand logos
  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.1],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.1, 1],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <div className="relative h-[200vh] w-full">
      {/* Main Hero Section - First Part */}
      <div className="h-[100vh] relative bg-[#f9f5e3]">
        <div className="container mx-auto px-4 h-full">
          <div className="h-full flex max-md:flex-col items-center justify-between relative">
            {/* Text Content - Left Side */}
            <div
              ref={textRef}
              className="max-w-2xl max-xl:max-w-110 z-10 max-md:relative max-md:top-36 max-md:text-center"
            >
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
                ref={buttonRef}
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
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
                ref={carImageRef}
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
            <div
              ref={rentalTimesRef}
              className="bg-white max-md:hidden shadow-lg rounded-t-lg grid grid-cols-2 lg:grid-cols-6 gap-4 p-6 text-center text-[#5c3d2e] font-medium text-md"
            >
              <div className="max-lg:mb-2">24/7 Support</div>
              <div className="max-lg:mb-2">Well-Maintained Vehicles</div>
              <div className="max-sm:hidden sm:block max-lg:mb-2">
                Affordable Pricing
              </div>
              <div className="max-lg:mb-2 max-sm:col-span-2 sm:col-span-1">
                Immediate replacement
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
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-xl text-[#5c3d2e] mb-16">
            Featuring Top Global Car Brands Known for Safety and Reliability
          </h3>
          <div
            ref={brandsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60"
          >
            <img
              src={Toyota}
              alt="Toyota"
              className="h-24"
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            />
            <img
              src={BMW}
              alt="BMW"
              className="h-24"
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            />
            <img
              src={Honda}
              alt="Honda"
              className="h-24"
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            />
            <img
              src={Suzuki}
              alt="Suzuki"
              className="h-24"
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
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
              ref={luxuryImageRef}
              src="https://media.istockphoto.com/id/1285180944/photo/cars-on-a-parking.jpg?s=612x612&w=0&k=20&c=nVMwAXJHf6cwKdB-Wf-xedj3CuVpLA6fOBPhE2LVUzk="
              alt="Car Collection"
              className="max-w-full h-[400px] rounded-lg shadow-lg"
            />
          </div>

          {/* Right: Text + Button */}
          <div ref={luxuryTextRef} className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-bold mb-6 max-lg:mb-2 max-lg:text-[30px]">
              More than 40 years of experience
            </h3>
            <p className="text-gray-600 mb-8 max-lg:mb-2">
              24 hours of service, Comprehensive insurance, Immediate
              replacement upon breakdown, New modern types of vehicles with Ac,
              Reliable, Trustworthy and friendly service provide by us, free
              baby seats, Maps, guide, more than 40 years of experience,
              Reasonable prices.
            </p>
            <Button
              text="Rent a Vehicle"
              onClick={() => navigate("/rent-vehicles")}
              className="px-8 py-4 max-sm:px-6 max-sm:py-2 bg-[#006D5B]"
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
