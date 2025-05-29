
import React, { useState } from "react";
import ContactLower from "./ContactLower";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     const response = await fetch(`${process.env.REACT_APP_API_URL}/contact/createContact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", city: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <section
        className="text-gray-600 body-font"
        style={{
          backgroundImage:
            "url('https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FRectangle_60_bfb1e0017f_a37ee78af1.webp&w=1920&q=75')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container px-5 py-24 mx-auto flex flex-wrap md:flex-nowrap gap-10 justify-center">
          {/* Map Section */}
          <div className="w-full md:w-1/2 mt-[40px] lg:w-[35vw] bg-gray-300 rounded-lg overflow-hidden relative backdrop-blur-sm shadow-lg">
            <div className="w-full h-[450px] relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7017.767262215061!2d77.08036!3d28.422768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19142e78d47b%3A0xde577a7e821cd90!2sChefKart!5e0!3m2!1sen!2sin!4v1746714656652!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="bg-white relative flex flex-wrap py-6 px-4 rounded shadow-md -mt-16 mx-4 z-10">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-sm">
                  B-179, Sector 57, near Rail Vihar, Block B, Sushant Lok III,
                  Sector 57, Gurugram, Haryana 122003
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed text-sm block">
                  hadiyashaikh2006@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-sm">+8237290912</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 mt-[40px] lg:w-[35vw] bg-white p-6 rounded shadow-md backdrop-blur-sm">
            <h2 className="text-gray-900 text-3xl font-bold text-center mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 text-lg mb-6 text-center">
              Fill out the form or call us
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="text-sm text-gray-600 block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="text-sm text-gray-600 block mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-sm text-gray-600 block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="city" className="text-sm text-gray-600 block mb-1">
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
                >
                  <option value="">Select a city</option>
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
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="text-sm text-gray-600 block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please write your message in detail."
                  className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f81] hover:bg-[#e76f51] text-white py-2 px-4 rounded transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <ContactLower />
    </>
  );
};

export default Contact;
