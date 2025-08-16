import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "../ui/Drawer";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";
import logoImg from "../../assets/images/logoOriginal.png";
const SecondaryNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);
  const drawerLinksRef = useRef([]);
  const hamburgerRef = useRef(null);
  const drawerContentRef = useRef(null);

  useEffect(() => {
    // Logo animation - bounce in
    anime({
      targets: logoRef.current,
      translateY: [-40, 0],
      scale: [0.6, 1],
      rotate: [-10, 0],
      opacity: [0, 1],
      duration: 1200,
      easing: "easeOutElastic(1, 0.6)",
    });

    // Navbar links - stagger cascade
    anime({
      targets: navLinksRef.current.filter(Boolean),
      translateY: [-60, 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      rotate: [-5, 0],
      delay: anime.stagger(150, { start: 500 }), // smoother cascade
      duration: 900,
      easing: "easeOutBack", // softer bounce
    });

    // Hamburger - pop in
    anime({
      targets: hamburgerRef.current,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 700,
      delay: 1200,
      easing: "easeOutElastic(1, 0.7)",
    });
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      // Disable scroll when drawer is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll when drawer closes
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDrawerOpen]);

  // Add this useEffect below your existing anime effects
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
    if (isDrawerOpen && drawerContentRef.current) {
      anime({
        targets: drawerContentRef.current,
        translateX: ["100%", "0%"],
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      });

      anime({
        targets: drawerLinksRef.current.filter(Boolean),
        translateX: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(120, { start: 200 }),
        duration: 800,
        easing: "easeOutBack",
      });
    }
  }, [isDrawerOpen]);

  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      boxShadow: [
        "0 0 0 rgba(244, 211, 94, 0)",
        "0 0 12px rgba(244, 211, 94, 0.6)",
      ],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      boxShadow: [
        "0 0 12px rgba(244, 211, 94, 0.6)",
        "0 0 0 rgba(244, 211, 94, 0)",
      ],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <>
      <style>
        {`
          .nav-link::after, .nav-icon::after {
            content: '';
            position: absolute;
            width: 6px;
            height: 6px;
            background: #f4d35e;
            border-radius: 50%;
            opacity: 0;
            transform: scale(0);
            pointer-events: none;
          }
          .nav-link:hover::after, .nav-icon:hover::after {
            animation: sparkle 0.6s ease-out forwards;
          }
          @keyframes sparkle {
            0% { transform: scale(0); opacity: 0.7; }
            50% { transform: scale(1.5); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
          }
          .nav-link:hover::after {
            top: 10%;
            left: 90%;
          }
        `}
      </style>

      <nav className="w-full fixed top-14 max-xl:top-[28px] xl:top-[36px] z-[9999] bg-[#f4d35e] text-[#5c3d2e] shadow-md">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-around max-xl:justify-between">
          <NavLink
            to="/"
            ref={logoRef}
            className="font-bold text-xl relative"
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          >
            <img
              src={logoImg}
              alt="Drive Lanka Logo"
              className="relative h-8 w-auto"
            />
          </NavLink>

          <ul className="hidden xl:flex gap-4 items-center">
            {[
              "Home",
              "Services",
              "Clients",
              "About Us",
              "Contact Us",
              "Rent Vehicles",
              "Rent with Driver",
              "Self Drive",
            ].map((item, index) => (
              <NavLink
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/ /g, "-")}`
                }
                className={({ isActive }) =>
                  `nav-link relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#5c3d2e] text-[#f4d35e]"
                      : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
                  }`
                }
                ref={(el) => (navLinksRef.current[index] = el)}
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
              >
                {item}
              </NavLink>
            ))}
          </ul>

          <div className="xl:hidden">
            <RxHamburgerMenu
              ref={hamburgerRef}
              className="text-[#5c3d2e] w-6 h-6 cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            />
          </div>
        </div>
      </nav>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Drive Lanka"
        width="w-72"
      >
        <div
          ref={drawerContentRef}
          className="flex flex-col space-y-3 text-[#5c3d2e] max-w-full overflow-x-hidden"
        >
          {[
            "Home",
            "Services",
            "Clients",
            "About Us",
            "Contact Us",
            "Rent Vehicles",
            "Rent with Driver",
            "Self Drive",
          ].map((item, index) => (
            <NavLink
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(/ /g, "-")}`
              }
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                `nav-link px-4 py-3 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#5c3d2e] text-[#f4d35e]"
                    : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
                }`
              }
              ref={(el) => (drawerLinksRef.current[index] = el)}
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            >
              {item}
            </NavLink>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default SecondaryNavBar;
