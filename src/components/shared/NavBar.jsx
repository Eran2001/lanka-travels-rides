import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhone, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "../ui/Drawer";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contactRef = useRef(null);
  const linksRef = useRef([]);
  const hamburgerRef = useRef(null);
  const drawerContentRef = useRef(null);

  useEffect(() => {
    // Handle scroll effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    // Contact info animation (bounce-in)
    anime({
      targets: contactRef.current.children,
      translateY: [50, 0],
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: anime.stagger(150, { start: 200 }),
      duration: 800,
      easing: "easeOutElastic(1, 0.8)",
    });

    // Desktop nav links animation (sequential fade and scale)
    anime({
      targets: linksRef.current.slice(0, 6),
      translateX: [-50, 0],
      scale: [0.9, 1],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 400 }),
      duration: 600,
      easing: "easeOutQuad",
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Drawer animation when opened
  useEffect(() => {
    if (isDrawerOpen) {
      anime({
        targets: drawerContentRef.current.children,
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 200 }),
        duration: 500,
        easing: "easeOutQuad",
      });
    }
  }, [isDrawerOpen]);

  // Hover animation for icons and links
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

  return (
    <>
      <nav
        className={`flex justify-around items-center fixed top-0 w-full z-[10000] transition-colors duration-300 ${
          isScrolled ? "bg-[#f9f5e3] text-[#5c3d2e]" : "bg-[#006D5B] text-white"
        }`}
      >
        <div>
          <ul
            ref={contactRef}
            className="flex justify-center items-center gap-4"
          >
            <li className="flex items-center space-x-2">
              <FaPhone
                className="w-4 h-4"
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
              />
              <span className="text-sm">
                Contact: +94 77 790 0734 / +94 77 790 0720
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <IoMail
                className="w-4 h-4 max-sm:hidden"
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
              />
              <span className="text-sm max-sm:hidden">
                Lankatravelrides@gmail.com
              </span>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="w-4 h-4 hover:text-[#f4d35e] transition-colors duration-200"
                  onMouseEnter={(e) => handleHover(e.currentTarget)}
                  onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
                />
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://www.instagram.com/lankatravelrides?igsh=aDlobXhwdjg5aW1t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="w-4 h-4 hover:text-[#f4d35e] transition-colors duration-200"
                  onMouseEnter={(e) => handleHover(e.currentTarget)}
                  onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden xl:flex justify-center items-center gap-4">
          {[
            "Home",
            "Services",
            "Clients",
            "blogs",
            "About Us",
            "Contact Us",
          ].map((item, index) => (
            <NavLink
              key={item}
              to={
                item === "Home"
                  ? "/"
                  : `/${item.toLowerCase().replace(" ", "")}`
              }
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive ? "text-[#f4d35e]" : "hover:text-[#f4d35e]"
                }`
              }
              ref={(el) => (linksRef.current[index] = el)}
              onMouseEnter={(e) => handleHover(e.currentTarget)}
              onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
            >
              {item}
            </NavLink>
          ))}
        </div>
        <div className="xl:hidden flex justify-end p-4">
          <RxHamburgerMenu
            ref={hamburgerRef}
            onClick={() => setIsDrawerOpen(true)}
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={(e) => handleHover(e.currentTarget)}
            onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
          />
        </div>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title="Drive Lanka"
          width="w-80"
        >
          <div
            ref={drawerContentRef}
            className="flex flex-col space-y-4 text-[#5c3d2e]"
          >
            {[
              "Home",
              "Services",
              "Clients",
              "blogs",
              "About Us",
              "Contact Us",
            ].map((item, index) => (
              <NavLink
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(" ", "")}`
                }
                onClick={() => setIsDrawerOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#f4d35e] text-[#5c3d2e] underline"
                      : "hover:bg-[#f4d35e] hover:text-[#5c3d2e] hover:underline"
                  }`
                }
                ref={(el) => (linksRef.current[index + 6] = el)}
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
              >
                {item}
              </NavLink>
            ))}
          </div>
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
