// src/components/ChefCard.jsx
import React from "react";
import { FaPhone, FaStar, FaClock } from "react-icons/fa";
const ChefCard = ({ chef }) => {
  return (
    
    //     <div className="bg-white rounded-xl shadow p-4 flex gap-4 mb-6 items-center max-w-4xl">
    //   <img src={chef.image} alt={chef.name} className="w-24 h-24 rounded-lg object-cover" />
    //   <div className="flex-1">
    //     <div className="flex items-center gap-2">
    //       <h2 className="text-xl font-bold">{chef.name}</h2>
    //       <span className="text-orange-500 flex items-center text-sm font-semibold">
    //         <FaStar className="mr-1" />
    //         {chef.rating} <span className="text-gray-500 ml-1">({chef.ratingCount} Ratings)</span>
    //       </span>
    //     </div>
    //     <p className="text-gray-700">{chef.location}</p>
    //     <div className="flex gap-6 mt-2 text-sm text-gray-700">
    //       <div className="flex items-center gap-2">
    //         <FaPhone className="text-green-500" />
    //         {chef.phone}
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <FaClock />
    //         {chef.experience}
    //       </div>
    //     </div>
    //   </div>
    //   <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full font-semibold">
    //     VERIFIED
    //   </span>
    // </div>
      <div className="bg-white rounded-xl shadow p-4 flex gap-4 mb-6 items-start max-w-4xl">
      {/* Image and badge container */}
      <div className="relative">
        <img
          src={chef.image}
          alt={chef.name}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-0.5 rounded-full font-semibold">
          VERIFIED
        </span>
      </div>

      {/* Text content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-xl font-bold">{chef.name}</h2>
          <span className="text-orange-500 flex items-center text-sm font-semibold">
            <FaStar className="mr-1" />
            {chef.rating}{" "}
            <span className="text-gray-500 ml-1">({chef.ratingCount} Ratings)</span>
          </span>
        </div>
          <p className="mt-3 text-gray-500">{chef.address}</p>
        <p className="text-gray-700">{chef.location}</p>
        <div className="flex gap-20 mt-2 text-sm text-gray-700 flex-wrap ">
          <div className="flex items-center gap-2">
            {/* <FaPhone className="text-green-500" /> */}
            <img src="https://thechefkart.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcall.438984dd.png&w=32&q=75" alt="" className="w-5"/>
            {chef.phone}
          </div>
          <div className="flex items-center gap-2 font-bold">
            {/* <FaClock /> */}
            <img src="https://thechefkart.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexp.523f9b3c.png&w=32&q=75" alt="" className="w-3"/>
            {chef.experience}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
