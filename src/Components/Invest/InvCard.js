
import React from "react";
import { useNavigate } from "react-router-dom";

const InvCard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gray-50 px-6 py-12 sm:px-10 sm:py-12 md:mr-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center md:text-left">
          Blogs
        </h1>

        <div
          className="max-w-sm mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer"
          onClick={() => navigate("/blog/Find-Cook")}
        >
          <img
            src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_01_d49831e21c.webp&w=1920&q=75"
            alt="Cook"
            className="w-full h-48 sm:h-60 object-cover"
          />
          <div className="p-5">
            <p className="text-gray-500 text-sm mb-1">Subi Kumari</p>
            <h2 className="text-lg font-bold text-gray-900 leading-snug mb-3">
              How to find the best cook for home
            </h2>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>February 10, 2023</span>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvCard;
