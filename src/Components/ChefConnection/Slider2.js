import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      title: "Earn money through your skills.",
      description:
        "Turn your cooking talent into a fresh beginning—and start earning from it!",
      button: "Join ChefKart",
      bgImage:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_02_6c8df4e377.webp&w=3840&q=75",
      personImage:
        "https://i.ibb.co/0FRQwFD/chefkart-man.png",
    },
    {
      id: 2,
      title: "Be a part of ChefKart",
      description:
        "Join over 4,500 cooks who have joined us and advance your skills.",
      button: "Join ChefKart",
      bgImage:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FJoin_as_chef_hero_banner_03_e679e84c56.webp&w=3840&q=75",
      personImage:
        "https://i.ibb.co/0FRQwFD/chefkart-man.png",
    },
  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full h-[620px] overflow-hidden">
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            ></div>

            {/* Foreground content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-20">
              {/* Text Content */}
              <div className="text-white max-w-xl text-center md:text-left space-y-4 mt-10 md:mt-0">
                <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-base font-semibold">
                  {slide.button}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
