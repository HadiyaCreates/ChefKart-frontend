import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Replace these URLs with your actual video URLs
const videos = [
  "https://storage.googleapis.com/chefkart-strapi-media/v4_015b8116b1.mp4",
  "https://storage.googleapis.com/chefkart-strapi-media/v3_8de4acd8d1.mp4",
  "https://storage.googleapis.com/chefkart-strapi-media/v1_1_ce597e37d8.mp4",
  "https://storage.googleapis.com/chefkart-strapi-media/v6_b86f7e540a.mp4",
  "https://storage.googleapis.com/chefkart-strapi-media/v5_068121efcb.mp4"
];

const AboutSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="px-6 py-12 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">Gallery</h2>

      <Slider {...settings}>
        {videos.map((src, index) => (
          <div key={index} className="px-2">
            <div className="rounded-xl overflow-hidden shadow-md">
              <video
                className="w-full h-56 object-cover rounded-xl"
                controls
                preload="metadata"
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AboutSlider;
