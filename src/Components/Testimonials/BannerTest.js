import React from 'react';

const BannerTest = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://storage.googleapis.com/chefkart-strapi-media/video_2160p_2_87ad6f832c.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Centered Text */}
      <div className="flex items-center justify-center h-full">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold z-10 text-center">
          What People Think About Us
        </h1>
      </div>
    </div>
  );
};

export default BannerTest;
