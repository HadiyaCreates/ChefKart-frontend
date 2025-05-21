import React from 'react';

const LeftVideo = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        {/* Heading */}
        {/* <h1 className="text-center font-bold text-black text-xl md:text-2xl lg:text-4xl mt-10">
          Let's hear it from our Customer
        </h1> */}

        {/* Video + Text Wrapper */}
        <div className="container px-5 py-24 mx-auto flex flex-col-reverse lg:flex-row items-center">
          
          {/* 👉 Video on Left */}
          <div className="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 lg:mt-0">
            <div className="relative w-full h-full">
              <video
                playsInline
                controls
                loop
                src="https://storage.googleapis.com/chefkart-strapi-media/cook_vid_low_quality_8_mb_1249700be8.mp4"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              >
                <track kind="captions" />
              </video>
            </div>
          </div>

          {/* 👉 Text on Right */}
          <div className="lg:w-1/2 w-full px-4 lg:px-10">
            <img src="https://thechefkart.com/comma.svg" alt="Quote" className="mb-4 w-10 h-10" />
            <p className="text-[1.8rem] leading-relaxed">
             Where you're not respected, ChefKart will never send you to that home.
            </p>
            <p className="text-[#e76f51] text-xl font-bold mt-5">Unknown Women</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftVideo;
