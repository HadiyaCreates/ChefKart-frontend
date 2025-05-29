
import React from 'react'

const BanIn = () => {
  return (
    <div className="flex justify-center items-center mt-10 mb-10 mx-10">
      <div
        className="
          w-full max-w-[1400px] h-40 
          lg:h-60 
          bg-center bg-cover 
          flex items-center justify-center text-center
          px-4
        "
        style={{
          backgroundImage:
            "url('https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBG_1_d28dd0f405.png&w=3840&q=75')",
        }}
      >
        {/* <p className="text-white w-full max-w-[660px] text-2xl lg:text-4xl font-bold">
          This is just the beginning with many more milestones & funding to come.
        </p> */}
   <p className="text-white w-full max-w-[660px] text-normal lg:text-4xl font-bold">
  This is just the beginning with many more milestones & funding to come.
</p>
      </div>
    </div>
  )
}

export default BanIn
