import React, { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const clients = [
  {
    image:
      "https://coastandvalleypm.com/wp-content/uploads/2023/09/AdobeStock_197628319.jpeg",
    title: "Exceptional Rental Experience",
    description:
      "We rented a van for our family trip and it was spotless, efficient, and spacious. The team was friendly and handled everything smoothly.",
  },
  {
    image:
      "https://wichitastaffing.com/wp-content/uploads/2023/06/reliability-key-to-career-growth-and-success-1-scaled-1-1024x683.jpg",
    title: "Professional and Reliable",
    description:
      "The customer service was fantastic! I’ve never had a smoother rental process. Pickup and drop-off were seamless and stress-free.",
  },
  {
    image:
      "https://www.talk-business.co.uk/wp-content/uploads/2019/10/shutterstock_1385974424.jpg",
    title: "Perfect for Business Travel",
    description:
      "I needed a car on short notice for a business meeting out of town. Booking was fast, the car was ready, and I arrived on time.",
  },
  {
    image:
      "https://quickcabservicesjaipur.com/wp-content/uploads/2025/01/Untitled-1.jpg",
    title: "Safe and Comfortable Rides",
    description:
      "I used the rental for a weekend getaway with friends. The ride was smooth and fuel-efficient. Will definitely rent again!",
  },
];

export default function Clients() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Drive Lanka | Clients";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <section className="py-16 bg-white sm:py-20 lg:py-24 mt-27">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#5c3d2e] sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base text-[#5c3d2e]">
            Hear from our happy customers about their rental experience with us.
          </p>
        </div> */}

        {/* <section className="text-center py-16 bg-[#f4d35e] rounded-lg mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#5c3d2e] mb-4">
            What Our Clients Say
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from our happy customers about their rental experience with us.
          </p>
        </section> */}

        <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hear from our happy customers about their rental experience with us.
            From seamless booking processes to top-notch customer service, our
            clients consistently praise the reliability, affordability, and
            comfort we provide. Whether it's a short getaway or a long-term
            rental, we go the extra mile to ensure your journey is smooth and
            memorable.
          </p>
        </section>

        <div className="mt-16 space-y-24">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } gap-10`}
            >
              <div className="lg:w-1/2 w-full">
                <img
                  src={client.image}
                  alt={client.title}
                  className="rounded-lg shadow-lg w-full h-[350px] object-cover"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-[#006D5B]">
                  {client.title}
                </h3>
                <p className="mt-4 text-gray-700 text-lg">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
