import React, { useEffect, useRef } from "react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
  FaPhone,
  FaInstagram,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const linkGroupsRef = useRef([]);
  const socialRefs = useRef([]);

  // Animate on scroll into view
  useEffect(() => {
    const section = sectionRef.current;

    const playAnimations = () => {
      // Animate Logo
      anime({
        targets: logoRef.current,
        translateY: [40, 0],
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutElastic(1, 0.8)",
      });

      // Animate Link Groups
      anime({
        targets: linkGroupsRef.current,
        translateY: [60, 0],
        scale: [0.85, 1],
        opacity: [0, 1],
        delay: anime.stagger(120, { start: 400 }),
        duration: 800,
        easing: "easeOutElastic(1, 0.8)",
      });

      // Animate Socials
      anime({
        targets: socialRefs.current,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { start: 800 }),
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

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Hover animations
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
      color: ["#f9f5e3", "#f4d35e"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const handleLinkHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.05, 1],
      translateY: [-4, 0],
      color: ["#f4d35e", "#f9f5e3"],
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  return (
    <>
      <footer
        ref={sectionRef}
        className="flex justify-center bg-primary pb-2 pt-8 lg:pb-10 lg:pt-10 border-t border-white/10 shadow-inner"
      >
        <div className="container -mx-4 flex flex-wrap">
          {/* Logo + Description */}
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div
              ref={logoRef}
              className="mb-10 w-full rounded-xl bg-white/5 p-4 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Link to="/" className="mb-6 inline-block max-w-[160px] ">
                <img
                  src="/images/newLogo.jpg"
                  alt="logo"
                  className="max-w-full dark:hidden rounded-md"
                />
                <img
                  src="/images/newLogo.jpg"
                  alt="logo"
                  className="max-w-full h-20 hidden dark:block rounded-md"
                />
              </Link>
              <p className="mb-7 text-base text-light text-body-color dark:text-dark-6">
                We are Lanka Travel Rides, contact with us we have Exclusive
                journeys waiting for your call.
              </p>
              <p className="flex flex-col text-sm font-medium text-dark dark:text-white space-y-1">
                <span className="flex items-center">
                  <FaPhone className="mr-2 text-accent" />
                  +94 76 597 2177
                </span>
                <span className="flex items-center">
                  <FaPhone className="mr-2 text-accent" />
                  +94 77 790 0720
                </span>
                <span className="flex items-center">
                  <IoMail className="mr-2 text-accent" />
                  Lankatravelrides@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* Link Groups */}
          <LinkGroup
            header="Resources"
            refCallback={(el) => (linkGroupsRef.current[0] = el)}
          >
            <NavLink
              link="/blogs"
              label="Blogs"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/clients"
              label="Clients"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/hire-with-driver"
              label="Hire with Driver"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/self-drive"
              label="Self Drive"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
          </LinkGroup>

          <LinkGroup
            header="Company"
            refCallback={(el) => (linkGroupsRef.current[1] = el)}
          >
            <NavLink
              link="/what-we-offer"
              label="What We Offer"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/about-us"
              label="About Us"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/contact-us"
              label="Contact Us"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/check-out-our-fleet"
              label="Our Fleet"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
          </LinkGroup>

          <LinkGroup
            header="Quick Links"
            refCallback={(el) => (linkGroupsRef.current[2] = el)}
          >
            <NavLink
              link="/"
              label="Home"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/special-offers"
              label="Special Offers"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            {/* <NavLink
              link="/#"
              label="Download App"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            /> */}
          </LinkGroup>

          {/* Socials */}
          <div
            ref={(el) => (linkGroupsRef.current[3] = el)}
            className="w-full px-4 sm:w-1/2 lg:w-3/12"
          >
            <div className="mb-10 w-full rounded-xl bg-white/5 p-4 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
              <h4 className="mb-6 text-lg font-semibold text-dark dark:text-white border-b border-white/20 pb-2">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                {[
                  {
                    icon: <FaFacebookF />,
                    link: "https://www.facebook.com/share/1F2Ui1Pebg/?mibextid=wwXIfr",
                  },
                  { icon: <FaXTwitter /> },
                  {
                    icon: <FaInstagram />,
                    link: "https://www.instagram.com/lankatravelrides?igsh=aDlobXhwdjg5aW1t",
                  },
                  { icon: <FaLinkedinIn /> },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    ref={(el) => (socialRefs.current[idx] = el)}
                    onMouseEnter={(e) => handleSocialHover(e.currentTarget)}
                    onMouseLeave={(e) =>
                      handleSocialHoverLeave(e.currentTarget)
                    }
                    className="mr-3 flex h-9 w-9 items-center cursor-pointer justify-center rounded-full border border-stroke 
          text-dark dark:text-white dark:border-dark-3 
          hover:border-primary hover:bg-gradient-to-r hover:from-accent hover:to-accent/70 hover:text-dark 
          sm:mr-4 lg:mr-3 xl:mr-4 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-base text-accent text-body-color dark:text-dark-6">
                &copy; {new Date().getFullYear()} Lanka Travel Rides
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({ children, header, refCallback }) => (
  <div ref={refCallback} className="w-full px-4 sm:w-1/2 lg:w-2/12">
    <div className="mb-10 w-full rounded-xl bg-white/5 p-4 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
      <h4 className="mb-6 text-lg font-semibold text-dark dark:text-white border-b border-white pb-2">
        {header}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  </div>
);

const NavLink = ({ link, label, onHover, onLeave }) => (
  <li>
    <a
      href={link}
      onMouseEnter={(e) => onHover(e.currentTarget)}
      onMouseLeave={(e) => onLeave(e.currentTarget)}
      className="inline-block text-base leading-loose text-light dark:text-dark-6 hover:text-primary relative 
  after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-light after:transition-all after:duration-300 
  hover:after:w-full"
    >
      {label}
    </a>
  </li>
);
