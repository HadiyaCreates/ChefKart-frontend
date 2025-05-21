import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeCard = () => {
  const navigate = useNavigate();

  return (
    <>
    <h2 className='text-gray-400 text-2xl mt-10 font-bold text-center'>Blog</h2>
    <h1 className='text-center font-bold text-4xl mt-3'>Cuisines worth travelling, now at your fingertips</h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4 py-10 bg-white">
     
      
      {/* First Blog Card */}
      <div
        className="relative w-full max-w-sm rounded-xl overflow-hidden cursor-pointer"
        onClick={() => navigate('/blog/hire-a-cook-for-home')}
      >
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_02_c103cf5073.webp&w=1920&q=75"
          alt="Hire a Cook"
          className="w-full h-[360px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 flex flex-col justify-end text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-orange-500 text-xs font-semibold px-2 py-1 rounded">Find a cook</span>
            <span className="text-sm">• 5 min min read</span>
          </div>
          <h3 className="text-xl font-bold leading-tight">
            6 things to keep in mind when hiring a cook for home
          </h3>
        </div>
      </div>

      {/* Second Blog Card */}
      <div
        className="relative w-full max-w-sm rounded-xl overflow-hidden cursor-pointer"
        onClick={() => navigate('/blog/Empowering-cooks')}
      >
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_03_0008b023df.webp&w=3840&q=75"
          alt="Empowering Cooks"
          className="w-full h-[360px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-4 flex flex-col justify-end text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-orange-500 text-xs font-semibold px-2 py-1 rounded">Our Partners</span>
            <span className="text-sm">• 3 min min read</span>
          </div>
          <h3 className="text-xl font-bold leading-tight">
            Empowering the domestic working community
          </h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeCard;
