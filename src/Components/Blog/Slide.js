import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slide() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // const response = await axios.get("http://localhost:8000/blog/getAll");
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/getAll`);
        const data = response.data;

        const formatted = data.map((item) => ({
          id: item._id,
          title: item.title,
          category: item.category,
          time: "3 min read", // Hardcoded, update if API provides this
          img: item.image,
          link: `/blog/${item._id}`, // Adjust based on your route structure
        }));

        setArticles(formatted);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#fff2e8] py-10 px-6">
      <h2 className="text-2xl font-bold mb-6">Recommended Articles</h2>
      <Slider {...settings}>
        {articles.map((item) => (
          <div
            key={item.id}
            className="px-2 cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <div
              className="relative h-[420px] w-full rounded-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end">
                <div className="flex items-center mb-2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mr-2">
                    {item.category}
                  </span>
                  <span className="text-white text-sm">• {item.time}</span>
                </div>
                <h3 className="text-white text-xl font-bold leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;
