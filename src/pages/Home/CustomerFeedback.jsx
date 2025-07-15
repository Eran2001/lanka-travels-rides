import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
// import anime from "animejs";

const CustomerFeedback = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);
  const isPaused = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

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
    // Add more feedbacks (total 10 or more)
    {
      quote:
        "Amazing car options and smooth booking. The staff was really helpful too!",
      name: "Kevin Patel",
      role: "Photographer",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      quote:
        "I’ll definitely rent from here again. Reliable and clean vehicles.",
      name: "Amara Singh",
      role: "Travel Agent",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      quote: "Really good support and they even gave me a free upgrade!",
      name: "Liam Mendes",
      role: "Youtuber",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      quote: "Prices were fair and the service was top-notch!",
      name: "Sophia Rodrigo",
      role: "Influencer",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      quote:
        "My go-to rental platform in Sri Lanka now. Hassle-free and super smooth!",
      name: "Danuka Perera",
      role: "Marketing Executive",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      quote: "Appreciated the on-time delivery and great support team!",
      name: "Isuri Fernando",
      role: "Interior Designer",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      quote: "Love the customer-first attitude. I felt valued as a client!",
      name: "Ravindu Madushanka",
      role: "Finance Analyst",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    },
  ];

  const extendedFeedbacks = [...feedbacks, ...feedbacks];

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
      const cardWidth = carousel.querySelector(".carousel-card").offsetWidth;
      const gap = 16;
      const totalScrollWidth = (cardWidth + gap) * feedbacks.length;

      const scrollSpeed = 1.2;
      carousel.scrollLeft = 0;

      const interval = setInterval(() => {
        if (!isPaused.current) {
          carousel.scrollLeft += scrollSpeed;
          if (carousel.scrollLeft >= totalScrollWidth) {
            carousel.scrollLeft = 0;
          }
        }
      }, 16);

      carousel.addEventListener("mouseenter", () => (isPaused.current = true));
      carousel.addEventListener("mouseleave", () => (isPaused.current = false));

      return () => {
        clearInterval(interval);
      };
    }
  }, [isMobile]);

  return (
    <section className="py-12 bg-[#f9f5e3] sm:py-16 lg:py-20">
      <style>{`
        .carousel-container {
          overflow: hidden;
          position: relative;
          width: 100%;
          padding: 2rem;
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
        }
      `}</style>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg font-medium text-[#5c3d2e] font-pj">
            More than +1000 customers love our car rental service
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#5c3d2e] sm:text-4xl xl:text-5xl font-pj">
            Our happy clients say about us
          </h2>
        </div>

        <div className="mt-12">
          <div className="carousel-container" ref={carouselRef}>
            <div className="carousel">
              {(isMobile ? feedbacks.slice(0, 3) : extendedFeedbacks).map(
                (f, i) => (
                  <div
                    key={i}
                    className="carousel-card bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <svg
                          key={idx}
                          className="w-5 h-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote>
                      <p className="text-gray-800 text-base leading-relaxed font-pj">
                        {f.quote}
                      </p>
                    </blockquote>
                    <div className="flex items-center mt-6">
                      <img
                        className="w-11 h-11 rounded-full object-cover"
                        src={f.avatar}
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
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 bg-[#006D5B]"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;
