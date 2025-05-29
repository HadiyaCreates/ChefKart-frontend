

import React, { useState, useEffect, useRef } from 'react';

export default function GallerySlider() {
  const [images, setImages] = useState([]);
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Fetch gallery data on mount
  useEffect(() => {
    // fetch('http://localhost:8000/gallery/get')
    fetch(`${process.env.REACT_APP_API_URL}/gallery/get`)
      .then((res) => res.json())
      .then((data) => {
        // Assuming data is an array of gallery objects and you want images from first item
        if (Array.isArray(data) && data.length > 0) {
          setImages(data[0].Galleryimage || []);
        } else {
          setImages([]);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch gallery images:', err);
      });
  }, []);

  // Auto-scroll slider
  useEffect(() => {
    if (!images.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % images.length;
        const container = sliderRef.current;
        if (container) {
          const child = container.children[0];
          const scrollAmount = child.offsetWidth + 16; // 16px gap
          container.scrollTo({
            left: scrollAmount * nextIndex,
            behavior: 'smooth',
          });
        }
        return nextIndex;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  const handleNext = () => setSelected((selected + 1) % images.length);
  const handlePrev = () => setSelected((selected - 1 + images.length) % images.length);
  const closeModal = () => setSelected(null);

  if (!images.length) {
    return <p className="text-center mt-10">Loading gallery...</p>;
  }

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
