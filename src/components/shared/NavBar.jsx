import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaPhone, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

const NavBar = () => {
  const contactRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    anime({
      targets: contactRef.current?.children,
      translateY: [100, 0],
      scale: [0.8, 1],
      opacity: [0, 1],
      delay: anime.stagger(150, { start: 200 }),
      duration: 1000,
      easing: "easeOutElastic(1, 0.5)",
    });

    anime({
      targets: linksRef.current,
      translateY: [80, 0],
      scale: [0.85, 1],
      opacity: [0, 1],
      delay: anime.stagger(100, { start: 400 }),
      duration: 800,
      easing: "easeOutElastic(1, 0.5)",
    });
  }, []);

  const handleHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      boxShadow: [
        "0 0 0 rgba(244, 211, 94, 0)",
        "0 0 15px rgba(244, 211, 94, 0.7)",
      ],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  const handleHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      boxShadow: [
        "0 0 15px rgba(244, 211, 94, 0.7)",
        "0 0 0 rgba(244, 211, 94, 0)",
      ],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };

  return (
    <>
      <style>
        {`
          .navbar {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 10000;
            background-color: #006D5B;
            color: white;
            overflow: hidden;
          }
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
          .nav-icon:hover::after {
            top: 20%;
            left: 80%;
          }
        `}
      </style>

      <nav className="navbar">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-1 flex items-center justify-between max-xl:justify-center gap-4 overflow-x-auto whitespace-nowrap">
          <ul
            ref={contactRef}
            className="flex items-center gap-6 text-sm shrink-0"
          >
            <li className="flex items-center gap-1 nav-icon">
              <FaPhone
                className="w-4 h-4"
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
              />
              <span>+94 77 790 0734 / +94 77 790 0720</span>
            </li>
            <li className="flex items-center gap-1 nav-icon hidden sm:flex">
              <IoMail
                className="w-4 h-4"
                onMouseEnter={(e) => handleHover(e.currentTarget)}
                onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
              />
              <span>Lankatravelrides@gmail.com</span>
            </li>
            <li className="nav-icon">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="w-4 h-4 hover:text-[#f4d35e]"
                  onMouseEnter={(e) => handleHover(e.currentTarget)}
                  onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
                />
              </a>
            </li>
            <li className="nav-icon">
              <a
                href="https://www.instagram.com/lankatravelrides?igsh=aDlobXhwdjg5aW1t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="w-4 h-4 hover:text-[#f4d35e]"
                  onMouseEnter={(e) => handleHover(e.currentTarget)}
                  onMouseLeave={(e) => handleHoverLeave(e.currentTarget)}
                />
              </a>
            </li>
          </ul>

          <div className="hidden xl:flex items-center gap-6 shrink-0">
            {["Home", "Services", "Clients", "blogs", "about", "contact"].map(
              (item, index) => (
                <NavLink
                  key={item}
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`
                  }
                  className={({ isActive }) =>
                    `nav-link px-2 py-1 text-sm font-medium relative ${
                      isActive ? "text-[#f4d35e]" : "hover:text-[#f4d35e]"
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
