import React from "react";

const LocationMap = () => {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.297997496298!2d80.23939421531675!3d6.035949528283173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1731582b95293%3A0xacbc73c2354dcaba!2sLarif%20Travels%20%26%20Tours!5e0!3m2!1sen!2slk!4v1729343876543!5m2!1sen!2slk";

  return (
    <div className="bg-white pb-24 w-full pt-8">
      <div className="xl:w-7xl lg:w-5xl md:w-3xl sm:w-2xl max-sm:w-[100%] mx-auto">
        <h2 className="text-3xl font-bold text-[#5c3d2e] text-center mb-6">
          Our Location
        </h2>
        <p className="text-center text-[#5c3d2e] mb-10 text-lg">
          Visit our office at Larif Travels & Tours
        </p>
        <div className="w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#006D5B]">
          <iframe
            title="Larif Travels & Tours Location"
            aria-label="Map showing the location of Larif Travels & Tours in Galle, Sri Lanka"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
