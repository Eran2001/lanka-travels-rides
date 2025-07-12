import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Lanka Travels Rides | Privacy Policy";
  }, []);
  return (
    <div className="h-screen flex justify-center items-center text-8xl">
      Our Privacy Policy
    </div>
  );
};

export default PrivacyPolicy;
