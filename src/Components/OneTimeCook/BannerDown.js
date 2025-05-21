import React from 'react';

const BannerDown = () => {
  const features = [
    {
           img: 'https://storage.googleapis.com/chefkart-strapi-media/healthy_hygienic_a9878d9090.svg',
      title: 'Healthy & Hygienic Food',
      desc: 'Healthy food cooked in your kitchen with utmost hygiene.',
    },
    {
         img: 'https://storage.googleapis.com/chefkart-strapi-media/tailored_to_taste_33cb681b66.svg',
      title: 'Tailored to Your Taste',
      desc: 'Food prepared according to your taste and preferences.',
    },
    {
         img: 'https://storage.googleapis.com/chefkart-strapi-media/professional_cooks_ec13508556.svg',
      title: 'Trained & Verified Cooks',
      desc: 'Professionally trained & background verified cooks for quality service.',
    },
    {
       img: 'https://storage.googleapis.com/chefkart-strapi-media/timely_service_3a6f9d9ebe.svg',
      title: 'Quick Service',
      desc: 'Assured cook arrival within 60 minutes of booking.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section with Two Columns */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          {/* Left side: Heading */}
          <div>
            <p className="text-orange-600 font-semibold text-lg mb-1">Why Choose</p>
            <h2 className="text-4xl font-bold text-black">Chefit: One-Time Cook</h2>
          </div>

          {/* Right side: Description with vertical line */}
          <div className="border-l-4 border-orange-500 pl-4 text-gray-800 text-lg max-w-xl">
            Get a certified cook for one-time to prepare delicious <br className="hidden md:block" />
            food in your kitchen.
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-orange-50 p-4 rounded-xl flex-shrink-0">
                <img src={feature.img} alt={feature.title} className="w-12 h-12 object-contain" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerDown;
