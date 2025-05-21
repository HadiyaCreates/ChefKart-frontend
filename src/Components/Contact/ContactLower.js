
import React from 'react';
import Faq from "../Contact/Faq"
const ContactLower = () => {
  return (
<>
<section className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-5 py-16 gap-10">

        {/* Left Section - Mission Text + Image */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
          <p className="font-bold text-xl font-sans text-black mb-6">
            Our mission is to provide <span className="text-[#e76f51]">at-home cooking</span> services in a way that has never been experienced before by empowering millions of cooks across India.
          </p>
          <img
            className="object-cover object-center rounded max-w-full h-auto"
            alt="Mission"
            src="https://thechefkart.com/_next/image?url=%2FM_F_Home%20chef_refine%201.png&w=640&q=75"
          />
        </div>

        {/* Right Section - About Text + Image */}
        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            className="object-cover object-center rounded max-w-full h-auto mb-6"
            alt="About"
            src="https://thechefkart.com/_next/image?url=%2FImage.png&w=640&q=75"
          />
          <p className="mb-4 leading-relaxed text-base">
            ChefKart is a platform that connects home chefs and households seamlessly by building an ecosystem. Our professionals are handpicked to serve you hygienic and wholesome meals catered to your taste!
          </p>
          <div className="read">
            <a href="#" className="text-md text-red-500 underline hover:text-red-700 transition">
              Read about our story
            </a>
          </div>
        </div>

      </div>
    </section>
    <Faq/>
   </>  
);
};

export default ContactLower;
