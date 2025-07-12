import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { QRCodeSVG } from "qrcode.react";
import Button from "@/components/ui/Button";
import Notification from "@/components/ui/Notification";
import Loading from "@/components/ui/Loading";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

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
    document.title = "Drive Lanka | Contact Us";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-1 mt-27">
      <div className="container mx-auto px-4">
        <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Connect with Drive Lanka
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We’re here to help you plan your perfect journey. Reach out via
            WhatsApp or email, and our team will get back to you promptly.
          </p>
        </section>

        {/* WhatsApp Contact */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            Instant Support via WhatsApp
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 items-start w-full">
            {/* Left Side: Cards */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                  Quick Assistance
                </h3>
                <p className="text-gray-600 mb-4">
                  Message us anytime for immediate help with bookings or
                  inquiries.
                </p>
                <a
                  href="https://wa.me/94777900734"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    text="Message"
                    className="px-8 py-4 sm:px-10 sm:py-4 mt-4"
                  />
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                  24/7 Availability
                </h3>
                <p className="text-gray-600 mb-4">
                  Our team is always ready to assist, day or night, to ensure
                  your travel plans go smoothly.
                </p>
                <a
                  href="https://wa.me/94777900734"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    text="Chat Now"
                    className="px-8 py-4 sm:px-10 sm:py-4 mt-4"
                  />
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                  Personalized Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Get tailored advice for your travel needs directly through
                  WhatsApp.
                </p>
                <a
                  href="https://wa.me/94777900734"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    text="Contact Us"
                    className="px-8 py-4 sm:px-10 sm:py-4 mt-4"
                  />
                </a>
              </div>
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
        <section className="py-16 bg-[#5c3d2e] px-16 text-white rounded-lg">
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
        <section className="py-16 text-center">
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
