
import React from 'react';

const Heart = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* Text Section */}
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 ml-[10px]">
            <div className="w-full sm:p-4 px-4 mb-6">
              <img src="https://thechefkart.com/comma.svg" alt="quote icon" />
              
              {/* Responsive Quote Text */}
              <div className="leading-relaxed mt-5 text-xl lg:text-3xl w-[300px] lg:w-[400px]">
                "ChefKart will never send you to a home where you are not treated with respect."
              </div>

              <p className="text-[#e76f51] font-bold mt-5">A Stranger Women</p>
            </div>
          </div>

          {/* Video Section */}
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <div className="videoquote_video_container__f7jhK">
              <video
                id="video"
                playsInline
                controls
                loop
                src="https://storage.googleapis.com/chefkart-strapi-media/cook_vid_low_quality_8_mb_c474611303.mp4"
                className="videoquote_video__7wh3r"
              >
                <track kind="captions" />
              </video>

              <div className="videoquote_pause_button__83mmX" id="pause-button">
                {/* <img
                  alt="play button"
                  sizes="100vw"
                  srcSet="/Play Button Circled.svg"
                  src="/Play Button Circled.svg"
                  decoding="async"
                  loading="lazy"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heart;
