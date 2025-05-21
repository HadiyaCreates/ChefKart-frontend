
import React from "react";

const Start = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col md:flex-row md:flex-wrap md:-m-4 text-center md:ml-[240px]">
            <div className="p-4 sm:w-1/4 w-full">
              <div className="relative flex flex-col items-center">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 md:absolute md:ml-[100px]">
                  3M+
                </h2>
                <img
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMeals_served_92de767bda.png&w=1080&q=75"
                  alt=""
                  className="w-[50px] h-[50px] mt-4 md:ml-[160px]"
                />
                <p className="leading-relaxed mt-2">Meals cooked with love</p>
              </div>
            </div>

            <div className="p-4 sm:w-1/4 w-full">
              <div className="relative flex flex-col items-center">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 md:absolute md:ml-[100px]">
                  4500+
                </h2>
                <img
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVector_8_3e4e1c99f1.png&w=3840&q=75"
                  alt=""
                  className="w-[50px] h-[50px] mt-4 md:ml-[190px]"
                />
                <p className="leading-relaxed mt-2">Verified & Trained Cooks</p>
              </div>
            </div>

            <div className="p-4 sm:w-1/4 w-full">
              <div className="relative flex flex-col items-center">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 md:absolute md:ml-[100px]">
                  10K+
                </h2>
                <img
                  src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNumber_1c7b2a26ab.png&w=3840&q=75"
                  alt=""
                  className="w-[50px] h-[50px] mt-4 md:ml-[170px]"
                />
                <p className="leading-relaxed mt-2">Households served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Start;
