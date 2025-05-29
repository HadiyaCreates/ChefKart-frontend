
import React from 'react';

const AboutHero = () => {
  return (
    <div className="bg-[#f5f5f5] py-[7rem] px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden">
      
      {/* Text Section */}
      <div className="max-w-xl z-10 mt-[5rem] md:mt-0">
        <button className="bg-green-800 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Our Story
        </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Embracing the goal of <br />
          <span className="text-green-800">Change & Empowerment</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          We aim to bridge the gap between delicious food and a healthy lifestyle while empowering our cooks.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold">
          Contact Us
        </button>
      </div>

      {/* Image Section */}
      <div className="relative flex-shrink-0 mb-10 md:mb-0">
        {/* Orange circle behind */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-500 rounded-full z-0"></div>

        {/* Food Image (Background) */}
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAbout_us_hero_image_fd3a429d41.webp&w=1920&q=75"
          alt="Food"
          className="w-[300px] md:w-[400px] rounded-2xl object-cover z-0"
        />

        {/* Chef Image (Foreground, floating) */}
        <div className="absolute -bottom-10 -left-10 lg:ml-[-100px] md:ml-0 sm:ml-0 md:-bottom-16 md:-left-16 z-10">
          <div className="bg-orange-500">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAbout_us_hero_image_mob_01_copy_d07ace60ab.webp&w=1920&q=75"
              alt="Chef"
              className="w-[180px] md:w-[290px] object-cover"
            />
          </div>
        </div>

        {/* Bottom orange circle */}
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-orange-500 rounded-full z-0"></div>
      </div>
    </div>
  );
};

export default AboutHero;
