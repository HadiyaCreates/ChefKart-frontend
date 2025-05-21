// import React from "react";

// const RightImg = () => {
//   return (
//     <div>
//       <section className="text-gray-600  body-font overflow-hidden mt-12 mb-14">
//         <div className="container">
//           <div className="flex flex-col lg:flex-row lg:w-4/3 mx-auto ml-0 lg:ml-[100px] justify-center lg:justify-start text-center lg:text-left gap-[200px] ml-[-10px]">
           
//             <div className="lg:w-1/2 w-full lg:pl-[5rem] lg:py-6 mt-6 lg:mt-[100px] font-bold w-[550px] ml-0 lg:ml-[30px] text-center lg:text-left mb-10 lg:mb-0">
//               <h2 className="text-lg sm:text-lg title-font text-[#e76f51]">
//                 Mission
//               </h2>
//               <h1 className="text-1xl sm:text-3xl md:text-3xl text-black font-medium mb-1 font-extrabold">
//                 Impacting the cooking industry
//               </h1>
//               <p className="leading-relaxed mt-5 font-normal text-sm lg:text-xl">
//               We are on a mission to manage millions of kitchens while empowering the cooking community to contribute significantly to the economy.
//               </p>
//             </div>
//              <img
//               alt="ecommerce"
//               className="lg:w-[400px] lg:h-[370px] w-full h-64 object-cover object-center rounded mx-auto lg:mx-0"
//               src="https://thechefkart.com/_next/image?url=%2FiStock-1223383996%201.png&w=1920&q=75"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default RightImg;
import React from "react";

const RightImg = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden mt-8 mb-10 lg:mt-12 lg:mb-14">
        <div className="container px-4">
          {/* <div className="flex flex-col lg:flex-row lg:w-4/3 mx-auto lg:ml-[100px] justify-center lg:justify-start text-center lg:text-left gap-10 items-center lg:items-start lg:ml-[150px]"> */}
          <div className="flex flex-col lg:flex-row lg:w-4/3 mx-auto justify-center lg:justify-start text-center lg:text-left gap-[14rem] items-center lg:items-start lg:ml-[150px]">
            
            <div className="w-full max-w-[550px] lg:w-1/2 lg:pl-[5rem] lg:py-6 mt-6 lg:mt-[100px] font-bold text-center lg:text-left mb-8 lg:mb-0">
              <h2 className="text-lg title-font text-[#e76f51]">Mission</h2>
              <h1 className="text-1xl sm:text-3xl md:text-3xl text-black font-medium mb-1 font-extrabold">
                Impacting the cooking industry
              </h1>
              <p className="leading-relaxed mt-5 font-normal text-sm lg:text-xl">
                We are on a mission to manage millions of kitchens while empowering the cooking community to contribute significantly to the economy.
              </p>
            </div>

            {/* <img
              alt="ecommerce"
              className="lg:w-[400px] lg:h-[370px] w-full h-64 object-cover object-center rounded"
              src="https://thechefkart.com/_next/image?url=%2FiStock-1223383996%201.png&w=1920&q=75"
            /> */}<img
  alt="ecommerce"
  className="lg:w-[400px] lg:h-[370px] w-full h-64 object-cover object-center rounded mt-[-135px] lg:mt-0"
  src="https://thechefkart.com/_next/image?url=%2FiStock-1223383996%201.png&w=1920&q=75"
/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightImg;
