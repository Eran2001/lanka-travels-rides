import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "../ui/Drawer";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const SecondaryNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const hamburgerRef = useRef(null);
  const drawerContentRef = useRef(null);

  useEffect(() => {
    // Logo animation (bounce-in)
    anime({
      targets: logoRef.current,
      translateY: [50, 0],
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutElastic(1, 0.8)",
    });

    // Desktop nav links animation (staggered bounce-in)
    anime({
      targets: linksRef.current.slice(0, 5),
      translateX: [50, 0],
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 400 }),
      duration: 600,
      easing: "easeOutQuad",
    });
  }, []);

  // Drawer animation when opened
  useEffect(() => {
    if (isDrawerOpen) {
      anime({
        targets: drawerContentRef.current.children,
        translateY: [50, 0],
        scale: [0.85, 1],
        opacity: [0, 1],
        delay: anime.stagger(120, { start: 200 }),
        duration: 700,
        easing: "easeOutElastic(1, 0.9)",
      });
    }
  }, [isDrawerOpen]);

  // Hover animation for logo, desktop links, and hamburger
  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.15],
      rotate: ["0deg", "5deg"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.15, 1],
      rotate: ["5deg", "0deg"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  // Drawer link hover animation (no rotation)
  const handleDrawerHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.1],
      backgroundColor: ["#f4d35e", "#5c3d2e"],
      color: ["#5c3d2e", "#f4d35e"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleDrawerHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.1, 1],
      backgroundColor: ["#5c3d2e", "#f4d35e"],
      color: ["#f4d35e", "#5c3d2e"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <>
      <nav className="w-full fixed z-[10000] top-9 max-xl:top-5 bg-[#f4d35e] flex justify-between items-center px-6 py-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[#5c3d2e] font-bold text-xl ${
              isActive
                ? ""
                : " hover:text-[#5c3d2e] transition-all duration-200"
            }`
          }
          ref={logoRef}
          onMouseEnter={(e) => handleHover(e.currentTarget)}
          onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
        >
          Drive Lanka
        </NavLink>

        {/* Desktop Links */}
        <ul className="flex max-xl:hidden gap-4">
          {[
            "Rent Vehicles",
            "Rent with Driver",
            "Self Drive",
            "FAQs",
            "Special Offers",
          ].map((item, index) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase().replace(" ", "-")}`}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium text-[#5c3d2e] transition-all duration-200 ${
                  isActive
                    ? "bg-[#5c3d2e] text-[#f4d35e]"
                    : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
                }`
              }
              ref={(el) => (linksRef.current[index] = el)}
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            >
              {item}
            </NavLink>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="xl:hidden">
          <RxHamburgerMenu
            ref={hamburgerRef}
            className="text-[#5c3d2e] w-6 h-6 cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          />
        </div>
      </nav>

      {/* Drawer for Mobile */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Drive Lanka"
        width="w-70"
      >
        <div
          ref={drawerContentRef}
          className="flex flex-col space-y-1 max-lg:space-y-4 text-[#5c3d2e]"
        >
          {[
            "Home",
            "Services",
            "Clients",
            "Our Blog",
            "About Us",
            "Contact Us",
            "Rent Vehicles",
            "Rent with Driver",
            "Self Drive",
            "FAQs",
            "Special Offers",
          ].map((item, index) => (
            <NavLink
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "-")}`
              }
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#5c3d2e] text-[#f4d35e]"
                    : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
                }`
              }
              ref={(el) => (linksRef.current[index + 5] = el)}
              onMouseEnter={(e) => handleDrawerHover(e.currentTarget)}
              onMouseLeave={(e) => handleDrawerHoverLeave(e.currentTarget)}
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
