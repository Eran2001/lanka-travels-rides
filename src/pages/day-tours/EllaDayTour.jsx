import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";
import Loading from "../../components/ui/Loading";
import Button from "../../components/ui/Button";

const places = [
  {
    name: "Nine Arches Bridge",
    image: "/images/nine-arches.jpg",
    description:
      "This iconic colonial-era railway bridge is surrounded by lush green tea plantations and dense forest. A perfect spot for photography and capturing the essence of Ella's scenic beauty.",
  },
  {
    name: "Little Adam's Peak",
    image: "/images/littleadam.jpg",
    description:
      "A moderate hike suitable for all ages, offering breathtaking 360° views of Ella’s valleys, waterfalls, and tea estates. Ideal for sunrise or sunset treks.",
  },
  {
    name: "Ravana Falls",
    image: "/images/ravana-falls.jpg",
    description:
      "A majestic waterfall plunging 25 meters into a pool below. Enjoy the soothing sound of water and explore the natural cave behind the falls.",
  },
  {
    name: "Ella Rock",
    image: "/images/ella-rock.jpg",
    description:
      "A challenging hike for adventure seekers, culminating in panoramic views over the valleys, tea plantations, and mountains. Best visited in the morning for clear skies.",
  },
  {
    name: "Ella Spice Garden",
    image: "/images/spice-garden.jpeg",
    description:
      "Experience the vibrant aromas and colors of Sri Lanka’s spices. Learn about traditional cultivation methods and sample some fresh spices on-site.",
  },
  {
    name: "Gem Shop",
    image: "/images/gem-shop.jpg",
    description:
      "Explore a variety of precious and semi-precious gems. Discover the history and significance of gemstones in Sri Lankan culture and maybe take home a unique souvenir.",
  },
];

const vehicles = [
  { type: "Car", price: "40,000/=" },
  { type: "KDH Van", price: "45,000/=" },
  { type: "KDH (H/R 15pax) Van", price: "50,000/=" },
  { type: "Bus (25/29pax)", price: "70,000/=" },
  { type: "Bus (33pax)", price: "75,000/=" },
];

const EllaDayTour = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef([]);
  const animatedSections = useRef(new Set());
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Lanka Travel Rides | Ella Day Tour";
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

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
          animatedSections.current.add(el);
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
      {/* Banner */}
      <div className="relative w-full h-[60vh]">
        <img
          src="/images/ella.jpg"
          alt="Ella Day Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1
            className="text-white text-5xl sm:text-6xl font-bold text-center ring-2 ring-white rounded-md p-4"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
          >
            Ella Day Tour
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-20 py-16 space-y-12">
        {/* Places to Visit */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="opacity-0 space-y-8"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-6 text-center">
            Places Included
            <span
              className="block w-24 h-1 bg-[#006D5B] mx-auto mt-3 rounded-full"
              aria-hidden="true"
            ></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((place, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#5c3d2e] mb-2">
                    {place.name}
                  </h3>
                  <p className="text-gray-700 text-sm">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Vehicle Packages */}
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="opacity-0 pt-10"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-8 text-center">
            Vehicle Packages
            <span
              className="block w-24 h-1 bg-[#006D5B] mx-auto mt-3 rounded-full"
              aria-hidden="true"
            ></span>
          </h2>

          {/* Modern Card Style Paragraphs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((v, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-[#5c3d2e] mb-2 text-center">
                  {v.type}
                </h3>
                <p className="text-gray-700 text-center">
                  Our <span className="font-medium">{v.type}</span> package
                  costs <span className="font-semibold">{v.price}</span>.
                  Perfect for a comfortable journey exploring Ella and nearby
                  attractions.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center" aria-label="Call to action">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your vehicle today and explore Sri Lanka with Lanka Travel
            Rides.
          </p>
          <Button
            text="Choose Your Vehicle"
            onClick={() => navigate("/check-out-our-fleet")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default EllaDayTour;
