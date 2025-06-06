import React from 'react'

const HeartTest = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
 {/* <h1 className='text-center font-bold text-black text-xl md:text-2xl lg:text-4xl mt-10'>
  Let's hear it from our Customer
</h1> */}
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 ml-[10px]">
      <div className="w-full sm:p-4 px-4 mb-6">
         <img src="https://thechefkart.com/comma.svg" alt="" />
        <div className="leading-relaxed text-[2rem] mt-5 lg:w-[440px] md:w-[100px]">Everyone was amazed by the kind of party we threw, and the food was the talk of the party!</div>
       <p className='text-[#e76f51] text-xl font-bold mt-5'>Kavita</p>
      </div>
    </div>

<div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
 
<div className="videoquote_video_container__f7jhK">
  <video 
    id="video" 
    playsInline
    controls 
    loop 
    src="https://storage.googleapis.com/chefkart-strapi-media/27389f2b_393b_42a7_bab8_7f0dc6ce3736_ca22a40ab0.mov" 
    className="videoquote_video__7wh3r"
  >
    <track kind="captions"/>
  </video>
  <div className="videoquote_pause_button__83mmX" id="pause-button">
    {/* <img 
      alt="" 
      sizes="100vw" 
      // srcSet="/Play Button Circled.svg 640w, /Play Button Circled.svg 750w, /Play Button Circled.svg 828w, /Play Button Circled.svg 1080w, /Play Button Circled.svg 1200w, /Play Button Circled.svg 1920w, /Play Button Circled.svg 2048w, /Play Button Circled.svg 3840w" 
      src="/Play Button Circled.svg" 
      decoding="async" 
      data-nimg="fill" 
      loading="lazy" 
    /> */}
  </div>
</div>
</div>

  </div>
</section>
    </div>
  )
}

export default HeartTest
