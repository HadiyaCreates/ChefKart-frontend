import React from "react";

const OurMission = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="lg:w-2/3 mb-12 lg:mb-0">
          <p className="text-xl text-gray-800 mb-4">Our mission</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-8">
            Empowering cooks to bridge the gap between <br />
            tasty food & healthy eating for our customers.
          </h1>
          <a href="#" className="text-lg text-green-900 underline font-medium">
            A letter from our CEO
          </a>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 flex flex-col items-center text-center space-y-12 w-full">
          {/* Top Row: stacked vertically and centered on small screens, side by side on sm+ */}
          <div className="flex flex-col items-center gap-12 sm:flex-row sm:justify-center sm:gap-16 w-full">
            <div>
              <p className="text-3xl font-bold text-green-900">3M+</p>
              <p className="text-lg text-gray-700">
                Meals cooked <br /> with love
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-900">4500+</p>
              <p className="text-lg text-gray-700">
                Trained & <br /> verified cooks
              </p>
            </div>
          </div>

          {/* Bottom Row */}
          <div>
            <p className="text-3xl font-bold text-green-900">10K+</p>
            <p className="text-lg text-gray-700">
              Households <br /> served
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
