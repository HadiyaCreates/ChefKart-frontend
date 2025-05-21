
import React from 'react';
// import bgImage from './img.jpg'; // Update path if needed

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{ backgroundImage: `url(https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FChefit_Hero_banner_f573fdf12c.webp&w=3840&q=75)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-3xl text-left text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Get a Cook for One-Time <br />
            <span className="text-orange-500">Within 60 Minutes</span>
          </h1>
          <p className="text-lg mb-6">
            Forget ordering online! Get fresh food cooked in your kitchen.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
