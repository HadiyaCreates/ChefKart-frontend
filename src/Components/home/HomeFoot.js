import React from "react";

const HomeFoot = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[300px] flex items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          "url('https://thechefkart.com/_next/image?url=%2Fsample.png&w=1920&q=75')", // replace with actual image URL or local path
      }}
    >
      <div className="absolute inset-0 bg-opacity-60"></div>
      <div className="relative z-10">
        <p className="text-white text-lg sm:text-xl mb-2">
          What are you waiting for, when it’s
        </p>
        <h1 className="text-orange-500 text-2xl sm:text-4xl font-bold w-[350px]">
          Good Food. Good People. Good Life.
        </h1>
      </div>
    </div>
  );
};

export default HomeFoot;
