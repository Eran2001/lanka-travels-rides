import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Notification from "../ui/Notification";
import Icon from "../ui/Icon";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <section className="py-10 bg-[#f4d35e] sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Section: Your original text + Button */}
        <div className="max-w-[800px] mx-auto text-center mb-10">
          <h5 className="text-[#5c3d2e] leading-none text-[3rem] max-sm:text-[2rem]">
            Drop us a line or two, we are open for creative minds and
            collaborations!
          </h5>
          <div className="mt-6">
            <Button
              text="Rent Now"
              onClick={() => navigate("/rent-vehicles")}
              className="px-8 py-4 max-sm:px-6 max-sm:py-2 bg-[#f9f5e3] ring-2 ring-offset-2 ring-[#5c3d2e]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Link to="/">
              <p className="text-[#5c3d2e] font-bold text-xl">Drive Lanka</p>
            </Link>
            <p className="text-base leading-relaxed text-[#006D5B] mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              {/* Social icons here, same as before */}
              <li>
                <Icon
                  icon="facebook"
                  type="social"
                  size="w-5 h-5"
                  className="text-blue-600 cursor-pointer"
                />
              </li>
              <li>
                <Icon
                  icon="twitter"
                  type="social"
                  size="w-5 h-5"
                  className="text-blue-400 cursor-pointer"
                />
              </li>
              <li>
                <Icon
                  icon="instagram"
                  type="social"
                  size="w-5 h-5"
                  className="text-pink-600 cursor-pointer"
                />
              </li>
              <li>
                <Icon
                  icon="linkedin"
                  type="social"
                  size="w-5 h-5"
                  className="text-blue-700 cursor-pointer"
                />
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#f9f5e3] uppercase">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-base text-black hover:text-[#006D5B]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-base text-black hover:text-[#006D5B]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-base text-black hover:text-[#006D5B]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/hire-vehicles"
                  className="text-base text-black hover:text-[#006D5B]"
                >
                  Hire Vehicles
                </Link>
              </li>
            </ul>
          </div>

          {/* Help links */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-[#f9f5e3] uppercase">
              Help
            </p>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/faqs"
                  className="text-base text-black hover:text-[#006D5B]"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/special-offers"
                  className="text-base text-black hover:text-[#006D5B]"
                >
                  Special Offers
                </Link>
              </li>

              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-base text-black hover:text-[#006D5B]"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-base text-black hover:text-[#006D5B]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-[#f9f5e3] uppercase">
              Subscribe to newsletter
            </p>
            <form action="#" method="POST" className="mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
              />
              <Button
                type="submit"
                text="Subscribe"
                className="inline-flex items-center justify-center ml-1 px-6 py-4 mt-6 font-semibold ring-1 ring-offset-1 ring-[#5c3d2e] text-[#5c3d2e]"
              />
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-[#5c3d2e]" />

        <div className="flex justify-around items-center max-sm:flex-col max-sm:w-full max-sm:gap-4 sm:gap-14 md:gap-32 lg:gap-54 xl:gap-158 pt-8">
          <p className="max-sm:text-lg max-sm:text-center">
            © Copyright 2021, All Rights Reserved.
          </p>
          <ul className="flex justify-center max-sm:justify-around max-sm:mt-10 max-sm:w-[300px] items-center sm:gap-4 gap-8">
            <li>
              <Link
                to="/terms-and-conditions"
                className="text-base text-black hover:text-[#006D5B]"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="text-base text-black hover:text-[#006D5B]"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
