import React, { useEffect, useRef } from "react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const Services = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const serviceRefs = useRef([]);
  const svgRefs = useRef([]);

  // Scroll-triggered animations
  useEffect(() => {
    const playAnimations = () => {
      // Section background fade-in
      if (sectionRef.current) {
        anime({
          targets: sectionRef.current,
          backgroundColor: ["rgba(249, 245, 227, 0)", "#f9f5e3"],
          duration: 1000,
          easing: "easeOutQuad",
        });
      }

      // Header animation (title and subtitle)
      if (headerRef.current) {
        anime({
          targets: headerRef.current.children,
          translateY: [60, 0],
          scale: [0.8, 1],
          opacity: [0, 1],
          delay: anime.stagger(150, { start: 200 }),
          duration: 800,
          easing: "easeOutElastic(1, 0.7)",
        });
      }

      // Service cards animation (staggered)
      if (serviceRefs.current.length > 0) {
        anime({
          targets: serviceRefs.current,
          translateY: [60, 0],
          scale: [0.85, 1],
          opacity: [0, 1],
          delay: anime.stagger(120, { start: 600 }),
          duration: 800,
          easing: "easeOutElastic(1, 0.8)",
        });
      }

      // SVG animations (staggered scale and rotate)
      if (svgRefs.current.length > 0) {
        anime({
          targets: svgRefs.current,
          scale: [0.7, 1],
          rotate: ["-10deg", "0deg"],
          opacity: [0, 1],
          delay: anime.stagger(120, { start: 800 }),
          duration: 700,
          easing: "easeOutElastic(1, 0.9)",
        });
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

  // Hover animation for service cards
  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -10],
      backgroundColor: ["#f9f5e3", "#f4d35e"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-10, 0],
      backgroundColor: ["#f4d35e", "#f9f5e3"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <section ref={sectionRef} className="py-12 bg-[#f9f5e3] sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#5c3d2e] sm:text-4xl xl:text-5xl font-pj">
            Your Gateway to Memorable Journeys in Sri Lanka
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5c3d2e] sm:mt-8 font-pj">
            Travel in comfort with modern, well-equipped vehicles and trusted
            drivers. Whether it’s a scenic island tour, an airport transfer, or
            a day of exploring, we make every ride smooth, safe, and
            unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-8 xl:mt-24">
          {/* Service 1: 24/7 Customer Support */}
          <div
            className="md:p-8 lg:p-14 max-sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            ref={(el) => (serviceRefs.current[0] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <svg
              className="mx-auto"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              ref={(el) => (svgRefs.current[0] = el)}
            >
              <path
                d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              24/7 Customer Support
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Need help anytime, anywhere? Our support team is available around
              the clock to assist you with bookings and inquiries.
            </p>
          </div>

          {/* Service 2: Affordable Pricing */}
          <div
            className="md:p-8 lg:p-14 max-sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            ref={(el) => (serviceRefs.current[1] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <svg
              className="mx-auto"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              ref={(el) => (svgRefs.current[1] = el)}
            >
              <path
                d="M27 27H19V45H27V27Z"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 37H1V45H9V37Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M45 17H37V45H45V17Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 17L15 7L23 15L37 1"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 1H37V10"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Affordable Pricing
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Enjoy fair and transparent rates while exploring Sri Lanka’s
              beauty. From short day trips to long island tours, we make
              unforgettable journeys accessible to every traveler.
            </p>
          </div>

          {/* Service 3: Wide Vehicle Selection */}
          <div
            className="md:p-8 lg:p-14 max-sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            ref={(el) => (serviceRefs.current[2] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <svg
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              ref={(el) => (svgRefs.current[2] = el)}
            >
              <path
                d="M41 1H1V41H41V1Z"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 7H7V20H18V7Z"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 26H7V35H18V26Z"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35 7H24V35H35V7Z"
                fill="#D4D4D8"
                stroke="#161616"
                strokeWidth="2"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Wide Vehicle Selection
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              From compact cars to spacious SUVs, choose the perfect vehicle
              that suits your trip and preferences.
            </p>
          </div>

          {/* Service 4: Flexible Rentals */}
          <div
            className="md:p-8 lg:p-14 max-sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            ref={(el) => (serviceRefs.current[3] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <svg
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              ref={(el) => (svgRefs.current[3] = el)}
            >
              <path d="M9 9H33" stroke="#161616" strokeWidth="2" />
              <path d="M9 17H33" stroke="#161616" strokeWidth="2" />
              <path d="M1 25H13V31H29V25H41" stroke="#161616" strokeWidth="2" />
              <path
                d="M37 1H5C2.79 1 1 2.79 1 5V37C1 39.2 2.79 41 5 41H37C39.2 41 41 39.2 41 37V5C41 2.79 39.2 1 37 1Z"
                stroke="#161616"
                strokeWidth="2"
              />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Flexible Rentals
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Daily, weekly, or monthly — rent a car for as long as you need,
              with flexible plans.
            </p>
          </div>

          {/* Service 5: Top-Notch Vehicles */}
          <div
            className="md:p-8 lg:p-14 max-sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            ref={(el) => (serviceRefs.current[4] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#161616"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              ref={(el) => (svgRefs.current[4] = el)}
            >
              <path d="M3 13l1.5-4.5h15L21 13" />
              <path d="M5 17V13h14v4" />
              <circle cx="7.5" cy="17.5" r="1.5" />
              <circle cx="16.5" cy="17.5" r="1.5" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Top-Notch Vehicles
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Enjoy well-maintained, modern cars for a smooth and safe ride
              every time.
            </p>
          </div>

          {/* Service 6: Real-Time Availability */}
          <div
            className="md:p-8 lg:p-14 max-sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            ref={(el) => (serviceRefs.current[5] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#161616"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              ref={(el) => (svgRefs.current[5] = el)}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
              <path d="M16 8l2 2l4-4" />
            </svg>
            <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">
              Real-Time Availability
            </h3>
            <p className="mt-5 text-base text-gray-600 font-pj">
              Our team ensures vehicle availability is always up to date, so you
              get the car you need when you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
