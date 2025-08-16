import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

import aqua1 from "../../assets/car/AQUA/WhatsApp Image 2025-08-07 at 18.04.48_44e1fb58.jpg";
import aqua2 from "../../assets/car/AQUA/WhatsApp Image 2025-08-07 at 18.04.48_b090ba82.jpg";
import aqua3 from "../../assets/car/AQUA/WhatsApp Image 2025-08-07 at 18.04.48_de8861ee.jpg";
import aqua4 from "../../assets/car/AQUA/WhatsApp Image 2025-08-07 at 18.04.49_1ef79802.jpg";
import aqua5 from "../../assets/car/AQUA/WhatsApp Image 2025-08-07 at 18.04.49_234dc77b.jpg";
import aqua6 from "../../assets/car/AQUA/WhatsApp Image 2025-08-07 at 18.04.50_d723ce2b.jpg";

import bmw1 from "../../assets/car/BMW/WhatsApp Image 2025-08-07 at 18.04.19_64b2cac9.jpg";
import bmw2 from "../../assets/car/BMW/WhatsApp Image 2025-08-07 at 18.04.20_847e7faf.jpg";
import bmw3 from "../../assets/car/BMW/WhatsApp Image 2025-08-07 at 18.04.20_f7d7ff26.jpg";
import bmw4 from "../../assets/car/BMW/WhatsApp Image 2025-08-07 at 18.04.21_b50861e7.jpg";
import bmw5 from "../../assets/car/BMW/WhatsApp Image 2025-08-07 at 18.04.22_365d455d.jpg";

import hyb1 from "../../assets/car/HYB/WhatsApp Image 2025-08-07 at 18.04.38_68e6e943.jpg";
import hyb2 from "../../assets/car/HYB/WhatsApp Image 2025-08-07 at 18.04.38_b58ebbb0.jpg";
import hyb3 from "../../assets/car/HYB/WhatsApp Image 2025-08-07 at 18.04.38_c2f0000a.jpg";
import hyb4 from "../../assets/car/HYB/WhatsApp Image 2025-08-07 at 18.04.39_0e491901.jpg";

import PK1 from "../../assets/car/PK/WhatsApp Image 2025-08-07 at 18.04.13_9e22c1bf.jpg";
import PK2 from "../../assets/car/PK/WhatsApp Image 2025-08-07 at 18.04.13_cbc79d7d.jpg";
import PK3 from "../../assets/car/PK/WhatsApp Image 2025-08-07 at 18.04.14_16dc8ccc.jpg";
import PK4 from "../../assets/car/PK/WhatsApp Image 2025-08-07 at 18.04.14_e3de73a9.jpg";

import PH1 from "../../assets/car/PH/WhatsApp Image 2025-08-07 at 18.04.45_11be5029.jpg";
import PH2 from "../../assets/car/PH/WhatsApp Image 2025-08-07 at 18.04.46_34792509.jpg";
import PH3 from "../../assets/car/PH/WhatsApp Image 2025-08-07 at 18.04.46_7ef343ff.jpg";
import PH4 from "../../assets/car/PH/WhatsApp Image 2025-08-07 at 18.04.47_2d5795fe.jpg";
import PH5 from "../../assets/car/PH/WhatsApp Image 2025-08-07 at 18.04.47_57fef88f.jpg";
import PH6 from "../../assets/car/PH/WhatsApp Image 2025-08-07 at 18.04.47_a2a869e2.jpg";

import W_B1 from "../../assets/car/WBLACK/WhatsApp Image 2025-08-07 at 18.04.11_29d9893c.jpg";
import W_B2 from "../../assets/car/WBLACK/WhatsApp Image 2025-08-07 at 18.04.12_5a766a99.jpg";
import W_B3 from "../../assets/car/WBLACK/WhatsApp Image 2025-08-07 at 18.04.12_8723273a.jpg";
import W_B4 from "../../assets/car/WBLACK/WhatsApp Image 2025-08-07 at 18.04.12_d9f27e89.jpg";
import W_B5 from "../../assets/car/WBLACK/WhatsApp Image 2025-08-07 at 18.04.23_64a7244a.jpg";

