import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const SecondaryNavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Left - Language Dropdown */}
        <div>
          <select className="bg-transparent text-white border border-white rounded px-2 py-1 text-sm focus:outline-none">
            <option>English</option>
          </select>
        </div>

        {/* Center - Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/images/newLogo.jpg"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </NavLink>

        {/* Right - Contact Numbers + Button */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col text-right text-white text-sm">
            <span>+94 77 790 0734</span>
            <span>+94 77 790 0720</span>
          </div>
          <NavLink
            to="/contact-us"
            className="bg-[#5c3d2e] text-white px-4 py-2 rounded-md hover:bg-[#4a3023] transition"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default SecondaryNavBar;
