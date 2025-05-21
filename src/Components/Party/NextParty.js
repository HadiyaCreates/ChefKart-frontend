
import React from 'react';

export default function NextParty() {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Text Section */}
        <div className="text-left max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#04252f] leading-snug mb-4">
            Our affordable prices <br />
            are based on <span className="text-[#ea6f52] font-bold">4 Factors</span>
          </h2>
          <p className="text-[#04252f] text-lg">Minimum prices guaranteed*</p>
        </div>

        {/* Right Icon/Image Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center text-[#04252f]">
          {/* Factor 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBatch_Assign_54bbf77213.png&w=1920&q=75"
              alt="No. of People"
              className="w-[4rem] h-[4rem] object-contain"
            />
            <span className="mt-2 font-semibold text-base text-center">No. of People</span>
          </div>

          {/* Factor 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNoodles_77d70fadf1.png&w=1920&q=75"
              alt="No. of Dishes"
              className="w-[4rem] h-[4rem] object-contain"
            />
            <span className="mt-2 font-semibold text-base text-center">No. of Dishes</span>
          </div>

          {/* Factor 3 */}
          <div className="flex flex-col items-center">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVegan_Food_b23033b652.png&w=1920&q=75"
              alt="Cuisine Preference"
              className="w-[4rem] h-[4rem] object-contain"
            />
            <span className="mt-2 font-semibold text-base text-center">Cuisine Preference</span>
          </div>

          {/* Factor 4 */}
          <div className="flex flex-col items-center">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FPlace_Marker_e599ac1ded.png&w=1920&q=75"
              alt="Location"
              className="w-[4rem] h-[4rem] object-contain"
            />
            <span className="mt-2 font-semibold text-base text-center">Location</span>
          </div>
        </div>
      </div>
    </section>
  );
}
