import React from "react";
import HeroTopSection from "./HeroTopSection";
import RentalTimesBar from "./RentalTimesBar";
import BrandsSection from "./BrandsSection";
import LuxuryCollectionSection from "./LuxuryCollectionSection";

const HeroSection = () => {
  return (
    <div className="w-full max-sm:pb-6 bg-[#f9f5e3]">
      <HeroTopSection />
      <RentalTimesBar />
      {/* <BrandsSection /> */}
      <LuxuryCollectionSection />
    </div>
  );
};

export default HeroSection;
