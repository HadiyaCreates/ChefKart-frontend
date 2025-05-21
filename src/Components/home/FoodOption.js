import React, { useState } from "react";

const FoodOption = () => {
  const [activeTab, setActiveTab] = useState("singles");

  const content = {
    singles: {
      image:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSingles_5497580168.webp&w=1920&q=75", // replace with actual URL
      heading: "No more missing Ghar Ka Khana!",
      subtext: "Let our cooks bring memories of home to your plate.",
    },
    families: {
      image:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FFamily_f0c0d80b42.webp&w=1920&q=75", // replace with actual URL
      heading: "Food catered to every family member!",
      subtext:
        "Spend time with your loved ones as our best cooks take care of the cooking.",
    },
  };

  return (
    <div className="py-10 px-4 text-center bg-white">
      <h1 className="text-3xl md:text-4xl font-bold leading-snug text-black">
        Healthy food cooked in your kitchen, <br />
        whenever you want!
      </h1>

      {/* Tabs */}
      <div className="mt-6 flex justify-center gap-8 text-lg font-medium">
        <button
          onClick={() => setActiveTab("singles")}
          className={`pb-1 border-b-2 ${
            activeTab === "singles"
              ? "text-orange-500 border-orange-500"
              : "text-gray-400 border-transparent"
          }`}
        >
          For Singles
        </button>
        <button
          onClick={() => setActiveTab("families")}
          className={`pb-1 border-b-2 ${
            activeTab === "families"
              ? "text-orange-500 border-orange-500"
              : "text-gray-400 border-transparent"
          }`}
        >
          For Families
        </button>
      </div>

      {/* Content */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          src={content[activeTab].image}
          alt="Food section"
          className="w-full md:w-[400px] rounded-[40px]"
        />
        <div className="text-left max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
            {content[activeTab].heading}
          </h2>
          <p className="text-lg text-gray-600">{content[activeTab].subtext}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodOption;
