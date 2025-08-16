import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { QRCodeSVG } from "qrcode.react";
import anime from "https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js";

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
    if (isLoading) return;

    // Animate WhatsApp cards on load
    anime({
      targets: whatsappCardsRefs.current,
      translateY: [100, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      delay: anime.stagger(150, { start: 200 }),
      duration: 900,
      easing: "easeOutBounce",
    });

    // Animate Call to Action button fade + pop in
    const ctaBtn = ctaSectionRef.current?.querySelector("button");
    if (ctaBtn) {
      anime({
        targets: ctaBtn,
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutElastic(1, .7)",
        delay: 600,
      });
    }
  }, [isLoading]);

  // Scroll-triggered animations
  useEffect(() => {
    const sections = [
      { ref: introRef, bg: "#f4d35e" },
      { ref: whatsappSectionRef, bg: "#ffffff" },
      { ref: emailSectionRef, bg: "#5c3d2e" },
      { ref: ctaSectionRef, bg: "#f3f4f6" },
    ];

    const playAnimations = (sectionRef, bg) => {
      if (!sectionRef.current) return;

      // Background fade-in
      anime({
        targets: sectionRef.current,
        backgroundColor: [
          `rgba(${
            bg === "#f4d35e"
              ? "244,211,94"
              : bg === "#5c3d2e"
              ? "92,61,46"
              : bg === "#ffffff"
              ? "255,255,255"
              : "243,244,246"
          }, 0)`,
          bg,
        ],
        duration: 1000,
        easing: "easeOutQuad",
      });

      // Animate header and paragraph
      const header = sectionRef.current.querySelector("h2, h3");
      const paragraph = sectionRef.current.querySelector("p");
      if (header || paragraph) {
        anime({
          targets: [header, paragraph].filter(Boolean),
          translateY: [80, 0],
          scale: [0.8, 1],
          opacity: [0, 1],
          delay: anime.stagger(150, { start: 200 }),
          duration: 900,
          easing: "easeOutElastic(1, 0.6)",
        });
      }

      // Button animation
      const button = sectionRef.current.querySelector("button");
      if (button) {
        anime({
          targets: button,
          translateY: [50, 0],
          scale: [0.9, 1],
          opacity: [0, 1],
          duration: 700,
          easing: "easeOutElastic(1, 0.8)",
          delay: 500,
        });
      }

      // Animate WhatsApp cards if section is whatsappSectionRef
      if (sectionRef === whatsappSectionRef) {
        anime({
          targets: whatsappCardsRefs.current,
          translateY: [100, 0],
          scale: [0.85, 1],
          opacity: [0, 1],
          delay: anime.stagger(120, { start: 600 }),
          duration: 900,
          easing: "easeOutElastic(1, 0.6)",
        });

        // Animate QR code
        const qrCode = sectionRef.current.querySelector("svg");
        if (qrCode) {
          anime({
            targets: qrCode,
            scale: [0, 1],
            translateY: [30, 0],
            opacity: [0, 1],
            delay: 800,
            duration: 600,
            easing: "easeOutElastic(1, 0.8)",
          });
        }
      }

      // Animate form inputs in email section
      if (sectionRef === emailSectionRef) {
        const inputs = sectionRef.current.querySelectorAll(
          "input, textarea, button"
        );
        if (inputs.length > 0) {
          anime({
            targets: inputs,
            translateY: [100, 0],
            scale: [0.85, 1],
            opacity: [0, 1],
            delay: anime.stagger(120, { start: 600 }),
            duration: 900,
            easing: "easeOutElastic(1, 0.6)",
          });
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
    anime({
      targets: el,
      scale: [1, 1.07],
      translateY: [0, -15],
      boxShadow: [
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
        "0 25px 40px -5px rgba(0,0,0,0.3), 0 12px 15px -3px rgba(0,0,0,0.2)",
      ],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
    });
  };
  const handleCardHoverLeave = (el) => {
    anime({
      targets: el,
      scale: [1.07, 1],
      translateY: [-15, 0],
      boxShadow: [
        "0 25px 40px -5px rgba(0,0,0,0.3), 0 12px 15px -3px rgba(0,0,0,0.2)",
        "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      ],
      duration: 400,
      easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
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
            Connect with Drive Lanka
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
          <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
            <div className="w-full lg:w-1/2 space-y-8">
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
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
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
            </div>

            {/* Right Side: QR Code */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="bg-white p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 rounded-lg shadow-lg text-center w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5c3d2e] mb-6">
                  Scan to Chat
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
                  Scan the QR code to message us on WhatsApp instantly.
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
            Book your vehicle today and explore Sri Lanka with Drive Lanka.
          </p>
          <Button
            text="Choose Your Vehicle"
            onClick={() => navigate("/rent-vehicles")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default Contact;
