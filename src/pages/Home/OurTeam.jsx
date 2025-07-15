import React, { useEffect, useRef } from "react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const OurTeam = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const dividerRef = useRef(null);

  // Scroll-triggered animations
  useEffect(() => {
    const section = sectionRef.current;

    const playAnimations = () => {
      // Section background fade-in
      if (sectionRef.current) {
        anime({
          targets: sectionRef.current,
          backgroundColor: ["rgba(255, 255, 255, 0)", "#ffffff"],
          duration: 1000,
          easing: "easeOutQuad",
        });
      }

      // Header animation
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

      // Team cards animation (staggered)
      if (cardRefs.current.length > 0) {
        anime({
          targets: cardRefs.current,
          translateY: [60, 0],
          scale: [0.85, 1],
          opacity: [0, 1],
          delay: anime.stagger(120, { start: 600 }),
          duration: 800,
          easing: "easeOutElastic(1, 0.8)",
        });
      }

      // Divider animation
      if (dividerRef.current) {
        anime({
          targets: dividerRef.current.children,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(50, { start: 1000 }),
          duration: 600,
          easing: "easeOutQuad",
        });
      }
    };

    // Intersection Observer to trigger animations when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playAnimations();
          observer.disconnect(); // Run animations only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Hover animation for team cards
  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -10],
      backgroundColor: ["#ffffff", "#f4d35e"],
      duration: 300,
      easing: "easeOutQuad",
    });
    // Remove grayscale on hover
    anime({
      targets: el.querySelector("img"),
      filter: ["grayscale(100%)", "grayscale(0%)"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-10, 0],
      backgroundColor: ["#f4d35e", "#ffffff"],
      duration: 300,
      easing: "easeOutQuad",
    });
    // Restore grayscale on hover leave
    anime({
      targets: el.querySelector("img"),
      filter: ["grayscale(0%)", "grayscale(100%)"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 bg-white w-full sm:py-16 lg:py-20"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center">
          <h2 className="text-3xl font-bold text-[#5c3d2e] sm:text-4xl xl:text-5xl font-pj">
            Meet Our Car Rental Experts
          </h2>
        </div>

        <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-4 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-10">
          {/* Member 1 */}
          <div
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            ref={(el) => (cardRefs.current[0] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png"
              alt="Team member"
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              M.M Larif
            </p>
            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
              Image proprietor
            </p>
          </div>

          {/* Member 2 */}
          <div
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            ref={(el) => (cardRefs.current[1] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png"
              alt="Team member"
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              Nafla Larif
            </p>
            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
              Account Section
            </p>
          </div>

          {/* Member 3 */}
          <div
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            ref={(el) => (cardRefs.current[2] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png"
              alt="Team member"
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              Lafri Larif
            </p>
            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
              Rental money exchange
            </p>
          </div>

          {/* Member 4 */}
          <div
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            ref={(el) => (cardRefs.current[3] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png"
              alt="Team member"
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              Luraif Larif
            </p>
            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
              Hiring & Tourism
            </p>
          </div>
        </div>

        <div ref={dividerRef} className="mt-12 sm:mt-16">
          <svg
            className="w-auto h-4 mx-auto text-gray-300"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${
                  7 * i + 4
                } 1)`}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
