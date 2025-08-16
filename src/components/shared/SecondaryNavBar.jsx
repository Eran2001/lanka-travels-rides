import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "../ui/Drawer";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";
import logoImg from "../../assets/images/logoOriginal.png";
const SecondaryNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const hamburgerRef = useRef(null);
  const drawerContentRef = useRef(null);

  useEffect(() => {
    anime({
      targets: logoRef.current,
      translateY: [50, 0],
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 800,
      easing: "easeOutElastic(1, 0.8)",
    });

    anime({
      targets: linksRef.current.slice(0, 5),
      translateY: [50, 0],
      scale: [0.85, 1],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 400 }),
      duration: 800,
      easing: "easeOutElastic(1, 0.6)",
    });

    anime({
      targets: hamburgerRef.current,
      translateY: [30, 0],
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 600,
      easing: "easeOutElastic(1, 0.6)",
    });
  }, []);

  useEffect(() => {
    if (isDrawerOpen && drawerContentRef.current) {
      anime({
        targets: drawerContentRef.current,
        translateX: ["100%", 0],
        opacity: [0, 1],
        duration: 500,
        easing: "easeOutQuad",
      });
      anime({
        targets: drawerContentRef.current.children,
        translateY: [40, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 200 }),
        duration: 600,
        easing: "easeOutElastic(1, 0.6)",
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
            {["Rent Vehicles", "Rent with Driver", "Self Drive"].map(
              (item, index) => (
                <NavLink
                  key={item}
                  to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className={({ isActive }) =>
                    `nav-link relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
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
              )
            )}
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
          className="flex flex-col space-y-3 text-[#5c3d2e]"
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
              ref={(el) => (linksRef.current[index + 5] = el)}
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
