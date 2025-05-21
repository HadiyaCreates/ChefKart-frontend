
// import React from 'react';

// const ConIn = () => {
//   return (
//     <div
//       className="flex justify-center items-center min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://thechefkart.com/_next/image?url=%2FRectangle%20185.png&w=3840&q=75')",
//       }}
//     >
//       <section className="text-gray-600 body-font w-full max-w-7xl">
//         <div className="container mx-auto px-5 py-12 flex flex-col md:flex-row items-center justify-center gap-[250px]">
//           {/* Text Section on left */}
//           <div className="w-full md:w-1/3 text-white space-y-6"> 
//             <h1 className="text-5xl font-bold">Simplifying the way <span className='text-[#ff961f] underline'>India </span> eats.</h1>
//           </div>

    

//           {/* Form Section */}
//           <div className="w-full md:w-1/3 max-w-md bg-white p-6 rounded-md shadow-md">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-6">Believe in our mission? We'd love to know you!</h2>

//             <form>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <select className="w-full mb-4 px-4 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
//                 <option>Mumbai</option>
//                 <option>Delhi</option>
//                 <option>Bangalore</option>
//                 <option>Hyderabad</option>
//                 <option>Chennai</option>
//                 <option>Kolkata</option>
//                 <option>Pune</option>
//                 <option>Ahmedabad</option>
//                 <option>Jaipur</option>
//                 <option>Lucknow</option>
//                 <option>Solapur</option>
//                 <option>Vijayapura</option>
//               </select>
//               <div className="flex items-center mb-4 border border-gray-300 rounded overflow-hidden">
//                 <div className="flex items-center px-3 bg-white border-r border-gray-300">
//                   <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-5 h-4 mr-2" />
//                   <span className="text-gray-700">+91</span>
//                 </div>
//                 <input
//                   type="tel"
//                   placeholder="Mobile"
//                   className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
//                 />
//               </div>
//               <textarea
//                 placeholder="Message..."
//                 className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
//                 rows="4"
//               ></textarea>
//               {/* <div className="flex items-start mb-4">
//                 <input
//                   type="checkbox"
//                   id="terms"
//                   className="mt-1 mr-2 border-gray-300 focus:ring-orange-500"
//                 />
//                 <label htmlFor="terms" className="text-sm text-gray-600">
//                   I agree to Chefkart’s terms of service & Privacy Policy
//                 </label>
//               </div> */}
//               <button
//                 type="submit"
//                 className="w-full bg-[#f81] hover:bg-orange-400 text-white font-semibold py-2 rounded"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ConIn;
import React from 'react';

const ConIn = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://thechefkart.com/_next/image?url=%2FRectangle%20185.png&w=3840&q=75')",
      }}
    >
      <section className="text-gray-600 body-font w-full max-w-7xl">
        <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[150px]">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Simplifying the way <span className="text-[#ff961f] underline">India</span> eats.
            </h1>
          </div>

          {/* Form Section */}
          <div className="w-full sm:max-w-md lg:max-w-xl bg-white p-6 sm:p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Believe in our mission? We'd love to know you!
            </h2>

            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <select className="w-full mb-4 px-4 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                <option>Hyderabad</option>
                <option>Chennai</option>
                <option>Kolkata</option>
                <option>Pune</option>
                <option>Ahmedabad</option>
                <option>Jaipur</option>
                <option>Lucknow</option>
                <option>Solapur</option>
                <option>Vijayapura</option>
              </select>
              <div className="flex items-center mb-4 border border-gray-300 rounded overflow-hidden">
                <div className="flex items-center px-3 bg-white border-r border-gray-300">
                  <img src="https://flagcdn.com/w40/in.png" alt="India Flag" className="w-5 h-4 mr-2" />
                  <span className="text-gray-700">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Mobile"
                  className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <textarea
                placeholder="Message..."
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                rows="4"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#f81] hover:bg-orange-400 text-white font-semibold py-2 rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConIn;
