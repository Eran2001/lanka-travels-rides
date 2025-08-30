import React, { useEffect, useRef } from "react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const OurProgress = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const numberRefs = useRef([]);

  // Animations triggered on scroll
  useEffect(() => {
    const section = sectionRef.current;

    const playAnimations = () => {
      // Section background fade-in
      if (sectionRef.current) {
        anime({
          targets: sectionRef.current,
          backgroundColor: ["rgba(243, 244, 246, 0)", "#f3f4f6"],
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

      // Progress cards animation (staggered)
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

      // Number counting animation
      if (numberRefs.current.length > 0) {
        numberRefs.current.forEach((el, index) => {
          const targetNumber = index === 0 ? 40 : index === 1 ? 1000 : 20;
          anime({
            targets: el,
            innerHTML: [0, targetNumber],
            round: 1,
            delay: 800 + index * 120,
            duration: 1000,
            easing: "easeOutQuad",
            update: (anim) => {
              el.innerHTML =
                Math.round(anim.animations[0].currentValue) +
                (index === 0 || index === 2 ? "+" : "+");
            },
          });
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

  // Hover animation for progress cards
  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -10],
      backgroundColor: ["#f3f4f6", "#f4d35e"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-10, 0],
      backgroundColor: ["#f4d35e", "#f3f4f6"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 w-full bg-gray-100 sm:py-16 lg:py-24"
    >
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#5c3d2e] sm:text-4xl lg:text-5xl">
            Numbers tell our story
          </h2>
          <p className="mt-3 text-xl leading-relaxed text-[#5c3d2e] md:mt-8">
            Trusted by thousands of customers across the island. See how we’ve
            grown as a reliable car rental partner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
          {/* Card 1: Years in Service */}
          <div
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            ref={(el) => (cardRefs.current[0] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <h3 className="font-bold text-7xl">
              <span
                ref={(el) => (numberRefs.current[0] = el)}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#006D5B] to-[#6ca0dc]"
              >
                40+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Years in Service
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              Providing quality rentals
            </p>
          </div>

          {/* Card 2: Happy Rentals */}
          <div
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            ref={(el) => (cardRefs.current[1] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <h3 className="font-bold text-7xl">
              <span
                ref={(el) => (numberRefs.current[1] = el)}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#006D5B] to-[#6ca0dc]"
              >
                1000+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Happy Tours
            </p>
            <p className="text-base mt-0.5 text-gray-500">Across the island</p>
          </div>

          {/* Card 3: Vehicles Available */}
          <div
            className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
            ref={(el) => (cardRefs.current[2] = el)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <h3 className="font-bold text-7xl">
              <span
                ref={(el) => (numberRefs.current[2] = el)}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#006D5B] to-[#6ca0dc]"
              >
                20+
              </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Vehicles Available
            </p>
            <p className="text-base mt-0.5 text-gray-500">
              From economy to luxury
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProgress;