import W_R1 from "../../assets/car/WRED/WhatsApp Image 2025-08-07 at 18.04.18_7073947c.jpg";
import W_R2 from "../../assets/car/WRED/WhatsApp Image 2025-08-07 at 18.04.18_c30f69f5.jpg";
import W_R3 from "../../assets/car/WRED/WhatsApp Image 2025-08-07 at 18.04.18_cf0eaf1b.jpg";
import W_R4 from "../../assets/car/WRED/WhatsApp Image 2025-08-07 at 18.04.19_d9aa7b06.jpg";

// Buses
import NB1 from "../../assets/bus/NB/WhatsApp Image 2025-08-07 at 18.04.09_cf33d57d.jpg";
import NB2 from "../../assets/bus/NB/WhatsApp Image 2025-08-07 at 18.04.20_5cf13add.jpg";

import NC1 from "../../assets/bus/NC/WhatsApp Image 2025-08-07 at 18.04.10_d7638fcf.jpg";
import NC2 from "../../assets/bus/NC/WhatsApp Image 2025-08-07 at 18.04.10_e609161d.jpg";
import NC3 from "../../assets/bus/NC/WhatsApp Image 2025-08-07 at 18.04.11_2760e859.jpg";
import NC4 from "../../assets/bus/NC/WhatsApp Image 2025-08-07 at 18.04.11_4d400cfd.jpg";
import NC5 from "../../assets/bus/NC/WhatsApp Image 2025-08-07 at 18.04.23_27c70f87.jpg";

import NDB1 from "../../assets/bus/NDB/WhatsApp Image 2025-08-07 at 18.04.13_3b5f75b7.jpg";
import NDB2 from "../../assets/bus/NDB/WhatsApp Image 2025-08-07 at 18.04.28_c10e979a.jpg";

import NDY1 from "../../assets/bus/NDY/WhatsApp Image 2025-08-07 at 18.04.15_25a645f1.jpg";
import NDY2 from "../../assets/bus/NDY/WhatsApp Image 2025-08-07 at 18.04.15_1cd4ff09.jpg";
import NDY3 from "../../assets/bus/NDY/WhatsApp Image 2025-08-07 at 18.04.29_ad3d2288.jpg";
import NDY4 from "../../assets/bus/NDY/WhatsApp Image 2025-08-07 at 18.04.29_f8370432.jpg";
import NDY5 from "../../assets/bus/NDY/WhatsApp Image 2025-08-07 at 18.04.30_45861e33.jpg";
import NDY6 from "../../assets/bus/NDY/WhatsApp Image 2025-08-07 at 18.04.30_f0fbf077.jpg";

// Vans
import PB1 from "../../assets/van/PB/WhatsApp Image 2025-08-07 at 18.04.32_87706bbf.jpg";
import PB2 from "../../assets/van/PB/WhatsApp Image 2025-08-07 at 18.04.33_16b0f1ea.jpg";
import PB3 from "../../assets/van/PB/WhatsApp Image 2025-08-07 at 18.04.34_8584efdc.jpg";

import PC1 from "../../assets/van/PC/WhatsApp Image 2025-08-07 at 18.04.22_c6909b8c.jpg";
import PC2 from "../../assets/van/PC/WhatsApp Image 2025-08-07 at 18.04.32_52a49ca1.jpg";

import PD1 from "../../assets/van/PD/WhatsApp Image 2025-08-07 at 18.04.34_66afb912.jpg";
import PD2 from "../../assets/van/PD/WhatsApp Image 2025-08-07 at 18.04.34_8b963c69.jpg";
import PD3 from "../../assets/van/PD/WhatsApp Image 2025-08-07 at 18.04.36_3fb9c1a6.jpg";
import PD4 from "../../assets/van/PD/WhatsApp Image 2025-08-07 at 18.04.36_774e9aa1.jpg";

import PE1 from "../../assets/van/PE/WhatsApp Image 2025-08-07 at 18.04.15_b4ecf4b4.jpg";
import PE2 from "../../assets/van/PE/WhatsApp Image 2025-08-07 at 18.04.16_02e42633.jpg";
import PE3 from "../../assets/van/PE/WhatsApp Image 2025-08-07 at 18.04.16_5219d9ec.jpg";
import PE4 from "../../assets/van/PE/WhatsApp Image 2025-08-07 at 18.04.16_d254f2c6.jpg";
import PE5 from "../../assets/van/PE/WhatsApp Image 2025-08-07 at 18.04.17_f5f7f740.jpg";
import PE6 from "../../assets/van/PE/WhatsApp Image 2025-08-07 at 18.04.30_d3c581ac.jpg";

