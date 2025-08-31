import React, { useEffect, useState, useRef } from "react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";
import Loading from "../../../components/ui/Loading";

const Polonnaruwa = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef([]);
  const animatedSections = useRef(new Set()); // keep track of animated sections

  // Set page title + loading
  useEffect(() => {
    document.title = "Lanka Travel Rides | Wilpattu National Park";
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-trigger animations (run only once per section)
  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      sectionRefs.current.forEach((el, i) => {
        if (!el || animatedSections.current.has(el)) return;

        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          anime({
            targets: el,
            translateY: [60, 0],
            opacity: [0, 1],
            delay: i * 150,
            duration: 900,
            easing: "easeOutElastic(1, .6)",
          });

          animatedSections.current.add(el); // mark as animated so it won’t repeat
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-18">
      {/* Banner Image */}
      <div className="relative w-full h-[60vh]">
        <img
          src="/images/polonnaruwa.jpg"
          alt="Polonnaruwa"
          className="w-full h-full object-top"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1
            className="text-white text-5xl sm:text-6xl font-bold text-center"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
          >
            Polonnaruwa
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16 space-y-12">
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="opacity-0"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Polonnaruwa, another UNESCO World Heritage Site, showcases the
            grandeur of Sri Lanka’s medieval kingdom with its stone carvings,
            temples, and royal ruins.
          </p>
        </section>

        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="opacity-0"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Key Highlights
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Highlights include the Gal Vihara rock sculptures, the Royal Palace,
            Parakrama Samudra (vast man-made lake), and Rankoth Vehera stupa.
          </p>
        </section>

        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="opacity-0"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Best Time to Visit
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Best time is July to September for dry weather, though mornings and
            evenings are pleasant year-round.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Polonnaruwa;
