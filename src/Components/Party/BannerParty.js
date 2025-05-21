
// import React from 'react';
// // import bgImage from './img.jpg'; // Update path if needed

// const BannerParty = () => {
//   return (
//     <section
//       className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
//       style={{ backgroundImage: `url(https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FChefit_Hero_banner_f573fdf12c.webp&w=3840&q=75)` }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0" />

//       {/* Content */}
//       <div className="relative z-10 w-full px-6 md:px-12">
//         <div className="max-w-3xl text-left text-white">
//           <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
//          Hire the Best Chef for Party<br />
//             <span className="text-orange-500 text-5xl">In Delhi-NCR, Bangalore & Mumbai</span>
//           </h1>
//           <p className="text-lg mb-6 w-[500px]">
//            Experience the taste from around the world without leaving the coziness of home.
//           </p>
//           <button className="bg-[#FF961F] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BannerParty;
import React from 'react';

const BannerParty = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FWebsite_banner_01_web_1_40ea9de1d0.webp&w=1920&q=75)`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12">
        <div className="max-w-3xl text-left text-white">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug mb-4">
            Hire the Best Chef for Party<br />
            <span className="text-[#ff961f] text-3xl sm:text-4xl md:text-5xl">
              In Delhi-NCR, Bangalore & Mumbai
            </span>
          </h1>
          <p className="text-base sm:text-lg mb-6 max-w-full sm:max-w-md md:max-w-lg">
            Experience the taste from around the world without leaving the coziness of home.
          </p>
          <button className="bg-[#FF961F] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerParty;
