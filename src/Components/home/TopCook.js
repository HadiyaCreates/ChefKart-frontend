import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cooks = [
  {
    name: "Manoj Sinha",
    img: "https://storage.googleapis.com/chefkart-strapi-media/Meet_our_cook_03_af4e437dfa.webp",
    rating: "5",
    experience: "8+ yrs experience",
    specialties: ["North Indian", "South Indian" , "Chinese" , "Italian" , "Continental"],
  },
  {
    name: "Sushma Bansal",
    img: "https://storage.googleapis.com/chefkart-strapi-media/Meet_our_cook_01_efe7adce0f.webp",
    rating: "5",
    experience: "4+ yrs experience",
    specialties: ["North Indian" , "South Indian" , "Italian" ],
  },
  {
    name: "Sunita Singh",
    img: "https://storage.googleapis.com/chefkart-strapi-media/Cook_02_a4025861ea.webp",
    rating: "4.8",
    experience: "7+ yrs experience",
    specialties: ["North Indian", "South Indian", "Chinese" ,"Continental" ],
  },
  {
    name: "Rajesh Rathod",
    img: "https://storage.googleapis.com/chefkart-strapi-media/Cook_03_1a8f5f0a19.webp",
    rating: "4.9",
    experience: "10+ yrs experience",
    specialties: ["North Indian", "South Indian", "Continental", "Italian"],
  },
  {
    name: "Aisha Ahmed",
    img: "https://storage.googleapis.com/chefkart-strapi-media/Meet_our_cook_02_8d8224ac33.webp",
    rating: "4.9",
    experience: "5+ yrs experience",
    specialties: ["North Indian", "South Indian", "Chinese" ],
  },
];

function TopCook() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-black py-16 px-4">
      <h2 className="text-white text-4xl font-bold mb-10 text-center">
        Meet Our Top-Rated Cooks
      </h2>
      <Slider {...settings}>
        {cooks.map((cook, index) => (
          <div
            key={index}
            className="relative group bg-black rounded-xl overflow-hidden border border-gray-700 text-white mx-2 p-0 transition-all"
          >
            <img
              src={cook.img}
              alt={cook.name}
              className="w-full h-[320px] object-contain"
            />

            {/* Name + Rating (styled like image) */}
            <div className="p-4 text-center bg-black">
              <h3 className="text-lg font-bold mb-2">{cook.name}</h3>
              <div className="flex items-center justify-center gap-2 text-sm font-medium">
                <span className="bg-green-600 text-white rounded-full px-2 py-0.5 text-xs flex items-center">
                  {cook.rating} <span className="ml-1">★</span>
                </span>
                <span className="text-sm text-white">• {cook.experience}</span>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300">
              <h4 className="text-lg font-semibold mb-3">Specializes in:</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {(cook.specialties || []).map((item, i) => (
                  <span
                    key={i}
                    className="bg-orange-400 text-black font-semibold text-xs px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopCook;
