import React, { useEffect, useRef } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const CustomerFeedback = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRefs = useRef([]);

  const feedbacks = [
    {
      quote:
        "The booking process was so easy and fast. The car was clean and ready when I arrived. Excellent service!",
      name: "Leslie Alexander",
      role: "Travel Blogger",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      quote:
        "Simply the best car rental experience I’ve had. Great prices, smooth pickup, and friendly support!",
      name: "Jacob Jones",
      role: "Business Consultant",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    },
    {
      quote:
        "I rented a car for a weekend trip and everything went perfectly. Highly recommend this service to anyone!",
      name: "Jenny Wilson",
      role: "Graphic Designer",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    },
    {
      quote:
        "Amazing customer service and top-notch vehicles. Made my trip to Sri Lanka unforgettable!",
      name: "Michael Brown",
      role: "Entrepreneur",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      quote:
        "The team went above and beyond to accommodate my needs. Affordable and reliable!",
      name: "Sarah Davis",
      role: "Marketing Manager",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    },
    {
      quote:
        "Rented a luxury car for a special occasion. The process was seamless and the car was perfect!",
      name: "David Lee",
      role: "Event Planner",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    },
    {
      quote:
        "Friendly staff and a great selection of cars. Will definitely rent again on my next visit!",
      name: "Emma White",
      role: "Tourist",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    },
    {
      quote:
        "The car was in pristine condition, and the pricing was transparent. Highly satisfied!",
      name: "James Taylor",
      role: "Software Developer",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    },
    {
      quote:
        "Perfect for my business trip. The support team was available 24/7 to assist me!",
      name: "Olivia Martin",
      role: "Consultant",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    },
    {
      quote:
        "Great value for money and a smooth rental process. Highly recommend to everyone!",
      name: "William Clark",
      role: "Photographer",
      avatar:
        "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    },
  ];

  // Initial animations
  useEffect(() => {
    // Section background fade-in
    if (sectionRef.current) {
      anime({
        targets: sectionRef.current,
        backgroundColor: ["rgba(249, 245, 227, 0)", "#f9f5e3"],
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

    // Button animation
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        translateY: [30, 0],
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 700,
        easing: "easeOutElastic(1, 0.9)",
        delay: 500,
      });
    }

    // Cards initial animation
    if (cardRefs.current.length > 0) {
      anime({
        targets: cardRefs.current,
        translateY: [60, 0],
        scale: [0.85, 1],
        opacity: [0, 1],
        delay: anime.stagger(120, { start: 700 }),
        duration: 800,
        easing: "easeOutElastic(1, 0.8)",
      });
    }
  }, []);

  // Hover animation for cards
  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -10],
      backgroundColor: ["#ffffff", "#f4d35e"],
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
  };

  return (
    <section ref={sectionRef} className="py-12 bg-[#f9f5e3] sm:py-16 lg:py-20">
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .carousel {
            display: flex;
            animation: slide 30s linear infinite;
          }
          .carousel:hover {
            animation-play-state: paused;
          }
          .carousel-container {
            overflow-x: hidden;
            position: relative;
            width: 100%;
          }
        `}
      </style>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div ref={headerRef} className="text-center">
            <p className="text-lg font-medium text-[#5c3d2e] font-pj">
              More than +1000 customers love our car rental service
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#5c3d2e] sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #f4d35e 22.86%, #44ff9a 48.36%, #f4d35e 73.33%, #44ff9a 99.34%)",
                }}
              ></div>
            </div>

            <div className="carousel flex flex-row gap-6 md:gap-10">
              {[...feedbacks, ...feedbacks].map((feedback, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden shadow-xl rounded-xl w-[280px] sm:w-[320px] md:w-[360px] flex-shrink-0"
                  ref={(el) => (cardRefs.current[index] = el)}
                  onMouseEnter={(e) => handleHover(e.currentTarget)}
                  onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center justify-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          {feedback.quote}
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={feedback.avatar}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          {feedback.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          {feedback.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:mt-16">
          <Button
            text="Check all reviews"
            onClick={() => navigate("/clients")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 bg-[#006D5B]"
            ref={buttonRef}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
