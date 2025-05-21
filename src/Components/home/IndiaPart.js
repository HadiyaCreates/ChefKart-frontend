import React from "react";

const IndiaPart = () => {
  return (
    <div className="bg-white py-16 px-4 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSkill_India_Preview_removebg_preview_1_03db4e9828.png&w=384&q=75"
          alt="Skill India"
          className="w-52 md:w-64"
        />
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_07_10_at_4_52_1_658c10251b.png&w=384&q=75"
          alt="THSC"
          className="w-52 md:w-64"
        />
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mt-12">
        Proud Partner with Skill India
      </h2>
      <p className="text-lg md:text-xl text-gray-500 mt-4">
        All our professionals are certified by Govt. of India under Skill India Mission
      </p>
    </div>
  );
};

export default IndiaPart;
