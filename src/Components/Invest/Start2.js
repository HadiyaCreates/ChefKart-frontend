
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-xl sm:text-2xl bg-gray-400 rounded-full text-black p-2 sm:p-[9px]"
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
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-xl sm:text-2xl bg-gray-400 rounded-full text-black p-2 sm:p-[9px]"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

export default function Start2() {
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
    responsive: [
      {
        breakpoint: 768, // tablets and smaller
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const slides = [
    {
      id: 1,
      title: "Our Investors",
      name: "Mukul Singhal",
      occ: "Co-founder, and Partner at Pravega Ventures",
      description:
        "“ChefKart is driven by the idea to digitise an essential service that is largely unorganised. They are the pioneers in streamlining an industry with tremendous untapped market potential.”",
      image:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FPravega_logo_e65d821b25.webp&w=1920&q=75",
    },
    {
      id: 2,
      title: "Our Investors",
      name: "Blume Ventures",
      occ: "Venture Capital Firm",
      description:
        "Blume Ventures seeks to partner with transformational companies and support them throughout their journey to effect change and transform lives. The firm's investment in ChefKart reflects its bold and brave approach to backing revolutionary and ambitious ideas.",
      image:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlume_14b49cb0e2.webp&w=1920&q=75",
    },
    {
      id: 3,
      title: "Our Investors",
      name: "Deepinder Goyal",
      occ: "Founder & CEO, Zomato",
      description:
        "Deepinder Goyal is the founder and CEO of Zomato, one of the largest food tech companies in India. As an investor of Chefkart, Goyal is backing a promising idea to offer authentic and affordable meals prepared in the comfort of one's home. His investment is a testament to the potential of Chefkart and its innovative approach to at-home cooking services.",
      image:
        "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FGoyal_aa638560fb.webp&w=1920&q=75",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-20 px-4 relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-4 sm:p-6">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md min-h-[500px]">
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-600 text-base sm:text-lg">{slide.description}</p>
                <h5 className="mt-6 sm:mt-12 text-gray-500 font-bold">{slide.name}</h5>
                <p className="text-gray-500">{slide.occ}</p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src={slide.image}
                  alt={`Slide ${slide.id}`}
                  className="w-40 sm:w-52 md:w-64 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
