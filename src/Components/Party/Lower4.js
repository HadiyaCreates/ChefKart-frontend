import React from 'react';

const Lower4 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-green-900 text-white">
      {/* Left Side: Image */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSign_up_d1762e3ca9.webp&w=1920&q=75"
          alt="Family dining"
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Right Side: Text Content with 50px padding on small screens only */}
      <div className="w-full lg:w-1/2 text-center lg:text-left p-[50px] lg:p-0 lg:pl-12">
        <h2 className="text-3xl lg:text-4xl font-bold">
          <span className="text-orange-500">The Taste of Luxury</span> Experience
        </h2>
        <p className="text-xl lg:text-4xl font-bold leading-relaxed">
          elevated culinary perfection, as our{' '}
          <span className="text-orange-500 font-semibold">highly skilled chefs</span> take your party to new heights.
        </p>
      </div>
    </div>
  );
};

export default Lower4;
