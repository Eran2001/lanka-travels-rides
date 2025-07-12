import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "@/components/ui/Loading";
import Button from "@/components/ui/Button";

const OurFleet = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Drive Lanka | Our Fleet";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;

  const vehicles = [
    {
      title: "Cars",
      description:
        "Fuel-efficient and comfortable options perfect for solo travelers or small families exploring the island.",
      images: [
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg",
        "https://cdn.jdpower.com/Average%20Weight%20Of%20A%20Car.jpg",
        "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/i20/Highlights/pc/i20_Modelpc.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
        "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/electrification/desktop/2024-Mustang-06_43.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg",
        "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/amg-gt-class/2-door/all-vehicles/2024-AMG-GT55-COUPE-AVP-DR.png",
      ],
    },
    {
      title: "SUVs",
      description:
        "Spacious and versatile, ideal for groups and off-road adventures across Sri Lanka’s diverse terrain.",
      images: [
        "https://car-images.bauersecure.com/wp-images/2697/best-electric-cars-2025-renault-scenic-white-front-driving.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSExUlWBZy1sjH6N4-ai4oZ2U7ycqhl8iKXrscI2x_OfDuGUc7pNw7j5UfQ2m8A2TpQJxM&usqp=CAU",
        "https://www.usnews.com/cmsmedia/e4/66/c32525ba4ccdbddfcaa5aaf9eb18/2025ariyamain.jpg",
        "https://auto.hindustantimes.com/htmobile1/nissan_xtrail/images/exterior_nissan-x-trail_front-left-side_600x400.jpg?imwidth=420",
        "https://static.motorway.co.uk/static/assets_seller/hero-bmw-blue.b05b6c811a4915f7813d.png",
        "https://img.autocarindia.com/ExtraImages/20241205062334_20240606032223_Creta%20showroom%20shot%20_1_.jpg",
      ],
    },
    {
      title: "Vans",
      description:
        "Large capacity vans suited for families, tours, and corporate transportation — comfort meets space.",
      images: [
        "https://deyotours.com/wp-content/uploads/2022/09/Big-Van.jpg",
        "https://cdn-cmaji.nitrocdn.com/KIFZgOjkuClQKBjYuclpHfqgfzwfBwhH/assets/images/optimized/rev-f894972/mysltravel.com/wp-content/uploads/2022/08/download-8-1.jpg",
        "https://m.atcdn.co.uk/ect/media/w600/257ab3687b2c4c0bbeda6df951f5fc65.jpg",
        "https://www.explorervan.com/wp-content/uploads/2025/05/20250502_1140_Van-on-Highway-Sunrise_remix_01jt8tdqc8efza0cz0fcvn77qb-1024x683.png",
        "https://5.imimg.com/data5/SELLER/Default/2022/9/FG/PL/LB/159526868/maruti-suzuki-ecco-van.jpg",
        "https://www.casons.lk/thumbnailer.php?url=https://lrnawbodbhe5.objectstorage.uk-london-1.oci.customer-oci.com/p/wu2xha0pJLtGGKV3DjZMer1qsOsjrkKx5tWZK2krsza1dvQdDoOZvqNSQLjcG8sk/n/lrnawbodbhe5/b/ImageStorage/o/casons.lk/VehicleModelmodel/27/thumbnail.png",
      ],
    },
    {
      title: "Strong Vehicles",
      description:
        "Heavy-duty 4x4s and trucks built for tough roads, construction sites, or rural travel needs.",
      images: [
        "https://gst-contracts.s3.ap-southeast-1.amazonaws.com/uploads/bcc/cms/asset/avatar/324800/banner6.jpg",
        "https://www.volvobuses.com/content/dam/volvo-buses/markets/global/classic/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg",
        "https://gos3.ibcdn.com/img-1713444352.jpg",
        "https://jcbl.com/jcbl-images/products/school-bus/school-bus-front-1.jpg",
        "https://www.bus.com/wp-content/themes/redesign/assets/images/home/hero-800.webp",
        "https://lesscarmorelife.com/wp-content/uploads/2023/03/img_6042-1.jpg?w=1024",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-16 mt-27">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <section className="text-center py-16 bg-[#f4d35e] rounded-lg mb-24">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Explore Sri Lanka with Ease
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our Rent with Driver service offers a stress-free way to explore Sri
            Lanka. Our experienced drivers are not only skilled behind the wheel
            but also knowledgeable about the best routes, attractions, and
            hidden gems across the country.
          </p>
        </section> */}

        <section className="text-center py-16 bg-[#f4d35e] rounded-lg mb-24">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our diverse range of vehicles, from compact cars to
            heavy-duty trucks, designed to meet all your travel needs in Sri
            Lanka.
          </p>
        </section>

        {/* Category Blocks */}
        {vehicles.map((category, index) => (
          <section key={index} className="mb-42">
            <h2 className="text-3xl font-semibold text-[#5c3d2e] text-center mb-6">
              {category.title}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              {category.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((img, i) => (
                <div
                  key={i}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
                >
                  <img
                    src={img}
                    alt={`${category.title} ${i + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    {/* <Link
                      to="/rent-vehicles"
                      className="opacity-0 group-hover:opacity-100 bg-[#f4d35e] text-[#5c3d2e] font-bold py-2 px-4 rounded-full hover:bg-[#e0c250] transition"
                    >
                      View Details
                    </Link> */}
                    <Button
                      text="View Details"
                      onClick={() => navigate("/rent-vehicles")}
                      className="px-8 py-4 max-sm:px-10 max-sm:py-4 mt-8 opacity-0 group-hover:opacity-100 rounded-4xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Call to Action */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
            Ready to Choose Your Vehicle?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our fleet and book the perfect vehicle for your journey
            today.
          </p>
          <Link
            to="/rent-vehicles"
            className="bg-[#f4d35e] text-[#5c3d2e] font-bold py-3 px-6 rounded-full hover:bg-[#e0c250] transition"
          >
            Book Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default OurFleet;
