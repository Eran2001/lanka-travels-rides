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
  const sectionRef = useRef(null);
  const headerSectionRef = useRef(null);
  const clientRefs = useRef([]);

  useEffect(() => {
    document.title = "Lanka Travels Rides | Clients";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  // Scroll-triggered animations
  useEffect(() => {
    const playAnimations = (ref, isHeader = false) => {
      if (isHeader && headerSectionRef.current) {
        // Header section background fade-in
        anime({
          targets: headerSectionRef.current,
          backgroundColor: ["rgba(244, 211, 94, 0)", "#f4d35e"],
          duration: 1000,
          easing: "easeOutQuad",
        });

        // Header and paragraph
        const header = headerSectionRef.current.querySelector("h2");
        const paragraph = headerSectionRef.current.querySelector("p");
        if (header || paragraph) {
          anime({
            targets: [header, paragraph].filter(Boolean),
            translateY: [80, 0], // Popping upward
            scale: [0.8, 1],
            opacity: [0, 1],
            delay: anime.stagger(150, { start: 200 }),
            duration: 900,
            easing: "easeOutElastic(1, 0.6)",
          });
        }
      } else if (!isHeader && ref.current) {
        // Client testimonial image and text
        const image = ref.current.querySelector("img");
        const title = ref.current.querySelector("h3");
        const description = ref.current.querySelector("p");
        anime({
          targets: [image, title, description].filter(Boolean),
          translateY: [100, 0], // Stronger popping upward
          scale: [0.85, 1],
          opacity: [0, 1],
          delay: anime.stagger(120, { start: 600 }),
          duration: 900,
          easing: "easeOutElastic(1, 0.6)",
        });
      }
    };

    // Intersection Observer for header section
    const headerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playAnimations(headerSectionRef, true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    // Intersection Observer for client testimonials
    const clientObservers = clientRefs.current.map((ref) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            playAnimations(ref, false);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      if (ref) observer.observe(ref);
      return observer;
    });

    if (headerSectionRef.current) {
      headerObserver.observe(headerSectionRef.current);
    }

    return () => {
      if (headerSectionRef.current)
        headerObserver.unobserve(headerSectionRef.current);
      clientObservers.forEach((observer, index) => {
        if (clientRefs.current[index])
          observer.unobserve(clientRefs.current[index]);
      });
    };
  }, []);

  // Hover animation for images
  const handleImageHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -12],
      boxShadow: [
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "0 20px 30px -5px rgba(0, 0, 0, 0.25), 0 8px 12px -3px rgba(0, 0, 0, 0.15)",
      ],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  const handleImageHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-12, 0],
      boxShadow: [
        "0 20px 30px -5px rgba(0, 0, 0, 0.25), 0 8px 12px -3px rgba(0, 0, 0, 0.15)",
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
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
    <section
      ref={sectionRef}
      className="py-16 bg-white sm:py-20 lg:py-24 mt-27"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <section
          ref={headerSectionRef}
          className="text-center py-16 bg-[#f4d35e] rounded-lg"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
