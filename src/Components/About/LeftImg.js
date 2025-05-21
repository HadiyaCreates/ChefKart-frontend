
// import React from 'react'

// const LeftImg = () => {
//   return (
//     <div>
//       <section className="text-gray-600  body-font overflow-hidden mt-12 mb-14">
//         <div className="container">
//           <div className="flex flex-col lg:flex-row lg:w-4/3 mx-auto ml-0 lg:ml-[100px] justify-center lg:justify-start text-center lg:text-left gap-[200px]">
//             <img
//               alt="ecommerce"
//               className="lg:w-[400px] lg:h-[400px] w-full h-64 object-cover object-center rounded mx-auto lg:mx-0"
//               src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAbout_us_Banner_02_413026c0c6.webp&w=1920&q=75"
//             />
//             <div className="lg:w-1/2 w-full lg:pl-[5rem] lg:py-6 mt-6 lg:mt-[100px] font-bold w-[550px] ml-0 lg:ml-[30px] text-center lg:text-left mb-10 lg:mb-0">
//               <h2 className="text-lg sm:text-lg title-font text-[#e76f51]">
//               Vision
//               </h2>
//               <h1 className="text-1xl sm:text-3xl md:text-3xl text-black font-medium mb-1 font-extrabold">
//               One kitchen at a time

//               </h1>
//              <p className="leading-relaxed mt-5 font-normal text-sm lg:text-xl">
//   Our vision is to ensure that every household in the country can enjoy quality food prepared by our cooks in their own kitchens.
// </p>
         
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default LeftImg
import React from 'react';

const LeftImg = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden mt-8 mb-10 lg:mt-12 lg:mb-14">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row lg:w-4/3 mx-auto justify-center lg:justify-start text-center lg:text-left gap-10 items-center lg:items-start lg:ml-[100px]">
            
            <img
              alt="ecommerce"
              className="lg:w-[400px] lg:h-[400px] w-full h-64 object-cover object-center rounded mt-[100px] lg:mt-0 h-[22rem] "
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAbout_us_Banner_02_413026c0c6.webp&w=1920&q=75"
            />

            <div className="w-full max-w-[550px] lg:w-1/2 lg:pl-[5rem] lg:py-6 mt-6 lg:mt-[100px] font-bold text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-lg title-font text-[#e76f51]">Vision</h2>
              <h1 className="text-1xl sm:text-3xl md:text-3xl text-black font-medium mb-1 font-extrabold">
                One kitchen at a time
              </h1>
              <p className="leading-relaxed mt-5 font-normal text-sm lg:text-xl">
                Our vision is to ensure that every household in the country can enjoy quality food prepared by our cooks in their own kitchens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeftImg;
