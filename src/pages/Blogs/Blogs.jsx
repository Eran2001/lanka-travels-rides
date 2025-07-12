import React, { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const blogs = [
  {
    date: "June 28, 2025",
    title: "Top 10 Tips for Renting a Car on a Budget",
    image:
      "https://www.nerdwallet.com/tachyon/2017/03/GettyImages-1419724017.jpg?resize=2400%2C1440",
  },
  {
    date: "June 24, 2025",
    title: "The Ultimate Guide to Vacation Rentals for Families",
    image:
      "https://www.ameliarentals.com/wp-content/uploads/2021/05/image006-600x400.jpg",
  },
  {
    date: "June 21, 2025",
    title: "Avoiding Hidden Fees in Rental Agreements",
    image:
      "https://www.avail.co/wp-content/uploads/2020/11/rental-and-application-fees.jpg",
  },
  {
    date: "June 18, 2025",
    title: "How to Find the Best Deals on Rental Homes",
    image:
      "https://www.teifkerealestate.com/wp-content/uploads/2023/03/rental-properties-featured-image.jpg",
  },
  {
    date: "June 15, 2025",
    title: "Essential Checklist Before Renting a Property",
    image:
      "https://cdn.prod.website-files.com/62003a135c2613db4292bc04/679befb1cab9b42159bb7fd9_20250130T0830-a48c7313-2ade-414e-bfd0-8963b258b6b3.webp",
  },
  {
    date: "June 12, 2025",
    title: "Short-Term vs. Long-Term Rentals: What’s Right for You?",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjbnl7gdK68V9VpC2Pzvrkz-wDbs5YTqFrw&s",
  },
  {
    date: "June 9, 2025",
    title: "Top Rental Platforms Reviewed: Airbnb, Vrbo, and More",
    image:
      "https://oyelabs.com/wp-content/uploads/2024/09/Top-Airbnb-Like-Apps-in-the-USA.png",
  },
  {
    date: "June 6, 2025",
    title: "The Pros and Cons of Renting a Vacation Apartment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9dizo6qqW-7Fppo4L4Z8BXsWSAkzhh-R2YmL605R9zjed65mSVv7voUfXxLJYr3v1YTU&usqp=CAU",
  },
  {
    date: "June 3, 2025",
    title: "Tips for Renting Out Your Home While Traveling",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHSZguaLCVU4fE_56_gxdxFIDR2S_j8IUfnHBUndB78ceegoqdEbFcK2yj78X7fqZoqn8&usqp=CAU",
  },
  {
    date: "May 30, 2025",
    title: "How to Stay Safe in a Rented Property Abroad",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtv20nL2v6bq-wU8wlJYTDNAHsdO4gfdkng&s",
  },
  {
    date: "May 27, 2025",
    title: "Understanding Rental Insurance: Do You Need It?",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XehWCNSNxZTRJSo6cIWZ-ZF_8gxuJCr-oQ&s",
  },
  {
    date: "May 24, 2025",
    title: "Pet-Friendly Rentals: What You Need to Know",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt7jTzacveKyYRUDuLAfyA21g-0qFcLgWz1A&s",
  },
  {
    date: "May 20, 2025",
    title: "A Guide to Furnished vs. Unfurnished Rentals",
    image:
      "https://sharedeasy.club/wp-content/uploads/blog/furnished-vs-unfurnished.jpg",
  },
  {
    date: "May 16, 2025",
    title: "Common Mistakes Renters Make and How to Avoid Them",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6mWAy0NVRAudATomrJAbOskhmLQla9HtDg&s",
  },
  {
    date: "May 13, 2025",
    title: "How to Negotiate Rental Prices with Landlords",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJa6E6L-w_2yhuC5UafeId-Sva1a70xGfV_g&s",
  },
  {
    date: "May 9, 2025",
    title: "Your First Rental: A Step-by-Step Guide",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZSM9RQcIWb_7bnLfoGEoqHVpAnCuZsl9Rg&s",
  },
  {
    date: "May 5, 2025",
    title: "How to List Your Property for Rent Effectively",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSdOGR9SD0Z4hOmGsSqyo_TOGZRJBZC5P0A&s",
  },
  {
    date: "May 1, 2025",
    title: "Smart Devices to Have in Your Rental Property",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKA3DrbwgrcbVRuAr8ZpEVZZedUslZdjdw4Q&s",
  },
  {
    date: "April 28, 2025",
    title: "Best Cities for Vacation Rentals in 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2fjVcmhviThCTNiiHDBeQfPPjeLT7DU_sg&s",
  },
  {
    date: "April 24, 2025",
    title: "Renting vs. Buying: Pros and Cons You Need to Know",
    image:
      "https://cdn.prod.website-files.com/5f18a24d02bace2ac2d05bac/677fdf4320dcb7fa4b16792a_62504ead6854d0cd18213c28_renting-vs-buying-differences.png",
  },
  {
    date: "June 28, 2025",
    title: "Top 10 Tips for Renting a Car on a Budget",
    image:
      "https://www.nerdwallet.com/tachyon/2017/03/GettyImages-1419724017.jpg?resize=2400%2C1440",
  },
];

export default function Blogs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.title = "Drive Lanka | Our Blog";
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20 mt-27">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#5c3d2e] sm:text-4xl ">
              Read our blog
            </h2>
            <p className=" mt-4 text-base text-[#5c3d2e]">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div> */}

          {/* <section className="text-center py-16 bg-[#f4d35e] rounded-lg mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#5c3d2e] mb-4">
              Read our blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </section> */}

          <section className="text-center py-16 bg-[#f4d35e] rounded-lg">
            <h2 className="text-3xl font-semibold text-[#5c3d2e] mb-4">
              Read our blog
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover helpful tips, industry insights, and the latest updates
              on travel, rentals, and more. Our blog is packed with valuable
              information designed to inspire and guide you—whether you're
              planning your next trip, exploring lifestyle ideas, or looking for
              expert advice. No coding needed—just scroll, read, and enjoy!
            </p>
          </section>

          <div className="grid max-w-6xl grid-cols-1 mx-auto mt-8 text-center sm:mt-16 sm:text-left sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">
            {blogs.map((blog, index) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden rounded-lg w-full h-[250px]">
                  <img
                    className="object-cover w-full h-full transition-all duration-300 transform group-hover:scale-110"
                    src={blog.image}
                    alt={blog.title}
                  />
                </div>

                <p className="mt-6 text-sm font-normal text-gray-600 font-pj">
                  {blog.date}
                </p>
                <p className="mt-4 text-xl font-bold text-gray-900 font-pj">
                  {blog.title}
                </p>
                <a href="#" title="">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
