import React from "react";

const OurTeam = () => {
  return (
    <section className="py-12 bg-white w-full sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#5c3d2e] sm:text-4xl xl:text-5xl font-pj">
            Meet Our Car Rental Experts
          </h2>
        </div>

        <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
          {/* Member 1 */}
          <div>
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png"
              alt="Team member"
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              Jerome Bell
            </p>
            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
              Founder & CEO
            </p>
          </div>

          {/* Member 2 */}
          <div>
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png"
              alt="Team member"
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              Angela Taylor
            </p>
            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
              Operations Manager
            </p>
          </div>

          {/* Member 3 */}
          <div>
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png"
              alt="Team member"
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              Michael Lee
            </p>
            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
              Fleet Supervisor
            </p>
          </div>

          {/* Member 4 */}
          <div>
            <img
              className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png"
              alt="Team member"
            />
            <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
              Emily Davis
            </p>
            <p className="mt-2 text-base font-normal text-gray-600 font-pj">
              Customer Experience Lead
            </p>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <svg
            className="w-auto h-4 mx-auto text-gray-300"
            viewBox="0 0 172 16"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[...Array(24)].map((_, i) => (
              <line
                key={i}
                y1="-0.5"
                x2="18.0278"
                y2="-0.5"
                transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${
                  7 * i + 4
                } 1)`}
              />
            ))}
          </svg>
        </div>

        <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
          <div>
            <img
              className="w-auto mx-auto h-11"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-waverio.svg"
              alt="Partner 1"
            />
          </div>
          <div>
            <img
              className="w-auto mx-auto h-11"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-squarestone.svg"
              alt="Partner 2"
            />
          </div>
          <div>
            <img
              className="w-auto mx-auto h-11"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/team/1/logo-creaty.svg"
              alt="Partner 3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
