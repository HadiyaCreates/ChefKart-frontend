
import React from 'react';

const Head = () => {
  return (
    <div
      className="head-main flex items-center justify-center gap-2 px-4 py-2"
      style={{ backgroundColor: '#FAEEE6' }}
    >
      <div className="img-bowl w-8 h-8 sm:w-9 sm:h-9">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fbowl_1_1_2ac60a2617.png&w=96&q=75"
          alt="bowl"
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="text-head font-medium text-[clamp(0.9rem,3.5vw,1.2rem)] leading-tight text-center"
        style={{ fontFamily: 'sans-serif' }}
      >
        Chefit service is available only in Gurugram.
      </div>
    </div>
  );
};

export default Head;
