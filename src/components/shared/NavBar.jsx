import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import Drawer from "../ui/Drawer";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={` flex justify-around items-center fixed top-0 w-full z-[10000] transition-colors duration-300 ${
          isScrolled ? "bg-[#f9f5e3] text-[#5c3d2e]" : "bg-[#006D5B] text-white"
        }`}
      >
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li className="flex items-center space-x-2 max-sm:hidden">
              <FaPhone className="w-4 h-4" />
              <span className="text-sm">
                Contact our support team: +94 (77) 790 0734
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <IoMail className="w-4 h-4" />
              <span className="text-sm">info@drivelanka.com</span>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-4 h-4 hover:text-[#f4d35e] transition-colors duration-200" />
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="w-4 h-4 hover:text-[#f4d35e] transition-colors duration-200" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden xl:flex justify-center items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive ? "text-[#f4d35e] " : "hover:text-[#f4d35e]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive ? "text-[#f4d35e] " : "hover:text-[#f4d35e]"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/clients"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive ? "text-[#f4d35e] " : "hover:text-[#f4d35e]"
              }`
            }
          >
            Clients
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive ? "text-[#f4d35e] " : "hover:text-[#f4d35e]"
              }`
            }
          >
            Our Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive ? "text-[#f4d35e] " : "hover:text-[#f4d35e]"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive ? "text-[#f4d35e] " : "hover:text-[#f4d35e]"
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger Icon */}
        {/* <div className="xl:hidden flex justify-end p-4">
          <RxHamburgerMenu
            onClick={() => setIsDrawerOpen(true)}
            className="w-6 h-6 cursor-pointer"
          />
        </div> */}

        {/* Mobile Drawer */}
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title="Drive Lanka"
          width="w-80"
        >
          <div className="flex flex-col space-y-4 text-[#5c3d2e]">
            <NavLink
              to="/"
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                `px-4 py-1 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#f4d35e] text-[#5c3d2e] underline"
                    : "hover:bg-[#f4d35e] hover:text-[#5c3d2e] hover:underline"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#f4d35e] text-[#5c3d2e] underline"
                    : "hover:bg-[#f4d35e] hover:text-[#5c3d2e] hover:underline"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/clients"
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#f4d35e] text-[#5c3d2e] underline"
                    : "hover:bg-[#f4d35e] hover:text-[#5c3d2e] hover:underline"
                }`
              }
            >
              Clients
            </NavLink>
            <NavLink
              to="/blogs"
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#f4d35e] text-[#5c3d2e] underline"
                    : "hover:bg-[#f4d35e] hover:text-[#5c3d2e] hover:underline"
                }`
              }
            >
              Our Blog
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#f4d35e] text-[#5c3d2e] underline"
                    : "hover:bg-[#f4d35e] hover:text-[#5c3d2e] hover:underline"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsDrawerOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#f4d35e] text-[#5c3d2e] underline"
                    : "hover:bg-[#f4d35e] hover:text-[#5c3d2e] hover:underline"
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </Drawer>
      </nav>
    </>
  );
};

export default NavBar;
