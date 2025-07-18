import React, { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

import HeroSection from "../../components/shared/HeroSection";
import CustomerFeedback from "./CustomerFeedback";
import OurTeam from "./OurTeam";
import Services from "./Services";
import FAQ from "../../pages/Home/FAQ";
import OurProgress from "./OurProgress";
import LocationMap from "./LocationMap";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Lanka Travels Rides | Home";
  }, [isLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-">
      <HeroSection />
      <Services />
      <OurProgress />
      <CustomerFeedback />
      <OurTeam />
      <FAQ />
      <LocationMap />
    </div>
  );
};

export default Home;
