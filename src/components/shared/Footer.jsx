import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

export default function Footer() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const topSectionRef = useRef(null);
  const gridRefs = useRef([]);
  const socialRefs = useRef([]);
  const hrRef = useRef(null);
  const bottomLinksRef = useRef(null);

  // Scroll-triggered animations
  useEffect(() => {
    const section = sectionRef.current;

    const playAnimations = () => {
      // Section background fade-in
      if (sectionRef.current) {
        anime({
          targets: sectionRef.current,
          backgroundColor: ["rgba(244, 211, 94, 0)", "#f4d35e"],
          duration: 1000,
          easing: "easeOutQuad",
        });
      }

      // Top section (title and button) animation
      if (topSectionRef.current) {
        anime({
          targets: topSectionRef.current.children,
          translateY: [60, 0],
          scale: [0.8, 1],
          opacity: [0, 1],
          delay: anime.stagger(150, { start: 200 }),
          duration: 800,
          easing: "easeOutElastic(1, 0.7)",
        });
      }

      // Grid columns animation (staggered)
      if (gridRefs.current.length > 0) {
        anime({
          targets: gridRefs.current,
          translateY: [60, 0],
          scale: [0.85, 1],
          opacity: [0, 1],
          delay: anime.stagger(120, { start: 600 }),
          duration: 800,
          easing: "easeOutElastic(1, 0.8)",
        });
      }

      // Social icons animation
      if (socialRefs.current.length > 0) {
        anime({
          targets: socialRefs.current,
          translateY: [20, 0],
          opacity: [0, 1],
          delay: anime.stagger(100, { start: 800 }),
          duration: 600,
          easing: "easeOutQuad",
        });
      }

      // Horizontal rule animation
      if (hrRef.current) {
        anime({
          targets: hrRef.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 600,
          easing: "easeOutQuad",
          delay: 1000,
        });
      }

      // Bottom links animation
      if (bottomLinksRef.current) {
        anime({
          targets: bottomLinksRef.current.children,
          translateY: [20, 0],
          opacity: [0, 1],
          delay: anime.stagger(100, { start: 1200 }),
          duration: 600,
          easing: "easeOutQuad",
        });
      }
    };

    // Intersection Observer to trigger animations when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playAnimations();
          observer.disconnect(); // Run animations only once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Hover animation for buttons
  const handleButtonHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -10],
      backgroundColor: ["#f9f5e3", "#ffffff"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleButtonHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-10, 0],
      backgroundColor: ["#ffffff", "#f9f5e3"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  // Hover animation for social icons
  const handleSocialHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.2],
      translateY: [0, -5],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleSocialHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.2, 1],
      translateY: [-5, 0],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  // Hover animation for links
  const handleLinkHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -5],
      color: ["#000000", "#f9f5e3"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleLinkHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-5, 0],
      color: ["#f9f5e3", "#000000"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <section ref={sectionRef} className="py-10 bg-[#f4d35e] sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Section: Title + Button */}
        <div
          ref={topSectionRef}
          className="max-w-[800px] mx-auto text-center mb-10"
        >
          <h5 className="text-[#5c3d2e] leading-none text-[3rem] max-sm:text-[2rem]">
            Drop us a line or two, we are open for creative minds and
            collaborations!
          </h5>
          <div className="mt-6">
            <Button
              text="Rent Now"
              onClick={() => navigate("/rent-vehicles")}
              className="px-8 py-4 max-sm:px-6 max-sm:py-2 bg-[#f9f5e3] ring-2 ring-offset-2 ring-[#5c3d2e]"
              onMouseEnter={(e) => handleButtonHover(e.currentTarget)}
              onMouseLeave={(e) => handleButtonHoverLeave(e.currentTarget)}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-5 max-md:grid-cols-4 gap-y-16 gap-x-12">
          {/* Drive Lanka */}
          <div
            className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8"
            ref={(el) => (gridRefs.current[0] = el)}
          >
            <Link to="/">
              <p className="text-[#5c3d2e] font-bold text-xl">Drive Lanka</p>
            </Link>
            <p className="text-base leading-relaxed text-[#006D5B] mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <ul className="flex items-center space-x-3 mt-9">
              {[
                { icon: "facebook", color: "text-blue-600" },
                { icon: "twitter", color: "text-blue-400" },
                { icon: "instagram", color: "text-pink-600" },
                { icon: "linkedin", color: "text-blue-700" },
              ].map((social, index) => (
                <li
                  key={index}
                  ref={(el) => (socialRefs.current[index] = el)}
                  onMouseEnter={(e) => handleSocialHover(e.currentTarget)}
                  onMouseLeave={(e) => handleSocialHoverLeave(e.currentTarget)}
                >
                  <Icon
                    icon={social.icon}
                    type="social"
                    size="w-5 h-5"
                    className={`${social.color} cursor-pointer`}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div ref={(el) => (gridRefs.current[1] = el)}>
            <p className="text-sm font-semibold tracking-widest text-[#f9f5e3] uppercase">
              Company
            </p>
            <ul className="mt-6 space-y-4">
              {[
                { to: "/services", text: "Services" },
                { to: "/about", text: "About Us" },
                { to: "/contact", text: "Contact Us" },
                { to: "/hire-vehicles", text: "Hire Vehicles" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-base text-black hover:text-[#006D5B]"
                    onMouseEnter={(e) => handleLinkHover(e.currentTarget)}
                    onMouseLeave={(e) => handleLinkHoverLeave(e.currentTarget)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help links */}
          <div ref={(el) => (gridRefs.current[2] = el)}>
            <p className="text-sm font-semibold tracking-widest text-[#f9f5e3] uppercase">
              Help
            </p>
            <ul className="mt-6 space-y-4">
              {[
                { to: "/faqs", text: "FAQs" },
                { to: "/special-offers", text: "Special Offers" },
                { to: "/terms-and-conditions", text: "Terms & Conditions" },
                { to: "/privacy-policy", text: "Privacy Policy" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-base text-black hover:text-[#006D5B]"
                    onMouseEnter={(e) => handleLinkHover(e.currentTarget)}
                    onMouseLeave={(e) => handleLinkHoverLeave(e.currentTarget)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (commented out) */}
          {/* <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
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
          </div> */}
        </div>

        <hr ref={hrRef} className="mt-16 mb-10 border-[#5c3d2e]" />

        <div
          ref={bottomLinksRef}
          className="flex justify-around items-center max-sm:flex-col max-sm:w-full max-sm:gap-4 sm:gap-14 md:gap-32 lg:gap-54 xl:gap-158 pt-8"
        >
          <p className="max-sm:text-lg max-sm:text-center">
            © Copyright {new Date().getFullYear()}, All Rights Reserved.
          </p>
          <ul className="flex justify-center max-sm:justify-around max-sm:mt-10 max-sm:w-[300px] items-center sm:gap-4 gap-8">
            {[
              { to: "/terms-and-conditions", text: "Terms & Conditions" },
              { to: "/privacy-policy", text: "Privacy Policy" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-base text-black hover:text-[#006D5B]"
                  onMouseEnter={(e) => handleLinkHover(e.currentTarget)}
                  onMouseLeave={(e) => handleLinkHoverLeave(e.currentTarget)}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
