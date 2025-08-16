import React, { useEffect, useRef } from "react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";
import logoImg from "../../assets/images/logoOriginal.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  const sectionRef = useRef(null);
  const linkGroupsRef = useRef([]);
  const socialRefs = useRef([]);

  // Animate on scroll into view
  useEffect(() => {
    const section = sectionRef.current;

    const playAnimations = () => {
      anime({
        targets: linkGroupsRef.current,
        translateY: [60, 0],
        scale: [0.85, 1],
        opacity: [0, 1],
        delay: anime.stagger(120, { start: 400 }),
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
    <>
      <footer
        ref={sectionRef}
        className="flex justify-center bg-accent pb-10 pt-10 lg:pb-10 lg:pt-10"
      >
        <div className="container -mx-4 flex flex-wrap">
          {/* Logo + Description */}
          <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
            <div className="mb-10 w-full">
              <Link to="/" className="mb-6 inline-block max-w-[160px]">
                <img
                  src={logoImg}
                  alt="logo"
                  className="max-w-full dark:hidden"
                />
                <img
                  src={logoImg}
                  alt="logo"
                  className="max-w-full hidden dark:block"
                />
              </Link>
              <p className="mb-7 text-base text-body-color dark:text-dark-6">
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
              <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                <span className="mr-3 text-primary">📞</span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>

          {/* Link Groups */}
          <LinkGroup
            header="Resources"
            refCallback={(el) => (linkGroupsRef.current[0] = el)}
          >
            <NavLink
              link="/#"
              label="SaaS Development"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="Our Products"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="User Flow"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="User Strategy"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
          </LinkGroup>

          <LinkGroup
            header="Company"
            refCallback={(el) => (linkGroupsRef.current[1] = el)}
          >
            <NavLink
              link="/#"
              label="About TailGrids"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="Contact & Support"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="Success History"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="Setting & Privacy"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
          </LinkGroup>

          <LinkGroup
            header="Quick Links"
            refCallback={(el) => (linkGroupsRef.current[2] = el)}
          >
            <NavLink
              link="/#"
              label="Premium Support"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="Our Services"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="Know Our Team"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
            <NavLink
              link="/#"
              label="Download App"
              onHover={handleLinkHover}
              onLeave={handleLinkHoverLeave}
            />
          </LinkGroup>

          {/* Socials */}
          <div
            ref={(el) => (linkGroupsRef.current[3] = el)}
            className="w-full px-4 sm:w-1/2 lg:w-3/12"
          >
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                Follow Us On
              </h4>
              <div className="mb-6 flex items-center">
                {[
                  { icon: <FaFacebookF />, link: "https://facebook.com" },
                  { icon: <FaTwitter />, link: "https://twitter.com" },
                  { icon: <FaYoutube />, link: "https://youtube.com" },
                  { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
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
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-stroke 
                 text-dark dark:text-white dark:border-dark-3 
                 hover:border-primary hover:bg-primary hover:text-white 
                 sm:mr-4 lg:mr-3 xl:mr-4"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-base text-body-color dark:text-dark-6">
                &copy; {new Date().getFullYear()} Drive Lanka
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
    <div className="mb-10 w-full">
      <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
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
      className="inline-block text-base leading-loose text-body-color dark:text-dark-6 hover:text-primary"
    >
      {label}
    </a>
  </li>
);
