import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const linkRef = useRef(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I rent a car?",
      answer:
        "Choose your preferred vehicle, select rental dates, and proceed with the booking through our website or app.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, PayPal, and select mobile wallets for convenient payments.",
    },
    {
      question: "Can I cancel or modify my booking?",
      answer:
        "Yes, you can cancel or modify your booking through your account dashboard. Please refer to our cancellation policy.",
    },
    {
      question: "What should I do in case of an emergency?",
      answer:
        "Contact our 24/7 support line immediately. Emergency contact details are included in your booking confirmation email.",
    },
  ];

  // Scroll-triggered animations
  useEffect(() => {
    const section = sectionRef.current;

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

      // FAQ cards animation (staggered)
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

      // Bottom link animation
      if (linkRef.current) {
        anime({
          targets: linkRef.current,
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 600,
          easing: "easeOutQuad",
          delay: 1000,
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

  // Hover animation for FAQ cards
  const handleCardHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -10],
      backgroundColor: ["#ffffff", "#f4d35e"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleCardHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-10, 0],
      backgroundColor: ["#f4d35e", "#ffffff"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  // Hover animation for the bottom link
  const handleLinkHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -5],
      color: ["#006D5B", "#f4d35e"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleLinkHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-5, 0],
      color: ["#f4d35e", "#006D5B"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-[#f9f5e3] w-full sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div ref={headerRef} className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#5c3d2e] sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Find answers to common questions about our car rental services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-md hover:shadow-lg cursor-pointer hover:bg-gray-50"
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseEnter={(e) => handleCardHover(e.currentTarget)}
              onMouseLeave={(e) => handleCardHoverLeave(e.currentTarget)}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform cursor-pointer duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p ref={linkRef} className="text-center text-gray-600 text-base mt-9">
          Didn’t find the answer you’re looking for?{" "}
          <Link
            to="contact-us"
            className="font-medium text-[#006D5B] transition-all duration-200 hover:text-[#004D40]"
            onMouseEnter={(e) => handleLinkHover(e.currentTarget)}
            onMouseLeave={(e) => handleLinkHoverLeave(e.currentTarget)}
          >
            Let's Connect
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FAQ;
