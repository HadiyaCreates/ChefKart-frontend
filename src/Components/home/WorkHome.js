
import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Register on app',
    desc: 'Download the ChefKart App and register yourself',
    img: 'https://storage.googleapis.com/chefkart-strapi-media/Register_on_app_4372ed1276.svg',
  },
  {
    number: '2',
    title: 'Select Chefit - Cook for One Meal',
    desc: 'Choose Chefit from ‘Our Services’ section on homepage',
    img: 'https://storage.googleapis.com/chefkart-strapi-media/select_your_service_7ba59dddd5.svg',
  },
  {
    number: '3',
    title: 'Fill requirements & pay',
    desc: 'Share your preferences and complete the payment',
    img: 'https://storage.googleapis.com/chefkart-strapi-media/make_payment_50309d2915.svg',
  },
  {
    number: '4',
    title: 'Get a cook',
    desc: 'Get a trained & trusted cook at your doorstep within 60 minutes',
    img: 'https://storage.googleapis.com/chefkart-strapi-media/Get_a_cook_b0e201f46a.svg',
  },
];

const WorkHome = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-bold text-black">How it <span className='font-light text-black'>works </span></h1>
        </div>
        <div className="flex flex-wrap justify-center -m-4 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2 w-full relative flex flex-col items-center text-center"
            >
              <img src={step.img} alt={step.title} className="h-[230px] w-[215px] mb-4" />
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-gray-300 text-black flex items-center justify-center font-bold mr-2">
                  {step.number}
                </div>
                <h2 className="text-lg font-semibold text-gray-900">{step.title}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed max-w-[220px]">
                {step.desc}
              </p>
               {/* 👇 Add this conditional button only for the last item */}
{index === steps.length - 1 && (
<button className="mt-4 px-6 py-2 bg-white text-[rgb(255,150,31)] font-bold rounded-lg border border-[rgb(255,150,31)] shadow-md hover:bg-[rgb(255,150,31)] hover:text-white transition-colors duration-300">
  Book Now
</button>
)}


              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 hidden lg:block">
                  <img
                    src="https://thechefkart.com/Connector.svg"
                    alt="arrow"
                    className="h-[5.5rem] w-[15.5rem] opacity-6 justify-center mb-[100px]"
                  />
                
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkHome;
