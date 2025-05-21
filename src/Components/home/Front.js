import React from "react";

const Front = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center text-white"
      style={{ backgroundImage: "url('https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FWebsite_Homepage_banner_01_9ec160c34d.webp&w=1920&q=75')" }}
    >
      <div className="absolute inset-0  opacity-50"></div>

      <div className="relative z-10 px-6 md:px-16 max-w-5xl w-full">
        {/* Badge */}
        <div className="bg-[#593f62] text-white text-sm px-4 py-1 rounded-full inline-flex items-center gap-2 mb-4">
          <span className="flex ml-[-10px] gap-3"> <img src="https://thechefkart.com/toast-burger-icon.svg" alt="" />   Operational in Delhi NCR, Bengaluru and Mumbai.</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Most Trusted Platform for <br /> At-Home Cooking Services
        </h1>

        {/* Subheading */}
        <p className="text-lg text-orange-400 font-semibold mb-6">
          Find your perfect cook
        </p>

        {/* Button */}
        <button className="bg-[#FF961F] hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md">
          Download App
        </button>
      </div>

      {/* Right Side Image
      <div className="absolute right-0 bottom-0 hidden md:block z-10 max-w-xl">
        <img
          src="https://your-image-url-here.com/chefs.png"
          alt="Chefs"
          className="w-full h-auto"
        />
      </div> */}
    </div>
  );
};

export default Front;
