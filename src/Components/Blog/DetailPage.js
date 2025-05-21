
import React from "react";
import { useLocation } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function DetailPage() {
  const location = useLocation();
  const data = location.state;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
   
      <div className="flex flex-col md:flex-row gap-8">
       

        {/* Blog Content */}
        <div className="flex-1">
          {data.name && (
            <p className="text-gray-600 font-medium mb-1 text-lg">{data.name}</p>
          )}
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <p className="text-gray-500 text-sm mb-6">{data.date} • {data.time}</p>

          <img
            src={data.img}
            alt={data.title}
            className="w-full max-h-[450px] object-cover rounded-lg mb-10"
          />

          {/* Quote */}
          <blockquote className="text-xl italic font-semibold text-center text-gray-800 mb-8">
            “The best way to find yourself is to lose yourself in the service of others.”
            <footer className="mt-2 text-base font-normal text-gray-600">- Mahatma Gandhi</footer>
          </blockquote>

         
          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 text-justify leading-relaxed">
            <p>
              The domestic working community has long been in need of a solution to provide
              them with the recognition and empowerment they deserve. The emergence of startups
              like ChefKart and Broomees is a step towards that direction.
            </p>

            <p>
              ChefKart is a visionary force established in January 2020, dedicating itself to
              bringing structure and opportunity. Focusing on those who have been overlooked,
              ChefKart provides a platform for the cooks to earn a living. The company is unwavering
              in its mission to empower the cooking community and provide a better future for those within it.
            </p>

            <p>
              Broomees India, which started in June 2020 with its approach of allotting maids to households,
              addresses two critical problems. Not only does it provide quality service to its customers,
              but it also organises the domestic working sector. The company's success, as seen with its
              recent appearance on Shark Tank India and acquisition of ₹1 crore, is a testament to its
              impact on the industry.
            </p>

            <p>
              Just as Broomees brings organisation to the domestic working community, ChefKart brings
              the same to the cooking community. With a range of offerings, ChefKart has three modules
              that achieve its purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