import PJ1 from "../../assets/van/PJ/WhatsApp Image 2025-08-07 at 18.04.17_8dd58e8f.jpg";
import PJ2 from "../../assets/van/PJ/WhatsApp Image 2025-08-07 at 18.04.17_cef54a6d.jpg";
import PJ3 from "../../assets/van/PJ/WhatsApp Image 2025-08-07 at 18.04.31_ad2e8eaf.jpg";

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
          images: [aqua1, aqua2, aqua3, aqua4, aqua5, aqua6],
          seats: 5,
          luggage: 2,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 10,000/day",
        },
        {
          name: "BMW 320i",
          images: [bmw1, bmw2, bmw3, bmw4, bmw5],
          seats: 5,
          luggage: 2,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "LKR 11,000/day",
        },
        {
          name: "Honda Fit Shuttle Hybrid",
          images: [hyb1, hyb2, hyb3, hyb4],
          seats: 5,
          luggage: 2,
          transmission: "Manual",
          fuel: "Petrol",
          price: "LKR 9,500/day",
        },
        {
          name: "Suzuki Every",
          images: [PH1, PH2, PH3, PH4, PH5, PH6],
          seats: 5,
          luggage: 2,
          transmission: "Automatic",
          fuel: "Hybrid",
          price: "LKR 12,000/day",
        },
        {
          name: "Suzuki Every",
          images: [PK1, PK2, PK3, PK4],
          seats: 4,
          luggage: 1,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 18,000/day",
        },
        {
          name: "Suzuki Stingray",
          images: [W_B1, W_B2, W_B3, W_B4, W_B5],
          seats: 4,
          luggage: 1,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 25,000/day",
        },
        {
          name: "Suzuki Wagon R",
          images: [W_R1, W_R2, W_R3, W_R4],
          seats: 4,
          luggage: 1,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 25,000/day",
        },
      ],
    },
    {
      category: "Vans",
      items: [
        {
          name: "Toyota HiAce Super GL",
          images: [PB1, PB2, PB3],
          seats: 12,
          luggage: 6,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "LKR 15,000/day",
        },
        {
          name: "Toyota HiAce Commuter",
          images: [PC1, PC2],
          seats: 15,
          luggage: 8,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 16,000/day",
        },
        {
          name: "Nissan Caravan",
          images: [PD1, PD2, PD3, PD4],
          seats: 10,
          luggage: 5,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 14,000/day",
        },
        {
          name: "Toyota HiAce KDH",
          images: [PE1, PE2, PE3, PE4, PE5, PE6],
          seats: 14,
          luggage: 7,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 15,500/day",
        },
        {
          name: "Ford Transit",
          images: [PJ1, PJ2, PJ3],
          seats: 15,
          luggage: 8,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 16,500/day",
        },
      ],
    },
    {
      category: "Buses",
      items: [
        {
          name: "King Long",
          images: [NB1, NB2],
          seats: 22,
          luggage: 12,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 25,000/day",
        },
        {
          name: "Hino Bus",
          images: [NC1, NC2, NC3, NC4, NC5],
          seats: 35,
          luggage: 20,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "LKR 30,000/day",
        },
        {
          name: "Hino Liesse II",
          images: [NDB1, NDB2],
          seats: 29,
          luggage: 15,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 28,000/day",
        },
        {
          name: "Toyota Coaster",
          images: [NDY1, NDY2, NDY3, NDY4, NDY5, NDY6],
          seats: 30,
          luggage: 18,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 29,500/day",
        },
      ],
    },
  ];

  const openDrawer = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        <section
          ref={introRef}
          className="text-center py-8 bg-[#f4d35e] rounded-lg mb-24"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Rent Vehicles
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
            className="mb-42"
          >
            <h2 className="text-3xl font-semibold text-[#5c3d2e] text-start mb-6">
              {category.category}
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
                    className="w-full h-48 object-cover"
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
                    <p className="text-gray-600">
                      Luggage: {vehicle.luggage} bags
                    </p>
                    <p className="text-gray-600">Price: {vehicle.price}</p>
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
            onClick={() => navigate("/contact")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4 bg-[#006D5B]"
          />
        </section>
      </div>
    </div>
  );
};

export default RentVehicles;
