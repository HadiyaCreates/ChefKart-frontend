
import React from "react";

const AppVideo = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center px-6 py-16 bg-white gap-12">
      {/* Phone with video inside */}
      <div className="relative w-[300px] h-[620px] sm:w-[350px] sm:h-[680px] mt-[-120px] lg:mt-[-90px] mb-[-30px] lg:mb-[-110px]">
        <img
          src="https://thechefkart.com/phone.png"
          alt="Phone Frame"
          className="w-full h-full object-contain z-20 relative"
        />

        {/* Video inside phone screen */}
        <div className="absolute top-[158px] left-[81px] w-[140px] h-[300px] sm:top-[164px] sm:left-[92px] sm:w-[166px] sm:h-[354px] rounded-[26px] overflow-hidden z-10">
          <video
            src="https://storage.googleapis.com/chefkart-strapi-media/public/AppDemoForWebsite.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text and Download Section */}
{/* <div className="max-w-xl text-center lg:text-left"> */}
<div className="max-w-xl text-center lg:text-left mt-[-70px] lg:mt-0">
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black mb-4">
    Let’s take it forward
  </h2>
  <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-800 border-l-4 border-green-600 pl-4 mb-3">
    This is as easy as it gets! Good cooks are just a click away.
  </p>
  <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-6">
    Download the App and get started.
  </p>

  {/* App Store Buttons */}
  <div className="flex justify-center lg:justify-start gap-4">
    <img
      src="https://storage.googleapis.com/chefkart-strapi-media/app_store_icon_555c3446a1.svg"
      alt="App Store"
      className="w-28 sm:w-32 lg:w-36"
    />
    <img
      src="https://storage.googleapis.com/chefkart-strapi-media/play_icon_358c0e85c1.svg"
      alt="Google Play"
      className="w-32 sm:w-36 lg:w-40"
    />
  </div>
</div>
    </section>
  );
};

export default AppVideo;
