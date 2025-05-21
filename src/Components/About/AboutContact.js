
import React from 'react';

const AboutContact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="text-gray-600 body-font w-full max-w-6xl">
        <div className="container mx-auto px-5 py-12 flex flex-col md:flex-row items-center justify-center gap-[7rem]">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-80 md:h-[540px] rounded-lg overflow-hidden relative">
            <img
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fi_Stock_495494292_1_6e708dc61d_37ec0073ce.webp&w=1920&q=75"
              alt="Office"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Form Section */}
       
              <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Operating in Gurgaon!</h2>

        <form>
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* City Dropdown */}
          <select className="w-full mb-4 px-4 py-2 border border-gray-300 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Bangalore</option>
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Kolkata</option>
                  <option>Pune</option>
                  <option>Ahmedabad</option>
                  <option>Jaipur</option>
                  <option>Lucknow</option>
                  <option>Solapur</option>
                  <option>Vijayapura</option>
          </select>

          {/* Mobile Input with Country Code (mocked for now) */}
          <div className="flex items-center mb-4 border border-gray-300 rounded overflow-hidden">
            <div className="flex items-center px-3 bg-white border-r border-gray-300">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                className="w-5 h-4 mr-2"
              />
              <span className="text-gray-700">+91</span>
            </div>
            <input
              type="tel"
              placeholder="Mobile"
              className="w-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Message..."
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            rows="4"
          ></textarea>

          {/* Terms Checkbox */}
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 mr-2 border-gray-300 focus:ring-orange-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to Chefkart’s terms of service & Privacy Policy
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#f81] hover:bg-orange-400 text-white font-semibold py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
