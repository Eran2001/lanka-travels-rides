import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "Lanka Travels Rides | Terms & Conditions";
  }, []);
  return (
    <div className="h-screen flex justify-center items-center text-8xl">
      Our Terms & Conditions
    </div>
  );
};

export default Terms;
