
import React from 'react';

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto justify-center">
          <div className="flex flex-wrap -m-4 gap-8 justify-center">
            {[
              {
                img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fimage_15_c28030c449.png&w=1920&q=75",
                text: `"Chefkart's one-time cook service is amazing! For just ₹499, a professional chef came to my home and prepared delicious, homely dishes. Convenient, tasty, and hassle-free—highly recommend it!"`,
              },
              {
                img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_02_d8db9e3e65.webp&w=1200&q=75",
                text: `"Chefkart's one-time cook service is amazing! For just ₹499, a professional chef came to my home and prepared delicious, homely dishes. Convenient, tasty, and hassle-free—highly recommend it!"`,
              },
              {
                img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FCustomer_testimonial_05_0affc91e03.webp&w=1200&q=75",
                text: `"Chefkart's one-time cook service is amazing! For just ₹499, a professional chef came to my home and prepared delicious, homely dishes. Convenient, tasty, and hassle-free—highly recommend it!"`,
              },
              {
                img: "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg",
                text: `"Abhishek was the chef for our party. He made the amazing winter delicacy moong dal halwa, perfectly sweet & less ghee, spent a good amount of time & cooked with patience."`,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="lg:w-1/5 w-full mb-6 p-4 bg-[#2d4739] text-white text-xs rounded 
                           mx-4 hover:bg-white hover:text-black 
                           transition-all duration-300 ease-in-out 
                           hover:scale-105 hover:shadow-xl"
              >
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={item.img}
                  />
                  <div className="flex items-center justify-center mb-2">
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
                  <p className="leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
