import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import user_logo from "../../assets/images/user.png";
// import anime from "animejs";

const CustomerFeedback = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const isPaused = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const feedbacks = [
    {
      quote:
        "We're a group of 12 and travelled to Kandy with Jagoda and Back from Ella.Such a kind man and looked after us sowell. Would really recommend this",
      name: "Deirdre Roberts",
      role: "Foreign Customer",
      stars: 5,
    },
    {
      quote: "Good driver's Rent car's van basesVip CONDITION Vehicles good",
      name: "ML Cellular",
      role: "Local Customer",
      stars: 3.5,
    },
    {
      quote: "Foreign Customer",
      name: "Abd Rahim Rahim",
      role: "Foreign Customer",
      stars: 4,
    },

    {
      quote: "Very good service",
      name: "שרון רפאלי",
      role: "Foreign Customer",
      stars: 4.5,
    },
    {
      quote:
        "Woow .. Good service Friendly Drivers also Thank u for LARIF Travels",
      name: "Sabith Lareef",
      role: "Foreign Customer",
      stars: 3,
    },
    {
      quote: "Excellent service",
      name: "Aloka Sandamini",
      role: "Local Customer",
      stars: 3,
    },
    {
      quote: "Patient, friendly and efficient!",
      name: "NICK PERKOVIC",
      role: "Foreign Customer",
      stars: 5,
    },
    {
      quote: "Superb service ..!",
      name: "Nuwani Apsara",
      role: "Local Customer",
      stars: 4.5,
    },
    {
      quote: "Best service",
      name: "Gree Sales",
      role: "Local Customer",
      stars: 3,
    },
    {
      quote: "Best service",
      name: "M.L.M'S",
      role: "Foreign Customer",
      stars: 4,
    },
    {
      quote: "Good",
      name: "Ashwin multi media",
      role: "Foreign Customer",
      stars: 3.5,
    },
    {
      quote: "Best driver Good service",
      name: "Abd Rahim Rahim ",
      role: "Foreign Customer",
      stars: 3,
    },
    {
      quote: " ... Would really recommend this transport service.",
      name: "Deirdre Roberts",
      role: "Foreign Customer",
      stars: 4.5,
    },
    {
      quote: "Excellent service",
      name: "lakshani gamage",
      role: "Local Customer",
      stars: 4,
    },
  ];

  const extendedFeedbacks = [...feedbacks, ...feedbacks, ...feedbacks];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scroll only on desktop
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!isMobile && carousel) {
      const scrollSpeed = 1.2;
      const interval = setInterval(() => {
        if (!isPaused.current) {
          carousel.scrollLeft += scrollSpeed;

          // Reset to start seamlessly when we reach half (because we duplicated feedbacks)
          if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
          }
        }
      }, 16);

      carousel.addEventListener("mouseenter", () => (isPaused.current = true));
      carousel.addEventListener("mouseleave", () => (isPaused.current = false));

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section className="py-12 bg-[#f9f5e3] sm:py-16 lg:py-20">
      <style>{`
        .carousel-container {
          overflow: hidden;
          position: relative;
          width: 100%;
          padding: 1rem;
          -webkit-overflow-scrolling: touch;
        }
        .carousel {
          display: flex;
          gap: 2rem;
          animation: slideinfinite 80s linear infinite;
        }
        @keyframes slideinfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .carousel-card {
          flex-shrink: 0;
          width: 300px;
          scroll-snap-align: center;
        }
        @media (max-width: 639px) {
          .carousel {
            flex-direction: column;
            gap: 1.5rem;
            animation: none;
          }
          .carousel-card {
            width: 100%;
            max-width: 380px;
            margin: 0 auto;
          }
            .carousel-card {
  height: 16rem; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

        }
      `}</style>

      <div className="px-4 mx-auto xl:w-7xl max-xl:w-5xl max-lg:w-3xl max-md:w-2xl max-sm:w-[100%] sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg font-medium text-[#5c3d2e] font-pj">
            More than +1000 customers love our car rental service
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#5c3d2e] sm:text-4xl xl:text-5xl font-pj">
            Our happy clients say about us
          </h2>
        </div>

        <div className="mt-12 max-sm:mt-6">
          <div className="carousel-container" ref={carouselRef}>
            <div className="carousel">
              {(isMobile ? feedbacks.slice(0, 3) : extendedFeedbacks).map(
                (f, i) => (
                  <div
                    key={i}
                    className="carousel-card bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-[1.02] flex flex-col min-h-[16rem] max-sm:min-h-[20rem]"
                  >
                    {/* Top: Stars + Quote */}
                    <div>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, idx) => (
                          <svg
                            key={idx}
                            className={`w-5 h-5 ${
                              idx < f.stars ? "text-[#FDB241]" : "text-gray-300"
                            }`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-gray-800 text-base leading-relaxed font-pj">
                        {f.quote}
                      </p>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>

                    {/* Bottom: Avatar + Name */}
                    <div className="flex items-center mt-6">
                      <img
                        className="w-11 h-11 rounded-full object-cover"
                        src={user_logo}
                        alt={f.name}
                      />
                      <div className="ml-4">
                        <p className="text-sm font-bold text-gray-900 font-pj">
                          {f.name}
                        </p>
                        <p className="text-xs text-gray-500 font-pj">
                          {f.role}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            text="Check all reviews"
            onClick={() => navigate("/clients")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 max-md:text-xl bg-[#006D5B]"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
