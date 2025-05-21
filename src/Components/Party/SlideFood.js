
// import React, { useState, useEffect } from 'react';

// const images = [
//   'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FItalian_168d980a5a.webp&w=1920&q=75',
//   'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Ffood_1_8870eea109_a39bceba07.webp&w=3840&q=75',
//   'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Ftop_view_delicious_noodles_concept_9283eeb6c4.webp&w=3840&q=75',
//   'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMexican_9e7092cb2b.webp&w=3840&q=75',

// ];

// export default function SlideFood() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 2000);
//     return () => clearInterval(timer);
//   }, []);

//   const getIndex = (offset) => (current + offset + images.length) % images.length;

//   return (
//     <div className="flex items-center justify-center py-16 bg-white overflow-hidden">
//       <div className="relative w-full max-w-5xl flex items-center justify-between px-4">
//         {/* Left image */}
//         <img
//           src={images[getIndex(-1)]}
//           alt="left"
//           className="w-1/4 opacity-30 transition-all duration-500"
//         />

//         {/* Center image */}
//         <img
//           src={images[current]}
//           alt="center"
//           className="w-1/3 z-10 transition-all duration-500"
//         />

//         {/* Right image */}
//         <img
//           src={images[getIndex(1)]}
//           alt="right"
//           className="w-1/4 opacity-30 transition-all duration-500"
//         />
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';

const images = [
  {
    url: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Ffood_1_8870eea109_a39bceba07.webp&w=3840&q=75',
    label: 'Indian',
  },
  {
    url: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Ftop_view_delicious_noodles_concept_9283eeb6c4.webp&w=3840&q=75',
    label: 'Chinese',
  },
  {
    url: 'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FItalian_168d980a5a.webp&w=1920&q=75',
    label: 'Italian',
  },
];

export default function SlideFood() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset) => (current + offset + images.length) % images.length;

  return (
    <div className="flex flex-col items-center justify-center py-8 bg-white overflow-hidden">
      {/* Dynamic Heading */}
 <h2 className="text-xl md:text-4xl font-semibold mb-6 text-center px-4 w-[350px] md:w-[760px]">
  Craving <span className="text-red-500">{images[current].label}</span> food? Our Multi-Cuisine Experts Have Got You!
</h2>

      {/* Image Carousel */}
      <div className="relative w-full max-w-5xl flex items-center justify-between px-4">
        {/* Left image */}
        <img
          src={images[getIndex(-1)].url}
          alt="left"
          className="w-1/4 opacity-30 transition-all duration-500"
        />

        {/* Center image */}
        <img
          src={images[current].url}
          alt="center"
          className="w-1/3 z-10 transition-all duration-500"
        />

        {/* Right image */}
        <img
          src={images[getIndex(1)].url}
          alt="right"
          className="w-1/4 opacity-30 transition-all duration-500"
        />
      </div>
    </div>
  );
}

