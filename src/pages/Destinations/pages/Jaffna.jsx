import React, { useEffect, useState, useRef } from "react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";
import Loading from "../../../components/ui/Loading";

const Jaffna = () => {
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
          src="/images/jaffna.jpg"
          alt="Jaffna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1
            className="text-white text-5xl sm:text-6xl font-bold text-center"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
          >
            Jaffna
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16 space-y-12">
        <section ref={(el) => (sectionRefs.current[0] = el)} className="opacity-0">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jaffna is the cultural and spiritual heart of Sri Lanka’s north, known for its Hindu temples, unique Tamil traditions, and vibrant coastal life.
          </p>
        </section>

        <section ref={(el) => (sectionRefs.current[1] = el)} className="opacity-0">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">Key Highlights</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Key attractions include Nallur Kandaswamy Kovil, Jaffna Fort, Casuarina Beach, and the islands like Delft Island. Jaffna cuisine, especially crab curry, is a highlight.
          </p>
        </section>

        <section ref={(el) => (sectionRefs.current[2] = el)} className="opacity-0">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">Best Time to Visit</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The best time is January to September, avoiding the monsoon months of October–December.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Jaffna;
