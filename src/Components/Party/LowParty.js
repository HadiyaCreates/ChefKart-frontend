// import React from "react";

// const LowParty = () => {
//   return (
//     <section className="bg-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10">
//       {/* Left Text Section */}
//       <div className="md:w-1/2">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//           Let Food Do The <br /> Talking
//         </h1>
//         <p className="text-lg text-gray-700">
//           Enjoy the spotlight with a chef for birthday, kitty party, anniversaries,
//           house-warming, farewell, and any other party.
//         </p>
//       </div>

//       {/* Right Image Section */}
//       <div className="md:w-1/2 flex justify-center">
//         <img
//           src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fcook_1_3efd7cf8b6_71550458c9.webp&w=1920&q=75" // Replace with actual path or imported image
//           alt="ChefKart Chefs"
//           className="max-w-full h-auto"
//         />
//       </div>
//     </section>
//   );
// };

// export default LowParty;
import React from "react";

const LowParty = () => {
  return (
    <section className="bg-white pt-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 bg-[#f1f1f1]">
      {/* Left Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-[40px] md:text-[48px] font-bold leading-tight text-[#00202F] mb-4">
          Let Food Do The <br /> Talking
        </h1>
        <p className="text-[20px] leading-relaxed text-[#00202F]">
          Enjoy the spotlight with a chef for birthday, kitty party, anniversaries,
          house-warming, farewell, and any other party.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fcook_1_3efd7cf8b6_71550458c9.webp&w=1920&q=75"
          alt="ChefKart Chefs"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default LowParty;
