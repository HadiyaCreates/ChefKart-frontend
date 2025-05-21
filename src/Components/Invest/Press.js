
import React from 'react';

const Press = () => {
  return (
    <div>
      <div className="bg-white px-6 py-10 sm:px-10 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-10 text-center sm:text-left">
          Press Release
        </h1>

        <div className="space-y-6 max-w-4xl mx-auto sm:mx-0">
          {/* First press item */}
          <div>
            <p className="text-gray-700 mb-1 text-sm sm:text-base">January 26, 2023</p>
            <a
              href="https://economictimes.indiatimes.com/tech/funding/chefkart-raises-2-million-in-funding-led-by-blume-ventures-pravega-ventures/articleshow/93108381.cms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl font-semibold text-gray-700 hover:underline block"
            >
              ChefKart raises $2 million in funding led by Blume Ventures, Pravega Ventures
            </a>
            <hr className="mt-4 border-gray-200" />
          </div>

          {/* Second press item */}
          <div>
            <p className="text-gray-700 mb-1 text-sm sm:text-base">January 24, 2023</p>
            <a
              href="https://yorkpedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl sm:text-2xl font-semibold text-gray-700 hover:underline block"
            >
              ChefKart launches Chefit: one time cooking
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
