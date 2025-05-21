import React from 'react'

const Lower1 = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#f1f1f1] body-font overflow-hidden">
        <div className="container">
          <div className="lg:w-4/3 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-[650px] h-[460px] w-full h-64 object-cover object-center rounded"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FMale_female_Cooks_ceb391c475.webp&w=1920&q=75"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 font-bold w-[550px] ml-[30px] mt-[100px]">
              <h2 className="text-xs sm:text-sm title-font text-[#e76f51] tracking-widest">We have faith</h2>
              <h1 className="text-2xl sm:text-4xl md:text-5xl text-black font-medium mb-1 font-extrabold">
               The world will eat the food you prepare!
              </h1>
              <p className="leading-relaxed mt-5 text-black font-bold text-xs sm:text-sm">Go up</p>

              <div className="flex">
                <button className="flex mt-5 text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-black text-white rounded">
                 Connect with ChefKart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lower1
