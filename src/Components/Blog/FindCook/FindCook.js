import React from 'react'

const FindCook = () => {
  return (
    <div>
 <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Author and Title */}
      <div className="mb-4">
        <p className="text-gray-700 font-semibold">Subi Kumari</p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          6 things to keep in mind when hiring a cook for home
        </h1>
      </div>

      {/* Date and Read Time */}
      <div className="flex justify-between text-gray-400 text-sm mb-6">
        <p>February 10, 2023</p>
        <p>5 min</p>
      </div>

      {/* Featured Image */}
      <div className="w-full rounded-md overflow-hidden shadow-sm">
        <img
          src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_01_d49831e21c.webp&w=1920&q=75"
          alt="Thinking about hiring a cook"
          className="w-full object-cover"
        />
      </div>
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
  )
}

export default FindCook
