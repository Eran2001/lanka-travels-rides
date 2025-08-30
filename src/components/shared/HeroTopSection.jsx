import React from "react";
import Button from "../ui/Button";

const HeroTopSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <img
        src="/images/NewHero.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-50"></div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 max-sm:mt-32">
        <h1
  className="text-7xl max-[400px]:text-5xl max-[500px]:text-6xl sm:text-7xl md:text-8xl font-bold mb-4 max-sm:mb-0"
  style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
>
  Lanka Travel Rides
</h1>

<p
  className="text-4xl sm:text-4xl md:text-5xl mb-6"
  style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
>
  Embark on an unforgettable journey across Sri Lanka.
</p>
        {/* Buttons row */}
        <div className="flex space-x-10 mt-12">
          <Button className="max-sm:py-4 lg:py-4 lg:px-10 lg:rounded-full max-sm:text-sm" text="CHECK OUR TOURS"  />
          <Button className="max-sm:py-4 lg:py-4 lg:px-10 lg:rounded-full max-sm:text-sm" text="WANT CUSTOM TOUR?" />
        </div>
      </div>
    </div>
  );
};

export default HeroTopSection;
