import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi"; // added down arrow
import Drawer from "../ui/Drawer";
import Button from "../ui/Button";

const SecondaryNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dayToursOpen, setDayToursOpen] = useState(false); // dropdown state for desktop
  const [mobileDayToursOpen, setMobileDayToursOpen] = useState(false); // dropdown state for mobile
  const location = useLocation();

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-9999 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-md"
            : location.pathname === "/"
            ? "bg-transparent"
            : "bg-black/80 backdrop-blur-md shadow-md"
        }`}
      >
        {/* Top Section */}
        <div className="container mx-auto relative flex items-center justify-between py-8 px-4">
          {/* Left - Language Dropdown */}
          <div className="relative inline-block z-10">
            <select className="bg-transparent text-white border border-white cursor-pointer rounded pl-6 pr-10 py-2 max-sm:pl-3 max-sm:pr-8 text-md max-sm:text-sm focus:outline-none appearance-none">
              <option>English</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white">
              ▼
            </div>
          </div>

          {/* Center - Logo */}
          <NavLink
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center max-lg:hidden rounded-md"
          >
            <img
              src="/images/lastLogo.jpg"
              alt="Logo"
              className="h-20 w-auto object-contain rounded-md"
            />
          </NavLink>

          {/* Right - Contact Numbers + Button */}
          <div className="flex items-center gap-4 z-10">
            <div className="flex items-center gap-3 text-white text-md max-sm:text-sm max-sm:hidden">
              <span>+94 76 597 2177</span>
              <span>|</span>
              <span>+94 77 790 0720</span>
            </div>

            <NavLink to="/contact-us">
              <Button text="CONTACT US" />
            </NavLink>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto flex items-center justify-center px-4 h-16 max-lg:h-20 relative">
          {/* Left - Logo (only on mobile) */}
          <NavLink
            to="/"
            className="flex items-center lg:hidden rounded-md absolute left-4"
          >
            <img
              src="/images/lastLogo.jpg"
              alt="Logo"
              className="h-20 w-auto object-contain rounded-md"
            />
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-6 items-center text-white font-medium">
            {[
              "HOME",
              "WHAT WE OFFER",
              "DISCOVER SRI LANKA",
              "EXPLORE TOURS",
              "DAY TOURS",
              "CHECK OUT OUR FLEET",
              "ABOUT US",
              "CONTACT US",
            ].map((item) =>
              item === "DAY TOURS" ? (
                <div
                  key={item}
                  className="relative group"
                  onMouseEnter={() => setDayToursOpen(true)}
                  onMouseLeave={() => setDayToursOpen(false)}
                >
                  <button
                    onClick={() => setDayToursOpen((prev) => !prev)}
                    className={`${
                      location.pathname === "/day-tours/ella-day-tour" ||
                      location.pathname === "/day-tours/kandy-day-tour"
                        ? "text-light bg-primary"
                        : "hover:bg-white/20"
                    } flex items-center gap-1 px-3 py-2 rounded-md max-xl:text-xs xl:text-md cursor-pointer  transition`}
                  >
                    {item}
                    <FiChevronDown
                      className={`transition-transform ${
                        dayToursOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {dayToursOpen && (
                    <div className="absolute top-full left-0 bg-black/90 backdrop-blur-md rounded-md shadow-md flex flex-col">
                      <NavLink
                        to="/day-tours/ella-day-tour"
                        className="px-4 py-2 w-40 hover:bg-white/20 cursor-pointer"
                        onClick={() => setDayToursOpen(false)}
                      >
                        Ella Day Tour
                      </NavLink>
                      <NavLink
                        to="/day-tours/kandy-day-tour"
                        className="px-4 py-2 w-40 hover:bg-white/20 cursor-pointer"
                        onClick={() => setDayToursOpen(false)}
                      >
                        Kandy Day Tour
                      </NavLink>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item}
                  to={
                    item === "HOME"
                      ? "/"
                      : `/${item.toLowerCase().replace(/ /g, "-")}`
                  }
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md max-xl:text-xs xl:text-md transition ${
                      isActive ? "text-light bg-primary" : "hover:bg-white/20"
                    }`
                  }
                >
                  {item}
                </NavLink>
              )
            )}
          </ul>

          {/* Mobile Hamburger */}
          <div className="lg:hidden absolute right-4">
            <RxHamburgerMenu
              className="text-white w-7 h-7 cursor-pointer"
              onClick={() => setIsDrawerOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Menu"
        width="w-72"
      >
        <div className="flex flex-col space-y-3 text-text">
          {[
            "HOME",
            "WHAT WE OFFER",
            "DISCOVER SRI LANKA",
            "EXPLORE TOURS",
            "DAY TOURS",
            "CHECK OUT OUR FLEET",
            "ABOUT US",
            "CONTACT US",
          ].map((item) =>
            item === "DAY TOURS" ? (
              <div key={item} className="flex flex-col">
                <button
                  onClick={() => setMobileDayToursOpen((prev) => !prev)}
                  className="flex items-center justify-between px-4 py-3 rounded-md text-base font-medium cursor-pointer hover:bg-blue-100"
                >
                  {item}
                  <FiChevronDown
                    className={`transition-transform ${
                      mobileDayToursOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDayToursOpen && (
                  <div className="ml-6 flex flex-col space-y-2">
                    <NavLink
                      to="/day-tours/ella-day-tour"
                      onClick={() => setIsDrawerOpen(false)}
                      className="px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-100"
                    >
                      Ella Day Tour
                    </NavLink>
                    <NavLink
                      to="/day-tours/kandy-day-tour"
                      onClick={() => setIsDrawerOpen(false)}
                      className="px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-100"
                    >
                      Kandy Day Tour
                    </NavLink>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item}
                to={
                  item === "HOME"
                    ? "/"
                    : `/${item.toLowerCase().replace(/ /g, "-")}`
                }
                onClick={() => setIsDrawerOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md text-base font-medium ${
                    isActive ? "bg-primary text-white" : "hover:bg-blue-100"
                  }`
                }
              >
                {item}
              </NavLink>
            )
          )}
        </div>
      </Drawer>
    </>
  );
};

export default SecondaryNavBar;
