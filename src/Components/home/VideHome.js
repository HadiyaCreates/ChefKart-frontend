// import React from 'react';

// export default function VideoHome() {
//   return (
//     // <section className="relative w-full h-[500px] overflow-hidden">
//     //   {/* Top Curve */}
//     //   <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
//     //     <svg
//     //       viewBox="0 0 500 150"
//     //       preserveAspectRatio="none"
//     //       className="w-full h-[100px]"
//     //     >
//     //       <path
//     //         d="M0.00,49.98 C150.00,150.00 349.91,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
//     //         style={{ fill: '#fff' }}
//     //       ></path>
//     //     </svg>
//     //   </div>

//     //   {/* Background Video */}
//     //   <video
//     //     className="absolute top-0 left-0 w-full h-full object-cover"
//     //     autoPlay
//     //     muted
//     //     loop
//     //     playsInline
//     //   >
//     //     <source src="https://storage.googleapis.com/chefkart-strapi-media/hygiene_740470aa24_674070e837.mp4" type="video/mp4" />
//     //     Your browser does not support the video tag.
//     //   </video>

//     //   {/* Overlay */}
//     //   <div className="absolute inset-0 bg-black bg-opacity-40" />

//     //   {/* Text Content */}
//     //   <div className="relative z-10 h-full flex items-center px-6 md:px-16">
//     //     <div className="max-w-2xl">
//     //       <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
//     //         Your Safety, Our Top-Priority
//     //       </h2>
//     //       <p className="text-white text-lg font-medium">
//     //         All our chefs follow the food safety guidelines and{' '}
//     //         <br/>
//     //         <span className="text-[#f7931e] font-bold text-xl">
//     //           adhere to hygienic practices.
//     //         </span>
//     //       </p>
//     //     </div>
//     //   </div>
//     // </section>
//       <div className="w-full overflow-hidden">
//       {/* Stats Section */}
//       <div className="bg-white text-center py-12 relative z-10">
//         <div className="flex flex-col md:flex-row justify-center items-center gap-10">
//           <div>
//             <h2 className="text-4xl font-bold">3M+</h2>
//             <p className="text-lg mt-2">Meals cooked with love</p>
//           </div>
//           <div>
//             <h2 className="text-4xl font-bold">4500+</h2>
//             <p className="text-lg mt-2">Verified & trained cooks</p>
//           </div>
//           <div>
//             <h2 className="text-4xl font-bold">10K+</h2>
//             <p className="text-lg mt-2">Households served</p>
//           </div>
//         </div>

//         {/* Curve */}
//         <svg
//           className="absolute bottom-0 left-0 w-full"
//           viewBox="0 0 1440 150"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//         >
//           <path
//             d="M0 0C240 150 1200 150 1440 0V150H0V0Z"
//             fill="white"
//           />
//         </svg>
//       </div>

//       {/* Video Background Section */}
//       <div className="relative w-full h-[400px] overflow-hidden">
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src="https://storage.googleapis.com/chefkart-strapi-media/hygiene_740470aa24.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         {/* Overlay Content */}
//         <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-4 text-white">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Safety, Our Top-Priority</h2>
//           <p className="text-lg font-medium">
//             All our cooks follow the food safety guidelines &{" "}
//             <span className="text-orange-400 font-semibold">adhere to hygienic</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from 'react';

export default function VideoHome() {
  return (
    <div className="w-full overflow-hidden">
      {/* Stats Section */}
      <div className="bg-white text-center py-12 relative z-20">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div>
            <h2 className="text-4xl font-bold">3M+</h2>
            <p className="text-lg mt-2">Meals cooked with love</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">4500+</h2>
            <p className="text-lg mt-2">Verified & trained cooks</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p className="text-lg mt-2">Households served</p>
          </div>
        </div>

        {/* Curve */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C240 150 1200 150 1440 0V150H0V0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[500px] overflow-hidden z-10">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://storage.googleapis.com/chefkart-strapi-media/hygiene_740470aa24.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center px-6 text-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Safety, Our Top-Priority</h2>
            <p className="text-lg md:text-xl font-medium">
              All our cooks follow the food safety guidelines &{' '}
              <span className="text-[#f7931e] font-bold">adhere to hygienic practices</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

