import React, { useEffect, useState, useRef } from "react";
import Loading from "@/components/ui/Loading";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const clients = [
  {
    image:
      "https://coastandvalleypm.com/wp-content/uploads/2023/09/AdobeStock_197628319.jpeg",
    title: "Exceptional Rental Experience",
    description:
      "We rented a van for our family trip and it was spotless, efficient, and spacious. The team was friendly and handled everything smoothly.",
  },
  {
    image:
      "https://wichitastaffing.com/wp-content/uploads/2023/06/reliability-key-to-career-growth-and-success-1-scaled-1-1024x683.jpg",
    title: "Professional and Reliable",
    description:
      "The customer service was fantastic! I’ve never had a smoother rental process. Pickup and drop-off were seamless and stress-free.",
  },
  {
    image:
      "https://www.talk-business.co.uk/wp-content/uploads/2019/10/shutterstock_1385974424.jpg",
    title: "Perfect for Business Travel",
    description:
      "I needed a car on short notice for a business meeting out of town. Booking was fast, the car was ready, and I arrived on time.",
  },
  {
    image:
      "https://quickcabservicesjaipur.com/wp-content/uploads/2025/01/Untitled-1.jpg",
    title: "Safe and Comfortable Rides",
    description:
      "I used the rental for a weekend getaway with friends. The ride was smooth and fuel-efficient. Will definitely rent again!",
  },
];

export default function Clients() {
  const [isLoading, setIsLoading] = useState(true);
  const introRef = useRef(null);
  const clientRefs = useRef([]);

  useEffect(() => {
    document.title = "Lanka Travels Rides | Clients";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Animate client cards on load
    anime({
      targets: clientRefs.current,
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      delay: anime.stagger(150, { start: 200 }),
      duration: 900,
      easing: "easeOutBounce",
    });
  }, [isLoading]);

  // Scroll-triggered animations
  useEffect(() => {
    const sections = [{ ref: introRef, bg: "#f4d35e" }];

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
      const header = sectionRef.current.querySelector("h2");
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

    // Client card animations
    const clientObservers = clientRefs.current.map((ref) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            const image = ref.querySelector("img");
            const title = ref.querySelector("h3");
            const description = ref.querySelector("p");
            anime({
              targets: [image, title, description].filter(Boolean),
              translateY: [100, 0],
              scale: [0.85, 1],
              opacity: [0, 1],
              delay: anime.stagger(120, { start: 600 }),
              duration: 900,
              easing: "easeOutElastic(1, 0.6)",
            });
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      clientObservers.forEach((observer, index) => {
        if (clientRefs.current[index])
          observer.unobserve(clientRefs.current[index]);
      });
    };
  }, [isLoading]);

  // Hover animation for images
  const handleImageHover = (el) => {
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

  const handleImageHoverLeave = (el) => {
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

  // Hover animation for text content
  const handleTextHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -12],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  const handleTextHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-12, 0],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  if (isLoading) return <Loading />;

  return (
    <section className="py-16 bg-white sm:py-20 lg:py-24 mt-27">
      <div className="container px-4 mx-auto">
        <section
          ref={introRef}
          className="text-center py-16 bg-[#f4d35e] rounded-lg"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-auto px-48 mx-auto p-4">
            Hear from our happy customers about their rental experience with us.
            From seamless booking processes to top-notch customer service, our
            clients consistently praise the reliability, affordability, and
            comfort we provide. Whether it's a short getaway or a long-term
            rental, we go the extra mile to ensure your journey is smooth and
            memorable.
          </p>
        </section>

        <div className="mt-16 space-y-24">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-10`}
              ref={(el) => (clientRefs.current[index] = el)}
            >
              <div
                className="lg:w-1/2 w-full"
                onMouseEnter={(e) =>
                  handleImageHover(e.currentTarget.querySelector("img"))
                }
                onMouseLeave={(e) =>
                  handleImageHoverLeave(e.currentTarget.querySelector("img"))
                }
              >
                <img
                  src={client.image}
                  alt={client.title}
                  className="rounded-lg shadow-lg w-full h-[350px] object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x200?text=Client+Image";
                  }}
                />
              </div>
              <div
                className="lg:w-1/2 w-full"
                onMouseEnter={(e) => handleTextHover(e.currentTarget)}
                onMouseLeave={(e) => handleTextHoverLeave(e.currentTarget)}
              >
                <h3 className="text-2xl font-bold text-[#006D5B]">
                  {client.title}
                </h3>
                <p className="mt-4 text-gray-700 text-lg">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
