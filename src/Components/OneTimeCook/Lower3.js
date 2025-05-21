
import React from 'react'

const Lower3 = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#f1f1f1] body-font overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:w-4/3 mx-auto ml-0 lg:ml-[100px] justify-center lg:justify-start text-center lg:text-left">
            <img
              alt="ecommerce"
              className="lg:w-[460px] lg:h-[410px] w-full h-64 object-cover object-center rounded mx-auto lg:mx-0"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FKoustov1_d393227e33.png&w=1920&q=75"
            />
            <div className="lg:w-1/2 w-full lg:pl-[5rem] lg:py-6 mt-6 lg:mt-[100px] font-bold w-[550px] ml-0 lg:ml-[30px] text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-xs sm:text-xs title-font text-[#e76f51]">
                Running on a tight schedule
              </h2>
              <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-medium mb-1 font-extrabold">
                No time to cook?<br />
                ChefKart Got You Covered!!
              </h1>
              <p className="leading-relaxed mt-5 text-black font-bold text-xs sm:text-xs">
                Get a professional cook within 60 minutes
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="flex mt-5 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black rounded">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lower3
