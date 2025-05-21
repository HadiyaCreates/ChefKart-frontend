
// import React from "react";

// const StartSection = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="flex flex-col md:flex-row md:flex-wrap md:-m-4 text-center md:ml-[240px]">
//             <div className="p-4 sm:w-1/4 w-full">
//               <div className="relative flex flex-col items-center">
//                 <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-900 md:absolute md:ml-[100px]">
//                   3M+
//                 </h2>
//                 <img
//                   src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMeals_served_92de767bda.png&w=1080&q=75"
//                   alt=""
//                   className="w-[60px] h-[60px] mt-2 md:ml-[220px]"
//                 />
//                 <p className="leading-relaxed mt-2 md:ml-[100px]">Meals cooked with love</p>
//               </div>
//             </div>

//             <div className="p-4 sm:w-1/4 w-full">
//               <div className="relative flex flex-col items-center">
//                 <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-900 md:absolute md:ml-[100px]">
//                   4500+
//                 </h2>
//                 <img
//                   src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVector_8_3e4e1c99f1.png&w=3840&q=75"
//                   alt=""
//                   className="w-[80px] h-[80px] mt-1 md:ml-[240px]"
//                 />
//                 <p className="leading-relaxed mt-2 md:ml-[100px]">Verified & Trained Cooks</p>
//               </div>
//             </div>

//             <div className="p-4 sm:w-1/4 w-full">
//               <div className="relative flex flex-col items-center">
//                 <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-900 md:absolute md:ml-[100px]">
//                   10K+
//                 </h2>
//                 <img
//                   src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNumber_1c7b2a26ab.png&w=3840&q=75"
//                   alt=""
//                    className="w-[75px] h-[75px] mt-1 md:ml-[215px]"
//                 />
//                 <p className="leading-relaxed mt-2 md:ml-[100px]">Households served</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default StartSection;
import React from "react";

const StartSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 lg:py-24 mx-auto md:py-[2rem]">
        <div className="flex flex-col md:flex-row md:flex-wrap md:-m-4 text-center md:ml-[240px] items-center">
          
          {/* Block 1 */}
          <div className="p-4 sm:w-1/4 w-full">
            <div className="relative flex flex-col items-center md:items-start">
              <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-900 md:absolute md:ml-[100px] z-10">
                3M+
              </h2>
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMeals_served_92de767bda.png&w=1080&q=75"
                alt=""
                className="w-[60px] h-[60px] mt-2 md:ml-[190px] -mt-6 md:mt-2 z-0 relative"
              />
              <p className="leading-relaxed mt-2 md:ml-[100px] text-center md:text-left">
                Meals cooked with love
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="p-4 sm:w-1/4 w-full">
            <div className="relative flex flex-col items-center md:items-start">
              <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-900 md:absolute md:ml-[100px] z-10">
                4500+
              </h2>
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVector_8_3e4e1c99f1.png&w=3840&q=75"
                alt=""
                className="w-[80px] h-[80px] mt-1 md:ml-[210px] -mt-6 md:mt-1 z-0 relative"
              />
              <p className="leading-relaxed mt-2 md:ml-[100px] text-center md:text-left">
                Verified & Trained Cooks
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="p-4 sm:w-1/4 w-full">
            <div className="relative flex flex-col items-center md:items-start">
              <h2 className="title-font font-medium sm:text-5xl text-3xl text-gray-900 md:absolute md:ml-[100px] z-10">
                10K+
              </h2>
              <img
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNumber_1c7b2a26ab.png&w=3840&q=75"
                alt=""
                className="w-[75px] h-[75px] mt-1 md:ml-[190px] -mt-6 md:mt-1 z-0 relative"
              />
              <p className="leading-relaxed mt-2 md:ml-[100px] text-center md:text-left">
                Households served
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StartSection;
