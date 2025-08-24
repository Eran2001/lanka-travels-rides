import React, { useRef, useEffect } from "react";
import { MdSupportAgent, MdCarRepair, MdAttachMoney } from "react-icons/md";
import { FaExchangeAlt, FaShieldAlt, FaCarSide } from "react-icons/fa";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const RentalTimesBar = () => {
  const rentalTimesRef = useRef(null);

  useEffect(() => {
    const items = rentalTimesRef.current.children;

    // Animate each item with a sequential flip-in effect
    anime({
      targets: items,
      translateY: [100, 0],
      rotateX: [90, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 300 }),
      duration: 1200,
      easing: "easeOutElastic(1, 0.5)",
    });

    // Animate icons with a rotating entrance and scale
    anime({
      targets: rentalTimesRef.current.querySelectorAll("svg"),
      scale: [0, 1.2, 1],
      rotate: [360, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 500 }),
      duration: 1000,
      easing: "easeOutElastic(1, 0.6)",
    });

    // Animate text with a typewriter-like reveal
    anime({
      targets: rentalTimesRef.current.querySelectorAll("span"),
      translateX: [-50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 700 }),
      duration: 800,
      easing: "easeOutSine",
      begin: () => {
        // Split text into spans for character-by-character animation
        rentalTimesRef.current.querySelectorAll("span").forEach((span) => {
          const text = span.textContent;
          span.innerHTML = text
            .split("")
            .map((char) => `<span>${char}</span>`)
            .join("");
          anime({
            targets: span.querySelectorAll("span"),
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(50),
            duration: 600,
            easing: "easeOutCubic",
          });
        });
      },
    });
  }, []);

  return (
    <div className="bg-[#006D5B] py-8 xl:mt-[-1px] max-sm:mt-14">
      <div className="container mx-auto max-sm:px-4 px-4">
        <div
          ref={rentalTimesRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-white text-center"
        >
          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md">
            <MdSupportAgent size={28} className="text-white" />
            <span className="text-sm font-semibold">24/7 Support</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md">
            <MdCarRepair size={28} className="text-white" />
            <span className="text-sm font-semibold">
              Well-Maintained Vehicles
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md">
            <MdAttachMoney size={28} className="text-white" />
            <span className="text-sm font-semibold">Affordable Pricing</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md">
            <FaExchangeAlt size={24} className="text-white" />
            <span className="text-sm font-semibold">Immediate Replacement</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md">
            <FaShieldAlt size={24} className="text-white" />
            <span className="text-sm font-semibold">
              Comprehensive Insurance
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md">
            <FaCarSide size={24} className="text-white" />
            <span className="text-sm font-semibold">Trusted Car Brands</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalTimesBar;
