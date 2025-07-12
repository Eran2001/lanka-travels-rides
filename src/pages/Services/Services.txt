import React, { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Drive Lanka | Services";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 text-[#5c3d2e] mt-27">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-[#5c3d2e] sm:text-4xl text-center mb-12">
          Our Vehicle Categories
        </h2>

        {/* Category Block */}
        {[
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
        ].map((category, index) => (
          <div key={index} className="mb-34 shadow-2xl p-6">
            <h3 className="text-3xl text-center font-semibold mb-2">
              {category.title}
            </h3>
            <p className="text-lg mb-6 text-center">{category.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.images.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={img}
                    alt={`${category.title} ${i + 1}`}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
