import React from "react";

const FeatureBlock = ({ imgUrl, caption }) => {
  return (
    <div>  
    <div className="w-[15rem] h-48 bg-[#FFFFFF0D] rounded-2xl shadow-md flex flex-col items-center justify-center p-4">
      <div className="w-20 h-20 flex items-center justify-center mb-2">
        <img
          src={imgUrl}
          alt={caption}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <hr className="w-10 border-t-2 border-[#DDCBC2] my-2" />
      <p className="text-sm font-semibold text-white text-center">{caption}</p>
    </div>
    </div>
  );
};

const BlockHome = () => {
  const features = [
    {
      imgUrl:
        "https://storage.googleapis.com/chefkart-strapi-media/professional_cooks_ec13508556.svg",
      caption: "Professional Cooks",
    },
    {
      imgUrl:
        "https://storage.googleapis.com/chefkart-strapi-media/easy_booking_92fea7ca01.svg",
      caption: "Easy Booking",
    },
    {
      imgUrl:
        "https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg",
      caption: "Timely Service",
    },
    {
      imgUrl:
        "https://storage.googleapis.com/chefkart-strapi-media/prompt_support_ca831687ac.svg",
      caption: "Prompt Support",
    },
  ];

  return (
    <div>
        <h1 className="text-3xl text-white bg-[#2c201a] text-center font-bold">Why Choose <span className="text-[#F81]">ChefKart?</span></h1>
    <div className="flex flex-wrap gap-6 justify-center p-6 bg-[#2c201a]">
      {features.map((feature, index) => (
        <FeatureBlock
          key={index}
          imgUrl={feature.imgUrl}
          caption={feature.caption}
        />
      ))}
    </div>
    </div>
  );
};

export default BlockHome;
