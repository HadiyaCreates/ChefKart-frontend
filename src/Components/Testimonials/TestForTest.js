// import React, { useEffect, useRef } from 'react';

// const testimonials = [
//   {
//     img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_15_c28030c449.png&w=1920&q=75",
//     text: `‘’I like cooking my own meals, but when I am occupied with work, I book Chefit. It's a much-required service that is convenient and more affordable than ordering online.’’`,
//     name:`Diwakar Kumar`
 
// },
//   {
//     img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCook_Testimony_05_fa3b6fc5ac.webp&w=1200&q=75",
//     text: `"Each cook that they assigned for my 4 chefit bookings was aware of everything in the kitchen & didn’t require guidance while working. Well-behaved and cooked amazing food!"`,
//     name:`Rohan Pal`
//   },
//   {
//     img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_04_bc36b188a4.webp&w=1200&q=75",
//     text: `"Chefit is great for when I'm short on time but still want a home-cooked meal. I book this service at least once a week. It’s an affordable and healthy option. I say go for it the next time you don't feel like cooking."`,
//       name:`Pooja Sachdeva`
//   },
//   {
//     img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_01_25aa96ff9c.webp&w=3840&q=75",
//     text: `"Pretty impressed by the personalised approach. The cook prepared delicious & nutritious homemade food according to my specific dietary needs and preferences. Will definitely book again!"`,
//     name:`Akhil Desai`
//   }
// ];

// const TestForTest = () => {
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (sliderRef.current) {
//         const container = sliderRef.current;
//         const cardWidth = container.firstChild.offsetWidth;
//         index = (index + 1) % testimonials.length;
//         container.scrollTo({
//           left: cardWidth * index,
//           behavior: 'smooth',
//         });
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//      <style>{`
//       .scrollbar-hide::-webkit-scrollbar {
//         display: none;
//       }
//       .scrollbar-hide {
//         -ms-overflow-style: none;
//         scrollbar-width: none;
//       }
//     `}</style>

//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div
//           ref={sliderRef}
//           className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 scrollbar-hide"
//         >
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start bg-[#2d4739] text-white text-xs rounded p-6 text-left hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
//             >
//               <img
//                 alt="testimonial"
//                 className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto border-2 border-gray-200"
//                 src={item.img}
//               />
//               <div className="flex items-center  mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     className="w-4 h-4 text-[#FF9618]"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                 ))}
//               </div>
//               <p className="leading-relaxed">{item.text}</p>
//               <img src="https://thechefkart.com/Vector-3.svg" alt="" className='mt-2'/>
//               <p className='mt-6'>{item.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default TestForTest;

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const TestForTest = () => {
  const [testimonials, setTestimonials] = useState([]);
  const sliderRef = useRef(null);

  // Fetch data from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get('http://localhost:8000/testimonial/get');
        setTestimonials(res.data.data);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };
    fetchTestimonials();
  }, []);

  // Auto-scroll
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (sliderRef.current && testimonials.length > 0) {
        const container = sliderRef.current;
        const cardWidth = container.firstChild.offsetWidth;
        index = (index + 1) % testimonials.length;
        container.scrollTo({
          left: cardWidth * index,
          behavior: 'smooth',
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <>
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-4 scrollbar-hide"
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 snap-start bg-[#2d4739] text-white text-xs rounded p-6 text-left hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-4 object-cover object-center rounded-full mx-auto border-2 border-gray-200"
                  src={item.profileimage}
                />
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-[#FF9618]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="leading-relaxed">{item.content}</p>
                <img
                  src="https://thechefkart.com/Vector-3.svg"
                  alt=""
                  className="mt-2"
                />
                <p className="mt-6">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestForTest;
