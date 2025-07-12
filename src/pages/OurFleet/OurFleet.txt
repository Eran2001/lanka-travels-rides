import React, { useEffect } from "react";

const OurFleet = () => {
  useEffect(() => {
    document.title = "Drive Lanka | Our Fleet";
  }, []);
  return (
    <div className="h-screen flex justify-center items-center text-8xl">
      Our Fleet
    </div>
  );
};

export default OurFleet;
