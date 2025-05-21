import React from "react";

const CategoryIn = () => {
  return (
    <div
      className="w-full h-[400px] bg-cover bg-center flex items-center px-6 md:px-20"
      style={{ backgroundImage: `url(https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FInvestor_Hero_banner_1_f1154a025e.webp&w=1920&q=75)` }}
    >
      <div className="text-white text-3xl md:text-4xl font-semibold leading-snug max-w-2xl">
        We are <span className="text-orange-500 font-bold">category creators</span>, <br />
        dedicated to <span className="text-orange-500 font-bold">simplifying the <br /> way India eats</span>
      </div>
    </div>
  );
};

export default CategoryIn;
