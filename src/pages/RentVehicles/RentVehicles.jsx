import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Loading from "@/components/ui/Loading";

const RentVehicles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          name: "BMW M5",
          image:
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",
          seats: 5,
          luggage: 2,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 10,000/day",
        },
        {
          name: "Mercedes Benz CLK",
          image: "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
          seats: 5,
          luggage: 2,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "LKR 11,000/day",
        },
        {
          name: "Hyundai i20",
          image:
            "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/pc/i20_Modelpc.png",
          seats: 5,
          luggage: 2,
          transmission: "Manual",
          fuel: "Petrol",
          price: "LKR 9,500/day",
        },
        {
          name: "Toyota Corolla",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
          seats: 5,
          luggage: 2,
          transmission: "Automatic",
          fuel: "Hybrid",
          price: "LKR 12,000/day",
        },
        {
          name: "Ford Mustang",
          image:
            "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/electrification/desktop/2024-Mustang-06_43.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
          seats: 4,
          luggage: 1,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 18,000/day",
        },
        {
          name: "Mercedes-AMG GT",
          image:
            "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/amg-gt-class/2-door/all-vehicles/2024-AMG-GT55-COUPE-AVP-DR.png",
          seats: 4,
          luggage: 1,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 25,000/day",
        },
      ],
    },
    {
      category: "SUVs",
      items: [
        {
          name: "Renault Scenic",
          image:
            "https://car-images.bauersecure.com/wp-images/2697/best-electric-cars-2025-renault-scenic-white-front-driving.jpg",
          seats: 5,
          luggage: 4,
          transmission: "Automatic",
          fuel: "Electric",
          price: "LKR 15,000/day",
        },
        {
          name: "Nissan Qashqai",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExUlWBZy1sjH6N4-ai4oZ2U7ycqhl8iKXrscI2x_OfDuGUc7pNw7j5UfQ2m8A2TpQJxM&usqp=CAU",
          seats: 5,
          luggage: 4,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 14,500/day",
        },
        {
          name: "Nissan Ariya",
          image:
            "https://www.usnews.com/cmsmedia/e4/66/c32525ba4ccdbddfcaa5aaf9eb18/2025ariyamain.jpg",
          seats: 5,
          luggage: 4,
          transmission: "Automatic",
          fuel: "Electric",
          price: "LKR 16,000/day",
        },
        {
          name: "Nissan X-Trail",
          image:
            "https://auto.hindustantimes.com/htmobile1/nissan_xtrail/images/exterior_nissan-x-trail_front-left-side_600x400.jpg?imwidth=420",
          seats: 7,
          luggage: 5,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 17,000/day",
        },
        {
          name: "BMW X5",
          image:
            "https://static.motorway.co.uk/static/assets_seller/hero-bmw-blue.b05b6c811a4915f7813d.png",
          seats: 5,
          luggage: 4,
          transmission: "Automatic",
          fuel: "Petrol",
          price: "LKR 20,000/day",
        },
        {
          name: "Hyundai Creta",
          image:
            "https://img.autocarindia.com/ExtraImages/20241205062334_20240606032223_Creta%20showroom%20shot%20_1_.jpg",
          seats: 5,
          luggage: 4,
          transmission: "Manual",
          fuel: "Petrol",
          price: "LKR 13,500/day",
        },
      ],
    },
    {
      category: "Vans",
      items: [
        {
          name: "Toyota HiAce",
          image: "https://deyotours.com/wp-content/uploads/2022/09/Big-Van.jpg",
          seats: 12,
          luggage: 6,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 20,000/day",
        },
        {
          name: "Nissan Caravan",
          image:
            "https://cdn-cmaji.nitrocdn.com/KIFZgOjkuClQKBjYuclpHfqgfzwfBwhH/assets/images/optimized/rev-f894972/mysltravel.com/wp-content/uploads/2022/08/download-8-1.jpg",
          seats: 10,
          luggage: 5,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 18,000/day",
        },
        {
          name: "Ford Transit",
          image:
            "https://m.atcdn.co.uk/ect/media/w600/257ab3687b2c4c0bbeda6df951f5fc65.jpg",
          seats: 15,
          luggage: 8,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 22,000/day",
        },
        {
          name: "Explorer Van",
          image:
            "https://www.explorervan.com/wp-content/uploads/2025/05/20250502_1140_Van-on-Highway-Sunrise_remix_01jt8tdqc8efza0cz0fcvn77qb-1024x683.png",
          seats: 12,
          luggage: 6,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "LKR 21,000/day",
        },
        {
          name: "Maruti Suzuki Ecco",
          image:
            "https://5.imimg.com/data5/SELLER/Default/2022/9/FG/PL/LB/159526868/maruti-suzuki-ecco-van.jpg",
          seats: 8,
          luggage: 4,
          transmission: "Manual",
          fuel: "Petrol",
          price: "LKR 16,000/day",
        },
        {
          name: "Toyota Commuter",
          image:
            "https://www.casons.lk/thumbnailer.php?url=https://lrnawbodbhe5.objectstorage.uk-london-1.oci.customer-oci.com/p/wu2xha0pJLtGGKV3DjZMer1qsOsjrkKx5tWZK2krsza1dvQdDoOZvqNSQLjcG8sk/n/lrnawbodbhe5/b/ImageStorage/o/casons.lk/VehicleModelmodel/27/thumbnail.png",
          seats: 14,
          luggage: 7,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 19,500/day",
        },
      ],
    },
    {
      category: "Strong Vehicles",
      items: [
        {
          name: "Toyota Land Cruiser",
          image:
            "https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg",
          seats: 7,
          luggage: 5,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "LKR 25,000/day",
        },
        {
          name: "Volvo Coach",
          image:
            "https://www.volvobuses.com/content/dam/volvo-buses/markets/global/classic/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg",
          seats: 40,
          luggage: 15,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 35,000/day",
        },
        {
          name: "Tata Bus",
          image: "https://gos3.ibcdn.com/img-1713444352.jpg",
          seats: 35,
          luggage: 12,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 32,000/day",
        },
        {
          name: "JCBL School Bus",
          image:
            "https://jcbl.com/jcbl-images/products/school-bus/school-bus-front-1.jpg",
          seats: 50,
          luggage: 20,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 40,000/day",
        },
        {
          name: "Luxury Coach",
          image:
            "https://www.bus.com/wp-content/themes/redesign/assets/images/home/hero-800.webp",
          seats: 45,
          luggage: 18,
          transmission: "Automatic",
          fuel: "Diesel",
          price: "LKR 38,000/day",
        },
        {
          name: "Mitsubishi Rosa",
          image:
            "https://lesscarmorelife.com/wp-content/uploads/2023/03/img_6042-1.jpg?w=1024",
          seats: 25,
          luggage: 10,
          transmission: "Manual",
          fuel: "Diesel",
          price: "LKR 30,000/day",
        },
      ],
    },
  ];

  const openModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
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
            we offer reliable and well-maintained cars, vans, and SUVs at
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
                    src={vehicle.image}
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
                      onClick={() => openModal(vehicle)}
                      className="mt-4 bg-[#f4d35e] text-[#5c3d2e] font-bold py-2 px-4 rounded-4xl hover:bg-[#e0c250] transition"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
        {selectedVehicle && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={selectedVehicle.name}
          >
            <div className="p-4">
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200?text=Vehicle+Image";
                }}
              />
              <p className="text-gray-600 mb-2">
                <strong>Seats:</strong> {selectedVehicle.seats}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Luggage:</strong> {selectedVehicle.luggage} bags
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Transmission:</strong> {selectedVehicle.transmission}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Fuel:</strong> {selectedVehicle.fuel}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Price:</strong> {selectedVehicle.price}
              </p>
              <Button
                text="Book Now"
                onClick={() => navigate("/payments")}
                className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4 bg-[#006D5B]"
              />
            </div>
          </Modal>
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
