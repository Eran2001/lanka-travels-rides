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

  useEffect(() => {
    const section = sectionRef.current;

    const playAnimations = () => {
      anime({
        targets: sectionRef.current,
        backgroundColor: ["rgba(244, 211, 94, 0)", "#f4d35e"],
        duration: 1000,
        easing: "easeOutQuad",
      });

      anime({
        targets: topSectionRef.current.children,
        translateY: [60, 0],
        scale: [0.8, 1],
        opacity: [0, 1],
        delay: anime.stagger(150, { start: 200 }),
        duration: 800,
        easing: "easeOutElastic(1, 0.7)",
      });

      anime({
        targets: gridRefs.current,
        translateY: [60, 0],
        scale: [0.85, 1],
        opacity: [0, 1],
        delay: anime.stagger(120, { start: 600 }),
        duration: 800,
        easing: "easeOutElastic(1, 0.8)",
      });

      anime({
        targets: socialRefs.current,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 800 }),
        duration: 600,
        easing: "easeOutQuad",
      });

      anime({
        targets: hrRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: "easeOutQuad",
        delay: 1000,
      });

      anime({
        targets: bottomLinksRef.current.children,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 1200 }),
        duration: 600,
        easing: "easeOutQuad",
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          playAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleButtonHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -8],
      backgroundColor: ["#f9f5e3", "#ffffff"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleButtonHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-8, 0],
      backgroundColor: ["#ffffff", "#f9f5e3"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleSocialHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.15],
      translateY: [0, -5],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleSocialHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.15, 1],
      translateY: [-5, 0],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleLinkHover = (el) => {
    anime({
      targets: el,
      scale: [1, 1.05],
      translateY: [0, -4],
      color: ["#000000", "#f9f5e3"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleLinkHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-4, 0],
      color: ["#f9f5e3", "#000000"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <section ref={sectionRef} className="py-6 bg-[#f4d35e] sm:pt-10 lg:pt-14">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 xl:w-5xl max-xl:w-3xl max-md:w-md">
        {/* Title + Button */}
        <div ref={topSectionRef} className="w-full mx-auto text-center mb-10">
          <h5 className="text-[#5c3d2e] text-5xl max-lg:text-3xl">
            Drop us a line or two, we are open for creative minds and
            collaborations!
          </h5>
          <div className="mt-4">
            <Button
              text="Rent Now"
              onClick={() => navigate("/rent-vehicles")}
              className="px-6 py-3 max-sm:px-5 max-sm:py-2 bg-[#f9f5e3] ring-2 ring-offset-2 ring-[#5c3d2e]"
              onMouseEnter={(e) => handleButtonHover(e.currentTarget)}
              onMouseLeave={(e) => handleButtonHoverLeave(e.currentTarget)}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 max-md:grid-cols-3 lg:grid-cols-3 gap-10">
          {/* Company Overview */}
          <div ref={(el) => (gridRefs.current[0] = el)}>
            <Link to="/">
              <p className="text-[#5c3d2e] font-bold text-xl">Drive Lanka</p>
            </Link>
            <p className="text-sm text-[#006D5B] mt-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
            <ul className="flex items-center space-x-3 mt-4">
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

          {/* Company Links */}
          <div ref={(el) => (gridRefs.current[1] = el)}>
            <p className="text-sm font-semibold tracking-widest text-[#5c3d2e] uppercase">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/services", text: "Services" },
                { to: "/about", text: "About Us" },
                { to: "/contact", text: "Contact Us" },
                { to: "/hire-vehicles", text: "Hire Vehicles" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-sm text-black hover:text-[#006D5B]"
                    onMouseEnter={(e) => handleLinkHover(e.currentTarget)}
                    onMouseLeave={(e) => handleLinkHoverLeave(e.currentTarget)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div ref={(el) => (gridRefs.current[2] = el)}>
            <p className="text-sm font-semibold tracking-widest text-[#5c3d2e] uppercase">
              Help
            </p>
            <ul className="mt-4 space-y-2">
              {[
                { to: "/faqs", text: "FAQs" },
                { to: "/special-offers", text: "Special Offers" },
                { to: "/terms-and-conditions", text: "Terms & Conditions" },
                { to: "/privacy-policy", text: "Privacy Policy" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-sm text-black hover:text-[#006D5B]"
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

        <hr ref={hrRef} className="mt-8 mb-6 border-[#5c3d2e]" />

        <div
          ref={bottomLinksRef}
          className="flex flex-wrap justify-between items-center gap-4 pt-4"
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Drive Lanka. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {[
              { to: "/terms-and-conditions", text: "Terms" },
              { to: "/privacy-policy", text: "Privacy" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-sm text-black hover:text-[#006D5B]"
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
