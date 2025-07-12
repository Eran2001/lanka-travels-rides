import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "../ui/Drawer";

const SecondaryNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        >
          Drive Lanka
        </NavLink>

        {/* Desktop Links */}
        <ul className="flex max-xl:hidden gap-4">
          {/* <NavLink
            to="/fleet"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium text-[#5c3d2e] transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Our Fleet
          </NavLink> */}
          <NavLink
            to="/rent-vehicles"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium text-[#5c3d2e] transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Rent Vehicles
          </NavLink>
          <NavLink
            to="/with-driver"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium text-[#5c3d2e] transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Rent with Driver
          </NavLink>
          <NavLink
            to="/self-drive"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium text-[#5c3d2e] transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Self Drive
          </NavLink>
          <NavLink
            to="/faqs"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium text-[#5c3d2e] transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            FAQs
          </NavLink>
          <NavLink
            to="/special-offers"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium text-[#5c3d2e] transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Special Offers
          </NavLink>
        </ul>

        {/* Mobile Hamburger */}
        <div className="xl:hidden">
          <RxHamburgerMenu
            className="text-[#5c3d2e] w-6 h-6 cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
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
        <div className="flex flex-col space-y-1 max-lg:space-y-4 text-[#5c3d2e]">
          <NavLink
            to="/"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/clients"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Clients
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Our Blog
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Contact Us
          </NavLink>
          {/* <NavLink
            to="/fleet"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Our Fleet
          </NavLink> */}
          <NavLink
            to="/rent-vehicles"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Rent Vehicles
          </NavLink>
          <NavLink
            to="/with-driver"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Rent with Driver
          </NavLink>
          <NavLink
            to="/self-drive"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Self Drive
          </NavLink>
          <NavLink
            to="/faqs"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            FAQs
          </NavLink>
          <NavLink
            to="/special-offers"
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) =>
              `px-4 py-4 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#5c3d2e] text-[#f4d35e]"
                  : "hover:bg-[#5c3d2e] hover:text-[#f4d35e]"
              }`
            }
          >
            Special Offers
          </NavLink>
        </div>
      </Drawer>
    </>
  );
};

export default SecondaryNavBar;
