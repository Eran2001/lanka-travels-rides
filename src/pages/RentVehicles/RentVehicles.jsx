import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

import Drawer from "@/components/ui/Drawer";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";
import PopupSlider from "./PopupSlider";

const RentVehicles = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const introRef = useRef(null);
  const vehicleSectionsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    document.title = "Lanka Travels Rides | Rent Vehicles";

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    if (isLoading) return;

    // Animate vehicle cards on load
    vehicleSectionsRef.current.forEach((section) => {
      const cards = section.querySelectorAll(".vehicle-card");
      anime({
        targets: cards,
        translateY: [100, 0],
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: anime.stagger(150, { start: 200 }),
        duration: 900,
        easing: "easeOutBounce",
      });
    });

    // Animate Call to Action button fade + pop in
    const ctaBtn = ctaRef.current?.querySelector("button");
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
      { ref: introRef, bg: "#f4d35e" },
      ...vehicleSectionsRef.current.map((ref) => ({ ref, bg: "#f3f4f6" })),
      { ref: ctaRef, bg: "#f3f4f6" },
    ];

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
      const header = sectionRef.current.querySelector("h2, h3");
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

      // Button animation
      const button = sectionRef.current.querySelector("button");
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

      // Vehicle cards animation
      const cards = sectionRef.current.querySelectorAll(".vehicle-card");
      if (cards && cards.length > 0) {
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

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [isLoading]);

  // Hover animations for vehicle cards
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

  const vehicles = [
    {
      category: "Cars",
      items: [
        {
          name: "Toyota Prius c",
          images: [
            "/car/AQUA/a1.jpg",
            "/car/AQUA/a2.jpg",
            "/car/AQUA/a3.jpg",
            "/car/AQUA/a4.jpg",
            "/car/AQUA/a5.jpg",
            "/car/AQUA/a6.jpg",
          ],
          seats: 3,
          luggage: 2,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "$50",
        },
        // {
        //   name: "BMW 320i",
        //   // images: [bmw1, bmw2, bmw3, bmw4, bmw5],
        //   images: [
        //     "/car/BMW/bm1.jpg",
        //     "/car/BMW/bm2.jpg",
        //     "/car/BMW/bm3.jpg",
        //     "/car/BMW/bm4.jpg",
        //     "/car/BMW/bm5.jpg",
        //   ],
        //   seats: 5,
        //   luggage: 2,
        //   transmission: "Automatic",
        //   fuel: "Diesel",
        //   price: "LKR 11,000/day",
        // },
        {
          name: "Honda Fit Shuttle Hybrid",
          // images: [hyb1, hyb2, hyb3, hyb4],
          images: [
            "/car/HYB/h1.jpg",
            "/car/HYB/h2.jpg",
            "/car/HYB/h3.jpg",
            "/car/HYB/h4.jpg",
          ],
          seats: 4,
          luggage: 2,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "$50",
        },
        {
          name: "Suzuki Every",
          // images: [PH1, PH2, PH3, PH4, PH5, PH6],
          images: [
            "/car/PH/ph1.jpg",
            "/car/PH/ph2.jpg",
            "/car/PH/ph3.jpg",
            "/car/PH/ph4.jpg",
            "/car/PH/ph5.jpg",
            "/car/PH/ph6.jpg",
          ],
          seats: 6,
          luggage: 2,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "$50",
        },
        // {
        //   name: "Suzuki Every",
        //   // images: [PK1, PK2, PK3, PK4],
        //   images: [
        //     "/car/PK/pk1.jpg",
        //     "/car/PK/pk2.jpg",
        //     "/car/PK/pk3.jpg",
        //     "/car/PK/pk4.jpg",
        //   ],
        //   seats: 4,
        //   luggage: 1,
        //   transmission: "Automatic",
        //   fuel: "Petrol",
        //   price: "LKR 18,000/day",
        // },
        // {
        //   name: "Suzuki Stingray",
        //   // images: [W_B1, W_B2, W_B3, W_B4, W_B5],
        //   images: [
        //     "/car/WBLACK/w1.jpg",
        //     "/car/WBLACK/w2.jpg",
        //     "/car/WBLACK/w3.jpg",
        //     "/car/WBLACK/w4.jpg",
        //     "/car/WBLACK/w5.jpg",
        //   ],
        //   seats: 4,
        //   luggage: 1,
        //   transmission: "Automatic",
        //   fuel: "Petrol",
        //   price: "LKR 25,000/day",
        // },
        {
          name: "Suzuki Wagon R",
          // images: [W_R1, W_R2, W_R3, W_R4],
          images: [
            "/car/WRED/red1.jpg",
            "/car/WRED/red2.jpg",
            "/car/WRED/red3.jpg",
            "/car/WRED/red4.jpg",
          ],
          seats: 3,
          luggage: 1,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "$50",
        },
      ],
    },
    {
      category: "Vans",
      items: [
        {
          name: "Toyota HiAce Super GL",
          // images: [PB1, PB2, PB3],
          images: ["/van/PB/pb1.jpg", "/van/PB/pb2.jpg", "/van/PB/pb3.jpg"],
          seats: 12,
          luggage: 6,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "LKR 15,000/day",
        },
        {
          name: "Toyota HiAce Commuter",
          // images: [PC1, PC2],
          images: ["/van/PC/pc1.jpg", "/van/PC/pc2.jpg"],
          seats: 15,
          luggage: 8,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 16,000/day",
        },
        // {
        //   name: "Nissan Caravan",
        //   // images: [PD1, PD2, PD3, PD4],
        //   images: [
        //     "/van/PD/pd1.jpg",
        //     "/van/PD/pd2.jpg",
        //     "/van/PD/pd3.jpg",
        //     "/van/PD/pd4.jpg",
        //   ],
        //   seats: 10,
        //   luggage: 5,
        //   transmission: "Automatic",
        //   fuel: "Petrol",
        //   price: "LKR 14,000/day",
        // },
        {
          name: "Toyota HiAce KDH",
          // images: [PE1, PE2, PE3, PE4, PE5, PE6],
          images: [
            "/van/PE/pe1.jpg",
            "/van/PE/pe2.jpg",
            "/van/PE/pe3.jpg",
            "/van/PE/pe4.jpg",
            "/van/PE/pe5.jpg",
            "/van/PE/pe6.jpg",
          ],
          seats: 14,
          luggage: 7,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 15,500/day",
        },
        // {
        //   name: "Ford Transit",
        //   // images: [PJ1, PJ2, PJ3],
        //   images: ["/van/PJ/pj1.jpg", "/van/PJ/pj2.jpg", "/van/PJ/pj3.jpg"],
        //   seats: 15,
        //   luggage: 8,
        //   transmission: "Manual",
        //   fuel: "Diesel",
        //   price: "LKR 16,500/day",
        // },
      ],
    },
    {
      category: "Buses",
      items: [
        {
          name: "King Long",
          // images: [NB1, NB2],
          images: ["/bus/NB/nb1.jpg", "/bus/NB/nb2.jpg"],
          seats: 45,
          luggage: 12,
          transmission: "Manual",
          fuel: "Diesel",
          price: "$200",
        },
        {
          name: "Hino Bus",
          // images: [NC1, NC2, NC3, NC4, NC5],
          images: [
            "/bus/NC/nc1.jpg",
            "/bus/NC/nc2.jpg",
            "/bus/NC/nc3.jpg",
            "/bus/NC/nc4.jpg",
            "/bus/NC/nc5.jpg",
          ],
          seats: "29 & 33",
          luggage: 20,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "$120",
        },
        {
          name: "Hino Liesse II",
          // images: [NDB1, NDB2],
          images: ["/bus/NDB/ndb1.jpg", "/bus/NDB/ndb2.jpg"],
          seats: "29 & 33",
          luggage: 15,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "$120",
        },
        {
          name: "Toyota Coaster",
          // images: [NDY1, NDY2, NDY3, NDY4, NDY5, NDY6],
          images: [
            "/bus/NDY/ndy1.jpg",
            "/bus/NDY/ndy2.jpg",
            "/bus/NDY/ndy3.jpg",
            "/bus/NDY/ndy4.jpg",
            "/bus/NDY/ndy5.jpg",
            "/bus/NDY/ndy6.jpg",
          ],
          seats: "29 & 33",
          luggage: 18,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "$120",
        },
      ],
    },
  ];

  const openDrawer = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsDrawerOpen(true);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        <section
          ref={introRef}
          className="text-center py-8 bg-[#f4d35e] rounded-lg mb-24"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Hire Vehicles
          </h2>
          <p className="text-lg text-gray-700 max-w-auto px-4 mx-auto p-4">
            Discover the freedom of the road with our wide range of rental
            vehicles tailored to suit your every need. Whether you're planning a
            weekend getaway, a business trip, or simply need a temporary ride,
            we offer reliable and well-maintained cars, vans, and buses at
            competitive rates.
          </p>
        </section>

        {vehicles.map((category, index) => (
          <section
            key={index}
            ref={(el) => (vehicleSectionsRef.current[index] = el)}
            className="mb-20"
          >
            <h2 className="text-4xl font-semibold text-[#5c3d2e] text-center mb-6">
              {category.category}
              <span
                className="block w-24 h-1 bg-[#006D5B] mx-auto mt-3 rounded-full"
                aria-hidden="true"
              ></span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((vehicle, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-lg overflow-hidden vehicle-card"
                  onMouseEnter={(e) => handleCardHover(e.currentTarget)}
                  onMouseLeave={(e) => handleCardHoverLeave(e.currentTarget)}
                >
                  <img
                    src={
                      vehicle.images[0] ||
                      "https://via.placeholder.com/300x200?text=Vehicle+Image"
                    }
                    alt={vehicle.name}
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x200?text=Vehicle+Image";
                    }}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#5c3d2e] mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-gray-600">Seats: {vehicle.seats}</p>
                    <p className="text-gray-600">Price: {vehicle.price}</p>
                    <p className="text-gray-600">
                      Transmission: {vehicle.transmission}
                    </p>
                    <Button
                      text="View"
                      onClick={() => openDrawer(vehicle)}
                      className="mt-4 bg-[#f4d35e] text-[#5c3d2e] font-bold py-2 px-4 rounded-4xl hover:bg-[#e0c250] transition"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        {selectedVehicle && (
          <PopupSlider
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            title={selectedVehicle.name}
            images={selectedVehicle.images || []}
          />
        )}
        <section ref={ctaRef} className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Rent?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to book your vehicle and start your journey with Drive
            Lanka.
          </p>
          <Button
            text="Get in Touch"
            onClick={() => navigate("/contact-us")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4 bg-[#006D5B]"
          />
        </section>
      </div>
    </div>
  );
};

export default RentVehicles;
