

import React, { useState, useEffect, useRef } from 'react';

const images = [
  'https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Frezize_3by2_15_0e982c7e24.png&w=1920&q=75',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_17_c2beda679c.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_18_db483bd088.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_24_9f0f37936a.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_20_fb2b9b8032.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_14_2f200a48bb.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_03_980b84a7ff.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_23_be73f77f6f.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_10_5ddf0b07ef.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_09_40fd87e1bd.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_08_852bd73dec.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_04_24e9f6a36d.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_05_56785e7856.png',
  'https://storage.googleapis.com/chefkart-strapi-media/rezize_3by2_22_6032e4cfba.png',
];

export default function GallerySlider() {
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % images.length;
        const container = sliderRef.current;
        if (container) {
          const child = container.children[0];
          const scrollAmount = child.offsetWidth + 16;
          container.scrollTo({
            left: scrollAmount * nextIndex,
            behavior: 'smooth',
          });
        }
        return nextIndex;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => setSelected((selected + 1) % images.length);
  const handlePrev = () => setSelected((selected - 1 + images.length) % images.length);
  const closeModal = () => setSelected(null);

  return (
    <section className="bg-gray-100 py-10">
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

      <div
        ref={sliderRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 scrollbar-hide px-4 sm:px-6 lg:px-8"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[30%] snap-start"
            onClick={() => setSelected(i)}
          >
            <img
              src={src}
              alt={`gallery-${i}`}
              className="w-full h-[220px] object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
            />
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl font-bold"
          >
            ✕
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 text-white text-4xl"
          >
            &#8249;
          </button>

          <img
            src={images[selected]}
            alt="full-view"
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
          />

          <button
            onClick={handleNext}
            className="absolute right-4 text-white text-4xl"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}
