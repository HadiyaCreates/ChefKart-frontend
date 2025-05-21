import React from "react";

const ResAbout = () => {
  return (
    <section className="bg-[#2B4437] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <h2 className="text-4xl font-bold mb-2">3M+</h2>
          <p className="text-lg">Meals cooked with love</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-2">4500+</h2>
          <p className="text-lg">Verified & trained cooks</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-2">10K+</h2>
          <p className="text-lg">Households served</p>
        </div>
      </div>
    </section>
  );
};

export default ResAbout;
