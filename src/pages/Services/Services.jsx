import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const Services = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const servicesSectionRef = useRef(null);
  const overviewSectionRef = useRef(null);
  const whyChooseUsSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const overviewCardRefs = useRef([]);
  const whyChooseUsItemRefs = useRef([]);

  useEffect(() => {
    document.title = "Lanka Travels Rides | Services";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Animate overview cards on page load: slide up + fade in
    anime({
      targets: overviewCardRefs.current,
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      delay: anime.stagger(150, { start: 200 }),
      duration: 900,
      easing: "easeOutBounce",
    });

    // Animate Why Choose Us items on page load similarly
    anime({
      targets: whyChooseUsItemRefs.current,
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      delay: anime.stagger(150, { start: 300 }),
      duration: 900,
      easing: "easeOutBounce",
    });

    // Animate Call to Action button fade + pop in
    const ctaBtn = ctaSectionRef.current?.querySelector("button");
    if (ctaBtn) {
      anime({
        targets: ctaBtn,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutElastic(1, .7)",
        delay: 600,
      });
    }
  }, [isLoading]);

  // Scroll-triggered animations
  useEffect(() => {
    const sections = [
      { ref: servicesSectionRef, bg: "#f4d35e" },
      { ref: overviewSectionRef, bg: "#f3f4f6" },
      { ref: whyChooseUsSectionRef, bg: "#5c3d2e" },
      { ref: ctaSectionRef, bg: "#f3f4f6" },
    ];

    const playAnimations = (sectionRef, bg) => {
      // Section background fade-in
      if (sectionRef.current) {
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
      }

      // Header and paragraph animation
      const header = sectionRef.current?.querySelector("h2");
      const paragraph = sectionRef.current?.querySelector("p");
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

      // Button animation (handled by Button component, but enhance pop)
      const button = sectionRef.current?.querySelector("button");
      if (button) {
        anime({
          targets: button,
          translateY: [50, 0],
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 700,
          easing: "easeOutElastic(1, 0.8)",
          delay: 500,
        });
      }

      // Cards or items animation
      const cards =
        sectionRef === overviewSectionRef
          ? overviewCardRefs.current
          : whyChooseUsItemRefs.current;
      if (cards.length > 0) {
        anime({
          targets: cards,
          translateY: [100, 0],
          scale: [0.85, 1],
          opacity: [0, 1],
          delay: anime.stagger(120, { start: 600 }),
          duration: 900,
          easing: "easeOutElastic(1, 0.6)",
        });
      }

      // Icons in Why Choose Us
      if (sectionRef === whyChooseUsSectionRef) {
        const icons = sectionRef.current?.querySelectorAll("svg");
        if (icons.length > 0) {
          anime({
            targets: icons,
            scale: [0, 1],
            translateY: [30, 0],
            opacity: [0, 1],
            delay: anime.stagger(100, { start: 800 }),
            duration: 600,
            easing: "easeOutElastic(1, 0.8)",
          });
        }
      }
    };

    // Intersection Observer for each section
    const observers = sections.map(({ ref, bg }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            playAnimations(ref, bg);
            observer.disconnect(); // Run animations only once
          }
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return { observer, ref };
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Hover animation for cards
  const handleCardHover = (el) => {
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

  const handleCardHoverLeave = (el) => {
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

  // Hover animation for Why Choose Us items
  const handleItemHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -12],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  const handleItemHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-12, 0],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  // Hover animation for Why Choose Us icons
  const handleIconHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.2],
      translateY: [0, -6],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  const handleIconHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.2, 1],
      translateY: [-6, 0],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        {/* Services Section */}
        <section
          ref={servicesSectionRef}
          className="text-center py-16 bg-[#f4d35e] rounded-lg"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Drive Lanka, we provide premium vehicle rental services tailored
            to your needs. Whether you're exploring Sri Lanka or need reliable
            transportation, our diverse fleet and flexible options ensure a
            seamless experience.
          </p>
        </section>

        {/* Services Overview */}
        <section ref={overviewSectionRef} className="py-16">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rent with Driver",
                description:
                  "Enjoy a hassle-free journey with our professional drivers who know Sri Lanka inside out. Perfect for tourists and business travelers seeking comfort and convenience.",
                path: "/with-driver",
                buttonText: "Learn More",
              },
              {
                title: "Self Drive",
                description:
                  "Take control of your adventure with our self-drive vehicles. Choose from our wide range of cars, SUVs, and more for a personalized driving experience.",
                path: "/self-drive",
                buttonText: "Learn More",
              },
              {
                title: "Corporate Rentals",
                description:
                  "Tailored solutions for businesses, including long-term rentals and fleet management. Reliable vehicles to keep your operations running smoothly.",
                path: "/contact",
                buttonText: "Contact Us",
              },
              {
                title: "Event Transportation",
                description:
                  "Whether it's a wedding, conference, or special gathering, we offer stylish and punctual transportation solutions to ensure your event runs smoothly and guests arrive in comfort.",
                path: "/contact",
                buttonText: "Rent Now",
              },
              {
                title: "Tour Packages",
                description:
                  "Discover Sri Lanka with our curated tour packages. From cultural sites to scenic beaches, we provide vehicles and guides for an unforgettable experience.",
                path: "/special-offers",
                buttonText: "Explore Tours",
              },
              {
                title: "Special Events",
                description:
                  "Make your events memorable with our luxury vehicles for weddings, parties, and more. Customized transport solutions for your special occasions.",
                path: "/contact",
                buttonText: "Get a Quote",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col justify-between h-full items-start"
                ref={(el) => (overviewCardRefs.current[index] = el)}
                onMouseEnter={(e) => handleCardHover(e.currentTarget)}
                onMouseLeave={(e) => handleCardHoverLeave(e.currentTarget)}
              >
                <h3 className="text-2xl font-bold text-[#5c3d2e] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
                <Button
                  text={service.buttonText}
                  onClick={() => navigate(service.path)}
                  className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          ref={whyChooseUsSectionRef}
          className="py-16 bg-[#5c3d2e] text-white rounded-lg"
        >
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Drive Lanka?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Quality Vehicles",
                description:
                  "Our fleet is regularly maintained to ensure safety and comfort.",
              },
              {
                title: "Flexible Options",
                description:
                  "Choose from self-drive or chauffeured services to suit your needs.",
              },
              {
                title: "24/7 Support",
                description:
                  "Our team is available around the clock to assist you.",
              },
              {
                title: "Competitive Pricing",
                description:
                  "Transparent pricing with no hidden fees for all our services.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start max-lg:flex-col max-lg:items-center max-lg:gap-4"
                ref={(el) => (whyChooseUsItemRefs.current[index] = el)}
                onMouseEnter={(e) => handleItemHover(e.currentTarget)}
                onMouseLeave={(e) => handleItemHoverLeave(e.currentTarget)}
              >
                <div
                  className="bg-[#f4d35e] text-[#5c3d2e] p-3 rounded-full mr-4"
                  onMouseEnter={(e) => handleIconHover(e.currentTarget)}
                  onMouseLeave={(e) => handleIconHoverLeave(e.currentTarget)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11l-4-4 1.4-1.4L10 9.2l3.6-3.6L15 7l-5 5z" />
                  </svg>
                </div>
                <div className="max-lg:text-center max-lg:w-80">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="max-lg:text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section ref={ctaSectionRef} className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Explore Sri Lanka?
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Book your vehicle today and experience the freedom of the open road
            with Drive Lanka.
          </p>
          <Button
            text="Rent Now"
            onClick={() => navigate("/rent-vehicles")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8"
          />
        </section>
      </div>
    </div>
  );
};

export default Services;
