import React from "react";
import HeroTopSection from "./HeroTopSection";
import RentalTimesBar from "./RentalTimesBar";
import BrandsSection from "./BrandsSection";
import LuxuryCollectionSection from "./LuxuryCollectionSection";

const HeroSection = () => {
  return (
    <div className="w-full xl:pt-30 max-xl:pt-14 max-md:pt-36 max-sm:pt-48 max-sm:pb-6 bg-[#f9f5e3]">
      <HeroTopSection />
      <RentalTimesBar />
      <BrandsSection />
      <LuxuryCollectionSection />
    </div>
  );
};

export default HeroSection;
