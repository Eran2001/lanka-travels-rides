import React, { useEffect, useState } from "react";

import Loading from "@/components/ui/Loading";

const SpecialOffers = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.title = "Lanka Travels Rides | Special Offers";
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="h-screen flex justify-center text-[#5c3d2e] items-center text-8xl">
      Soon.....
    </div>
  );
};

export default SpecialOffers;
