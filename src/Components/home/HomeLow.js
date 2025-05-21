
import React from 'react';
import { Link } from 'react-router-dom';

const HomeLow = () => {
  return (
    <section className="bg-[#fff3e8] text-gray-800 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between flex-wrap gap-8">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold md:w-2/5">
          <span className="text-black">Become a part of our team of over 4,500 cooks.</span>
        </h2>

        {/* CTA Button */}
        <div className=" flex justify-start  md:mr-16 ">
          <Link to="/join-chefkart">
            <button className="bg-[#ff961f] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#cf7511] transition duration-300">
              Connect with Chefkart
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeLow;
