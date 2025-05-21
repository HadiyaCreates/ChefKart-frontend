// // import React from "react";
// // import Slider from "react-slick";

// // export default function SliderShow() {
// //   var settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //   };
// //   return (
// //     <Slider {...settings} className="mt-20">
// //       <div className="flex">
// //         <h3>1</h3>
// //       </div>
// //       <div>
// //         <h3>2</h3>
// //       </div>
// //       <div>
// //         <h3>3</h3>
// //       </div>
// //       <div>
// //         <h3>4</h3>
// //       </div>
// //       <div>
// //         <h3>5</h3>
// //       </div>
// //       <div>
// //         <h3>6</h3>
// //       </div>
// //     </Slider>
// //   );
// // }
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// export default function SliderShow() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   const slides = [
//     {
//       id: 1,
//       title: "एक प्रमुख पहल",
//       description:
//         "NCVET व्यावसायिक ट्रेनिंग में लगी संस्थाओं के कामकाज को छोटे और लंबे समय के लिए नियंत्रित करती है और ऐसी संस्थाओं के कामकाज के लिए न्यूनतम मानक स्थापित करती है।",
//       image: "/images/ncvet.png", // Make sure image is placed in /public/images/
//     },
//     {
//       id: 2,
//       title: "Slide 2",
//       description: "यह दूसरा स्लाइड है।",
//       image: "/images/ncvet.png",
//     },
//     {
//       id: 3,
//       title: "Slide 3",
//       description: "यह तीसरा स्लाइड है।",
//       image: "/images/ncvet.png",
//     },
//   ];

//   return (
//     <div className="max-w-5xl mx-auto mt-20 px-4">
//       <Slider {...settings}>
//         {slides.map((slide) => (
//           <div key={slide.id} className="p-6">
//             <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md">
//               <div className="md:w-2/3">
//                 <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
//                 <p className="text-gray-700 text-lg">{slide.description}</p>
//               </div>
//               <div className="md:w-1/3 flex justify-center">
//                 <img
//                   src={slide.image}
//                   alt={`Slide ${slide.id}`}
//                   className="w-40 h-auto object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-2xl bg-gray-400 rounded-full text-black p-[9px]"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-2xl bg-gray-400 rounded-full text-black p-[9px]"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

export default function SliderShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      id: 1,
      title: "एक प्रमुख पहल",
      description:
        "THSC is committed to maintaining quality in delivering training based on national occupational standards. Cooks associated with ChefKart can benefit from this to enhance their skills.",
      image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_07_10_at_4_52_1_658c10251b.png&w=384&q=75", // Ensure this path is correct
    },
    {
      id: 2,
      title: "Slide 2",
      description: "NCVET regulates the operations of vocational training institutions both in the short and long term, and establishes minimum standards for their functioning.",
      image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FNCVET_01_2_97436de85c.png&w=384&q=75",
    },
    {
      id: 3,
      title: "Slide 3",
      description: "ChefKart partners with Skill India to provide training to its cooks, and upon completion, they are awarded a certificate.",
      image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSkill_India_Preview_removebg_preview_1_03db4e9828.png&w=384&q=75",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-20 px-4 relative">
      <h1 className="text-center text-black font-bold text-2xl md:text-4xl">A Major Initiative</h1>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-6">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-lg shadow-md">
              <div className="md:w-2/3 ml-[30px]">
                {/* <h2 className="text-2xl font-bold mb-4">{slide.title}</h2> */}
                <p className="text-black text-lg">{slide.description}</p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-40 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
