import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { QRCodeSVG } from "qrcode.react";
import { gsap } from "gsap";

import Button from "@/components/ui/Button";
import Notification from "@/components/ui/Notification";
import Loading from "@/components/ui/Loading";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Refs for animation
  const introRef = useRef(null);
  const whatsappCardsRefs = useRef([]);
  const whatsappSectionRef = useRef(null);
  const emailSectionRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const qrCodeRef = useRef(null); // Dedicated ref for QR code

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          Notification.success("We got your message, we'll connect with you!");
          form.current.reset();
        },
        (err) => {
          Notification.error("Failed to send message. Please try again.");
          console.error(err);
        }
      );
  };

  useEffect(() => {
    document.title = "Lanka Travels Rides | Contact Us";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isLoading || !gsap) {
      console.warn(
        "GSAP not loaded or still loading, skipping initial animations"
      );
      return;
    }

    // Animate WhatsApp cards on load
    if (whatsappCardsRefs.current.length > 0) {
      gsap.fromTo(
        whatsappCardsRefs.current,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: { amount: 0.45, from: "start" }, // Matches anime.stagger(150, { start: 200 })
          ease: "bounce.out", // Matches easeOutBounce
          delay: 0.2,
        }
      );
    } else {
      console.warn("No WhatsApp cards found, skipping card animations");
    }

    // Animate Call to Action button fade + pop in
    const ctaBtn = ctaSectionRef.current?.querySelector("button");
    if (ctaBtn) {
      gsap.fromTo(
        ctaBtn,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.7)", // Matches easeOutElastic(1, .7)
          delay: 0.6,
        }
      );
    } else {
      console.warn("CTA button not found, skipping CTA animation");
    }
  }, [isLoading]);

  // Scroll-triggered animations
  useEffect(() => {
    if (isLoading || !gsap) {
      console.warn(
        "GSAP not loaded or still loading, skipping scroll animations"
      );
      return;
    }

    const sections = [
      { ref: introRef, bg: "#f4d35e" },
      { ref: whatsappSectionRef, bg: "#ffffff" },
      { ref: emailSectionRef, bg: "#5c3d2e" },
      { ref: ctaSectionRef, bg: "#f3f4f6" },
    ];

    const playAnimations = (sectionRef, bg) => {
      if (!sectionRef.current) {
        console.warn("Section ref is null, skipping animations");
        return;
      }

      // Background fade-in
      // gsap.to(sectionRef.current, {
      //   backgroundColor: bg,
      //   duration: 1,
      //   ease: "power2.out", // Matches easeOutQuad
      // });

      // Animate header and paragraph
      const header = sectionRef.current.querySelector("h2, h3");
      const paragraph = sectionRef.current.querySelector("p");
      if (header || paragraph) {
        gsap.fromTo(
          [header, paragraph].filter(Boolean),
          { y: 80, scale: 0.8, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.9,
            stagger: { amount: 0.3, from: "start" }, // Matches anime.stagger(150, { start: 200 })
            ease: "elastic.out(1, 0.6)", // Matches easeOutElastic(1, 0.6)
            delay: 0.2,
          }
        );
      } else {
        console.warn("Header or paragraph not found, skipping text animations");
      }

      // Button animation
      const button = sectionRef.current.querySelector("button");
      if (button) {
        gsap.fromTo(
          button,
          { y: 50, scale: 0.9, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "elastic.out(1, 0.8)", // Matches easeOutElastic(1, 0.8)
            delay: 0.5,
          }
        );
      } else {
        console.warn("Button not found, skipping button animation");
      }

      // Animate WhatsApp cards and QR code if section is whatsappSectionRef
      if (sectionRef === whatsappSectionRef) {
        if (whatsappCardsRefs.current.length > 0) {
          gsap.fromTo(
            whatsappCardsRefs.current,
            { y: 100, scale: 0.85, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.9,
              stagger: { amount: 0.36, from: "start" }, // Matches anime.stagger(120, { start: 600 })
              ease: "elastic.out(1, 0.6)", // Matches easeOutElastic(1, 0.6)
              delay: 0.6,
            }
          );
        } else {
          console.warn("No WhatsApp cards found, skipping card animations");
        }

        // Animate QR code
        if (qrCodeRef.current) {
          gsap.fromTo(
            qrCodeRef.current,
            { scale: 0, y: 30, opacity: 0 },
            {
              scale: 1,
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "elastic.out(1, 0.8)", // Matches easeOutElastic(1, 0.8)
              delay: 0.8,
            }
          );
        } else {
          console.warn("QR code ref is null, skipping QR code animation");
        }
      }

      // Animate form inputs in email section
      if (sectionRef === emailSectionRef) {
        const inputs = sectionRef.current.querySelectorAll(
          "input, textarea, button"
        );
        if (inputs.length > 0) {
          gsap.fromTo(
            inputs,
            { y: 100, scale: 0.85, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.9,
              stagger: { amount: 0.36, from: "start" }, // Matches anime.stagger(120, { start: 600 })
              ease: "elastic.out(1, 0.6)", // Matches easeOutElastic(1, 0.6)
              delay: 0.6,
            }
          );
        } else {
          console.warn("No form inputs found, skipping form animations");
        }
      }
    };

    const observers = sections.map(({ ref, bg }) => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            playAnimations(ref, bg);
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) observer.observe(ref.current);

      return { observer, ref };
    });

    return () => {
      observers.forEach(({ observer, ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [isLoading]);

  // Hover animations for WhatsApp cards
  const handleCardHover = (el) => {
    gsap.to(el, {
      scale: 1.07,
      y: -15,
      boxShadow:
        "0 25px 40px -5px rgba(0,0,0,0.3), 0 12px 15px -3px rgba(0,0,0,0.2)",
      duration: 0.4,
      ease: "power1.inOut", // Matches cubicBezier(0.25, 0.1, 0.25, 1)
    });
  };
  const handleCardHoverLeave = (el) => {
    gsap.to(el, {
      scale: 1,
      y: 0,
      boxShadow:
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      duration: 0.4,
      ease: "power1.inOut", // Matches cubicBezier(0.25, 0.1, 0.25, 1)
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-1 mt-27">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <section
          ref={introRef}
          className="text-center py-16 bg-[#f4d35e] rounded-lg"
          aria-label="Contact intro"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Connect with Lanka Travel Rides
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto p-4">
            We’re here to help you plan your perfect journey. Reach out via
            WhatsApp or email, and our team will get back to you promptly.
          </p>
        </section>

        {/* WhatsApp Contact */}
        <section
          ref={whatsappSectionRef}
          className="py-16"
          aria-label="WhatsApp contact options"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            Instant Support via WhatsApp
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 w-full items-stretch">
            {/* Left side: 3 cards */}
            {/* <div className="w-full lg:w-1/2 space-y-8 flex flex-col">
              {[
                {
                  title: "Quick Assistance",
                  description:
                    "Message us anytime for immediate help with bookings or inquiries.",
                  btnText: "Message",
                  href: "https://wa.me/94777900734",
                },
                {
                  title: "24/7 Availability",
                  description:
                    "Our team is always ready to assist, day or night, to ensure your travel plans go smoothly.",
                  btnText: "Chat Now",
                  href: "https://wa.me/94777900734",
                },
                {
                  title: "Personalized Support",
                  description:
                    "Get tailored advice for your travel needs directly through WhatsApp.",
                  btnText: "Contact Us",
                  href: "https://wa.me/94777900734",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-lg text-center flex-1"
                  ref={(el) => (whatsappCardsRefs.current[i] = el)}
                  onMouseEnter={(e) => handleCardHover(e.currentTarget)}
                  onMouseLeave={(e) => handleCardHoverLeave(e.currentTarget)}
                >
                  <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.btnText} via WhatsApp`}
                  >
                    <Button
                      text={item.btnText}
                      className="px-8 py-4 sm:px-10 sm:py-4 mt-4"
                    />
                  </a>
                </div>
              ))}
            </div> */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div
                ref={qrCodeRef}
                className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg shadow-lg text-center w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-full flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#5c3d2e] mb-6">
                  Chat with Our UK Team
                </h3>

                {/* Small QR for small screens */}
                <div className="block md:hidden">
                  <QRCodeSVG
                    value="https://wa.me/+447577461153"
                    size={200}
                    bgColor="#ffffff"
                    fgColor="#5c3d2e"
                    level="Q"
                    className="mx-auto"
                  />
                </div>

                {/* Large QR for md and up */}
                <div className="hidden md:block">
                  <QRCodeSVG
                    value="https://wa.me/+447577461153"
                    size={320}
                    bgColor="#ffffff"
                    fgColor="#5c3d2e"
                    level="Q"
                    className="mx-auto"
                  />
                </div>

                <p className="text-gray-600 mt-6 text-center text-base md:text-lg max-w-xl mx-auto">
                  Based in the UK? Scan this QR code to connect instantly with
                  our UK team for quick assistance.
                </p>
              </div>
            </div>

            {/* Right side: QR Code */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div
                ref={qrCodeRef}
                className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg shadow-lg text-center w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-full flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-[#5c3d2e] mb-6">
                  Chat with Our Local Team
                </h3>

                {/* Small QR for small screens */}
                <div className="block md:hidden">
                  <QRCodeSVG
                    value="https://wa.me/94777900734"
                    size={200}
                    bgColor="#ffffff"
                    fgColor="#5c3d2e"
                    level="Q"
                    className="mx-auto"
                  />
                </div>

                {/* Large QR for md and up */}
                <div className="hidden md:block">
                  <QRCodeSVG
                    value="https://wa.me/94777900734"
                    size={320}
                    bgColor="#ffffff"
                    fgColor="#5c3d2e"
                    level="Q"
                    className="mx-auto"
                  />
                </div>

                <p className="text-gray-600 mt-6 text-center text-base md:text-lg max-w-xl mx-auto">
                  If you’re in Sri Lanka, scan this QR code to reach our local
                  support team anytime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Email Form */}
        <section
          ref={emailSectionRef}
          className="py-16 bg-[#5c3d2e] px-16 text-white rounded-lg"
          aria-label="Email contact form"
        >
          <h2 className="text-3xl font-semibold text-center mb-12">
            Send Us an Email
          </h2>
          <div className="max-w-3xl mx-auto">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#f4d35e] bg-gray-100 text-[#5c3d2e]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#f4d35e] bg-gray-100 text-[#5c3d2e]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Your message..."
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-[#f4d35e] bg-gray-100 text-[#5c3d2e]"
                ></textarea>
              </div>
              <div className="text-center">
                <Button
                  text="Send Message"
                  type="submit"
                  className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
                />
              </div>
            </form>
          </div>
        </section>

        {/* Call to Action */}
        <section
          ref={ctaSectionRef}
          className="py-16 text-center"
          aria-label="Call to action"
        >
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your vehicle today and explore Sri Lanka with Lanka Travel
            Rides.
          </p>
          <Button
            text="Choose Your Vehicle"
            onClick={() => navigate("/check-out-our-fleet")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default Contact;
