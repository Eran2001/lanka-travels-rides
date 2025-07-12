import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/ui/Button";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Drive Lanka | FAQs";
  }, []);

  const faqs = [
    {
      question: "What documents do I need to rent a vehicle?",
      answer:
        "You’ll need a valid driver’s license, a passport or ID, and a credit card for the deposit. For self-drive rentals, an international driving permit may be required for non-residents.",
    },
    {
      question: "Can I rent a vehicle without a driver?",
      answer:
        "Yes, our Self Drive service allows you to rent vehicles for independent travel. Browse our fleet and book online to get started.",
    },
    {
      question: "Are your vehicles insured?",
      answer:
        "All our vehicles are fully insured, with comprehensive coverage included in the rental price. Additional insurance options are available for extra protection.",
    },
    {
      question: "What is included in the Rent with Driver service?",
      answer:
        "The service includes a professional driver, fuel, and vehicle maintenance. You can customize your itinerary, and our drivers can provide local insights and recommendations.",
    },
    {
      question: "How can I extend my rental period?",
      answer:
        "Contact our support team via phone or email to extend your rental. We’ll check availability and update your booking accordingly.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-[#5c3d2e] text-center mb-12">
          Frequently Asked Questions
        </h1>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-white p-4 rounded-lg shadow-lg flex justify-between items-center"
              >
                <h3 className="text-xl font-semibold text-[#5c3d2e]">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="bg-white p-4 rounded-b-lg shadow-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact our support team for personalized assistance.
          </p>
          {/* <Link
            to="/contact"
            className="bg-[#f4d35e] text-[#5c3d2e] font-bold py-3 px-6 rounded-full hover:bg-[#e0c250] transition"
          >
            Get in Touch
          </Link> */}
          <Button
            text="Get in Touch"
            onClick={() => navigate("/contact")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default FAQs;
