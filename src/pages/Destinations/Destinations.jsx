import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";
import Button from "../../components/ui/Button";
import Loading from "../../components/ui/Loading";

const destinations = [
  {
    id: 1,
    title: "Wilpattu National Park",
    description:
      "It is Sri Lanka’s largest and oldest national park, and the name comes from its many ‘villus’ or natural lakes.",
    image: "/images/wilpattu.jpg",
    link: "/discover-sri-lanka/wilpattu-national-park",
  },
  {
    id: 2,
    title: "Colombo",
    description:
      "Sri Lanka’s vibrant capital, blending modern city life with colonial architecture, markets, and a lively waterfront.",
    image: "/images/colombo.jpg",
    link: "/discover-sri-lanka/colombo",
  },
  {
    id: 3,
    title: "Nuwara Eliya",
    description:
      "Known as 'Little England', this hill town is surrounded by lush tea estates, cool climate, and colonial charm.",
    image: "/images/nwaraEliya.jpg",
    link: "/discover-sri-lanka/nuwara-eliya",
  },
  {
    id: 4,
    title: "Ella",
    description:
      "A scenic hill country town surrounded by tea plantations, waterfalls, and iconic views like Ella Rock and Nine Arches Bridge.",
    image: "/images/ella.jpg",
    link: "/discover-sri-lanka/ella",
  },
  {
    id: 5,
    title: "Kandy",
    description:
      "The cultural capital of Sri Lanka, home to the Temple of the Sacred Tooth Relic and surrounded by scenic hills.",
    image: "/images/kandy.jpg",
    link: "/discover-sri-lanka/kandy",
  },
  {
    id: 6,
    title: "Anuradhapura",
    description:
      "The ancient capital of Sri Lanka, famous for its well-preserved ruins of ancient civilization and sacred Bodhi tree.",
    image: "/images/anurdhapura.jpg",
    link: "/discover-sri-lanka/anuradhapura",
  },
  {
    id: 7,
    title: "Polonnaruwa",
    description:
      "A UNESCO World Heritage site showcasing impressive stone carvings, temples, and ruins of the medieval kingdom.",
    image: "/images/polonnaruwa.jpg",
    link: "/discover-sri-lanka/polonnaruwa",
  },
  {
    id: 8,
    title: "Galle Fort",
    description:
      "A historic Dutch fort on the southern coast, blending colonial charm, cobblestone streets, and ocean views.",
    image: "/images/galle.jpg",
    link: "/discover-sri-lanka/galle-fort",
  },
  {
    id: 9,
    title: "Jaffna",
    description:
      "The cultural heart of Sri Lanka’s north, rich with Hindu temples, coastal beauty, and unique Tamil traditions.",
    image: "/images/jaffna.jpg",
    link: "/discover-sri-lanka/jaffna",
  },
];

const Destinations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const cardRefs = useRef([]);

  // Page title + very short loader
  useEffect(() => {
    document.title = "Lanka Travel Rides | Destinations";
    const timer = setTimeout(() => setIsLoading(false), 150); // faster
    return () => clearTimeout(timer);
  }, []);

  // Animate cards after loading
  useEffect(() => {
    if (isLoading) return;
    anime({
      targets: cardRefs.current,
      translateY: [60, 0],
      opacity: [0, 1],
      delay: anime.stagger(120, { start: 100 }),
      duration: 700,
      easing: "easeOutCubic",
    });
  }, [isLoading]);

  // Hover animation for cards
  const handleCardHover = (el) => {
    anime({
      targets: el,
      scale: 1.05,
      translateY: -8,
      duration: 300,
      easing: "easeOutQuad",
    });
  };
  const handleCardLeave = (el) => {
    anime({
      targets: el,
      scale: 1,
      translateY: 0,
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <section className="text-center py-16 bg-[#f4d35e] rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-[#5c3d2e] mb-4">
            Destinations
          </h2>
          <p className="text-lg text-gray-700 max-w-auto px-4 mx-auto">
            Sri Lanka is one of the most exotic getaways in the world.
            Surrounded by the azure Indian Ocean, this island paradise has
            contrasting landscapes, golden sandy beaches, spectacular wildlife
            and a rich culture to discover. Explore UNESCO heritage sites, 15
            national parks and nearly 500,000 acres of lush tea estates.
          </p>
        </section>

        {/* Cards Section */}
        <section className="py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((place, i) => (
              <div
                key={place.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-[520px] flex flex-col cursor-pointer transition-all"
                onMouseEnter={(e) => handleCardHover(e.currentTarget)}
                onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-64 object-cover"
                  loading="lazy" // ✅ improve speed
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">{place.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {place.description}
                  </p>
                  <Link to={place.link} className="mt-auto">
                    <Button
                      text="READ MORE"
                      icon="heroicons:arrow-right"
                      iconPosition="right"
                      className="px-6 py-2 w-full"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Destinations;
