import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider2() {
  const [slides, setSlides] = useState([]);

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

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        // const res = await axios.get("http://localhost:8000/crousel/get");
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/crousel/get`);
        setSlides(res.data.data);
      } catch (error) {
        console.error("Failed to fetch carousel data:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide._id}
            className="relative w-full h-[500px] sm:h-[580px] md:h-[620px] overflow-hidden"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-4 sm:px-10">
              <div className="text-white max-w-xl space-y-4 mx-auto lg:mx-0 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg">
                  {slide.content}
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm sm:text-base font-semibold">
                  {slide.action}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
