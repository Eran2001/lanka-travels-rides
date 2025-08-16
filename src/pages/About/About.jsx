import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import OurTeam from "../Home/OurTeam";

const About = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Refs for sections & items
  const introRef = useRef(null);
  const missionSectionRef = useRef(null);
  const benefitsSectionRef = useRef(null);
  const teamSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);

  const missionCardRefs = useRef([]);
  const benefitsItemRefs = useRef([]);

  useEffect(() => {
    document.title = "Lanka Travels Rides | About Us";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Animate mission cards on load
    anime({
      targets: missionCardRefs.current,
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      delay: anime.stagger(150, { start: 200 }),
      duration: 900,
      easing: "easeOutBounce",
    });

    // Animate benefits items on load
    anime({
      targets: benefitsItemRefs.current,
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      delay: anime.stagger(150, { start: 300 }),
      duration: 900,
      easing: "easeOutBounce",
    });

    // Animate Call to Action button fade + pop in
    const ctaBtn = ctaSectionRef.current?.querySelector("button");
    if (ctaBtn) {
      anime({
        targets: ctaBtn,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutElastic(1, .7)",
        delay: 600,
      });
    }
  }, [isLoading]);

  // Scroll-triggered animations
  useEffect(() => {
    const sections = [
      { ref: introRef, bg: "#f4d35e" },
      { ref: missionSectionRef, bg: "#f3f4f6" },
      { ref: benefitsSectionRef, bg: "#5c3d2e" },
      { ref: teamSectionRef, bg: "#f3f4f6" },
      { ref: ctaSectionRef, bg: "#f3f4f6" },
    ];

    const playAnimations = (sectionRef, bg) => {
      if (!sectionRef.current) return;

      // Background fade-in
      anime({
        targets: sectionRef.current,
        backgroundColor: [
          `rgba(${
            bg === "#f4d35e"
              ? "244,211,94"
              : bg === "#5c3d2e"
              ? "92,61,46"
              : "243,244,246"
          }, 0)`,
          bg,
        ],
        duration: 1000,
        easing: "easeOutQuad",
      });

      // Animate header and paragraph
      const header = sectionRef.current.querySelector("h2, h3");
      const paragraph = sectionRef.current.querySelector("p");
      if (header || paragraph) {
        anime({
          targets: [header, paragraph].filter(Boolean),
          translateY: [80, 0],
          scale: [0.8, 1],
          opacity: [0, 1],
          delay: anime.stagger(150, { start: 200 }),
          duration: 900,
          easing: "easeOutElastic(1, 0.6)",
        });
      }

      // Button animation
      const button = sectionRef.current.querySelector("button");
      if (button) {
        anime({
          targets: button,
          translateY: [50, 0],
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 700,
          easing: "easeOutElastic(1, 0.8)",
          delay: 500,
        });
      }

      // Cards/items animation
      const cards =
        sectionRef === missionSectionRef
          ? missionCardRefs.current
          : sectionRef === benefitsSectionRef
          ? benefitsItemRefs.current
          : [];
      if (cards && cards.length > 0) {
        anime({
          targets: cards,
          translateY: [100, 0],
          scale: [0.85, 1],
          opacity: [0, 1],
          delay: anime.stagger(120, { start: 600 }),
          duration: 900,
          easing: "easeOutElastic(1, 0.6)",
        });
      }

      // Icons in benefits section
      if (sectionRef === benefitsSectionRef) {
        const icons = sectionRef.current.querySelectorAll("svg");
        if (icons.length > 0) {
          anime({
            targets: icons,
            scale: [0, 1],
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 800 }),
            duration: 600,
            easing: "easeOutElastic(1, 0.8)",
          });
        }
      }

      // Team section animation
      if (sectionRef === teamSectionRef) {
        const teamMembers = sectionRef.current.querySelectorAll(".team-member");
        if (teamMembers.length > 0) {
          anime({
            targets: teamMembers,
            translateY: [100, 0],
            scale: [0.85, 1],
            opacity: [0, 1],
            delay: anime.stagger(120, { start: 600 }),
            duration: 900,
            easing: "easeOutElastic(1, 0.6)",
          });
        }
      }
    };

    const observers = sections.map(({ ref, bg }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            playAnimations(ref, bg);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) observer.observe(ref.current);

      return { observer, ref };
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [isLoading]);

  // Hover animations for mission cards
  const handleCardHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.07],
      translateY: [0, -15],
      boxShadow: [
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        "0 25px 40px -5px rgba(0,0,0,0.3), 0 12px 15px -3px rgba(0,0,0,0.2)",
      ],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };
  const handleCardHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.07, 1],
      translateY: [-15, 0],
      boxShadow: [
        "0 25px 40px -5px rgba(0,0,0,0.3), 0 12px 15px -3px rgba(0,0,0,0.2)",
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      ],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  // Hover animations for benefits items & icons
  const handleItemHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -12],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };
  const handleItemHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-12, 0],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  const handleIconHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.2],
      translateY: [0, -6],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };
  const handleIconHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.2, 1],
      translateY: [-6, 0],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        {/* About Intro */}
        <section
          ref={introRef}
          className="text-center py-16 bg-[#f4d35e] rounded-lg"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            About Lanka Travel Rides
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At <span className="font-semibold">Lanka Travel Rides</span>, we are
            dedicated to providing reliable, affordable, and high-quality
            transportation solutions across Sri Lanka. Whether you're a tourist
            exploring our vibrant island or a local seeking convenient travel,
            we have the perfect vehicle for you.
          </p>
        </section>

        {/* Our Mission */}
        <section ref={missionSectionRef} className="py-16">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Service",
                description:
                  "We strive to deliver seamless rental experiences with transparent pricing and 24/7 support, ensuring every journey is stress-free.",
              },
              {
                title: "Quality Fleet",
                description:
                  "Our diverse fleet, from economy cars to luxury vans, is meticulously maintained to guarantee safety and comfort for all travelers.",
              },
              {
                title: "Customer-Centric",
                description:
                  "We tailor our services to meet your needs, offering flexible plans for business, leisure, or special events across Sri Lanka.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-lg"
                ref={(el) => (missionCardRefs.current[i] = el)}
                onMouseEnter={(e) => handleCardHover(e.currentTarget)}
                onMouseLeave={(e) => handleCardHoverLeave(e.currentTarget)}
              >
                <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section
          ref={benefitsSectionRef}
          className="py-16 bg-[#5c3d2e] text-white rounded-lg"
        >
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Lanka Travel Rides?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Over a Decade of Experience",
                description:
                  "With more than 10 years in the industry, we understand what makes a great travel experience.",
              },
              {
                title: "Trusted by Thousands",
                description:
                  "Our customers rely on us for safe, reliable, and affordable transportation solutions.",
              },
              {
                title: "Nationwide Coverage",
                description:
                  "From urban centers to remote destinations, we serve all corners of Sri Lanka.",
              },
              {
                title: "Sustainable Travel",
                description:
                  "We prioritize eco-friendly vehicles and practices to minimize our environmental impact.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start max-lg:flex-col max-lg:items-center max-lg:gap-4"
                ref={(el) => (benefitsItemRefs.current[i] = el)}
                onMouseEnter={(e) => handleItemHover(e.currentTarget)}
                onMouseLeave={(e) => handleItemHoverLeave(e.currentTarget)}
              >
                <div
                  className="bg-[#f4d35e] text-[#5c3d2e] p-3 rounded-full mr-4"
                  onMouseEnter={(e) => handleIconHover(e.currentTarget)}
                  onMouseLeave={(e) => handleIconHoverLeave(e.currentTarget)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11l-4-4 1.4-1.4L10 9.2l3.6-3.6L15 7l-5 5z" />
                  </svg>
                </div>
                <div className="max-lg:text-center max-lg:w-80">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="max-lg:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section ref={teamSectionRef} className="py-16 text-center">
          <OurTeam />
        </section>

        {/* Call to Action */}
        <section ref={ctaSectionRef} className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Join the Lanka Travel Rides Experience
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to explore Sri Lanka with us? Contact us today to start your
            journey.
          </p>
          <Button
            text="Contact Us"
            onClick={() => navigate("/contact-us")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default About;
