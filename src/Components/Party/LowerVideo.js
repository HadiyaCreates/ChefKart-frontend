import React from 'react';

export default function LowerVideo() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Top Curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.91,-50.00 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
            style={{ fill: '#fff' }}
          ></path>
        </svg>
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://storage.googleapis.com/chefkart-strapi-media/hygiene_740470aa24_674070e837.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Text Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16">
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Your Safety, Our Top-Priority
          </h2>
          <p className="text-white text-lg font-medium">
            All our chefs follow the food safety guidelines and{' '}
            <br/>
            <span className="text-[#f7931e] font-bold text-xl">
              adhere to hygienic practices.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
