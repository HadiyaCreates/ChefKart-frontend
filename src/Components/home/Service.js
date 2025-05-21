import React from "react";

const Service = () => {
  return (
    <div className="min-h-screen bg-[#E9ECF3] flex flex-col items-center justify-center p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-[#0E1A2B] mb-10 text-center">
        Discover Your Perfect Service
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Card */}
        <div className="bg-white p-6 rounded-xl shadow-xl w-full md:w-[350px] text-[#0E1A2B]">
          <h3 className="text-xl font-semibold mb-1">Chef for Party</h3>
          <p className="text-sm mb-4">
            Professional party chefs to elevate your party experience
          </p>
          <hr className="mb-4 border-gray-300" />
          <ul className="text-sm space-y-2 mb-6">
            <li>✓ Multi-Cuisine Professionals</li>
            <li>✓ Customisable Menu</li>
            <li>✓ Prompt Service</li>
            <li>✓ Bartenders, Waiters, etc.</li>
            <li>✓ Available in Delhi NCR, Bengaluru and Mumbai</li>
          </ul>
          <p className="text-sm italic mb-1">Starting from</p>
          <p className="text-2xl font-bold mb-4">₹2000 <span className="text-sm font-medium">/visit</span></p>
          <button className="bg-orange-500 text-white w-full py-2 rounded-md font-semibold">
            Book Now
          </button>
          <button className="mt-2 border border-gray-300 w-full py-2 rounded-md font-medium">
            Know More
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-[#284633] text-white p-6 rounded-xl shadow-xl w-full md:w-[350px]">
          <h3 className="text-xl font-semibold mb-1">Chefit: One-time cook</h3>
          <p className="text-sm mb-4">
            Get a professional cook for one-time within 60 minutes.
          </p>
          <hr className="mb-4 border-[#40654C]" />
          <ul className="text-sm space-y-2 mb-6">
            <li>✓ Trained & Verified Cooks</li>
            <li>✓ Healthy & Hygienic Food</li>
            <li>✓ Tailored to Your Taste</li>
            <li>✓ Quick Service</li>
            <li>✓ Available only in Gurugram</li>
          </ul>
          <p className="text-sm italic mb-1">Starting from</p>
          <p className="text-2xl font-bold mb-4">₹299 <span className="text-sm font-medium">/visit</span></p>
          <button className="bg-orange-500 text-white w-full py-2 rounded-md font-semibold">
            Book Now
          </button>
          <button className="mt-2 border border-white w-full py-2 rounded-md font-medium">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
