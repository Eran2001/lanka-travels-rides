import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";

const Payments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Drive Lanka | Payments";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4">
        {/* Introduction */}

        <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Pricing & Payments
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            At Drive Lanka, we offer flexible and secure payment options to make
            your vehicle rental experience seamless. Choose the method that
            suits you best and start your journey with ease.
          </p>
        </section>

        {/* Payment Methods */}
        <section className="py-16">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-12">
            Payment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                Bank Transfers
              </h3>
              <p className="text-gray-600">
                Bank: COMMERCIAL BANK <br />
                Account Name: TOURISM LANKA <br />
                Account No: +94 123456789 <br />
                Address: No-16, Jayawardanapura, Colombo – 01 <br />
                Swift Code: HBXXYTE34
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                On Arrival
              </h3>
              <p className="text-gray-600">
                Pay upon arrival for added convenience. We'll provide all
                necessary payment details via email once your booking is
                confirmed (within 3 days prior to arrival).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-[#5c3d2e] mb-4">
                Western Union
              </h3>
              <p className="text-gray-600">
                Contact us to receive detailed Western Union payment
                instructions for a quick and secure transaction.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Book Your Vehicle?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch with us to confirm your booking and discuss payment
            options.
          </p>
          <Button
            text="Contact Us"
            onClick={() => navigate("/contact")}
            className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-4"
          />
        </section>
      </div>
    </div>
  );
};

export default Payments;
