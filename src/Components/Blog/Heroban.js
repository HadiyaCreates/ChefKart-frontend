// import React from 'react'

// const Heroban = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
//           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//               How to find the best cook
//               <br className="hidden lg:inline-block" />
//               for your home
//             </h1>
//             <p className="mb-8 leading-relaxed text-black">
//              Finding a cook for home can be challenging, especially if you’re staying away from your hometown
//             </p>
//             <div className="flex justify-center">
//               <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Read More
//               </button>
//             </div>
//           </div>
//           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
//             <video 
//               className="object-cover object-center rounded" 
//               controls 
//               autoPlay 
//               muted 
//               loop 
//               src="https://storage.googleapis.com/chefkart-strapi-media/website_cook_loop_4e9912d5f5.mp4"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Heroban
import React from 'react'

const Heroban = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center gap-10">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-10 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-gray-900">
              How to find the best cook
              <br className="hidden lg:inline-block" />
              for your home
            </h1>
            <p className="mb-6 leading-relaxed text-black text-lg">
              Finding a cook for home can be challenging, especially if you’re staying away from your hometown.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Read More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              className="object-cover object-center rounded w-full h-[500px]"
              controls
              autoPlay
              muted
              loop
              src="https://storage.googleapis.com/chefkart-strapi-media/website_cook_loop_4e9912d5f5.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Heroban
