import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

// Replace with your actual image URLs and data
const team = [
  {
    name: "Vaibhav Gupta",
    title: "CEO, Co-Founder",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FVaibhav_01_1db5d1c3eb.webp&w=1920&q=75",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Aman Gupta",
    title: "CTO, Co-Founder",
    image: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FAman_01_a6144820a0.webp&w=1920&q=75",
    linkedin: "#",
    twitter: "#"
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">
        The People Behind <span className="text-[#e76f51]">ChefKart</span>
      </h2>

      <div className="flex justify-center gap-12 flex-wrap px-4">
        {team.map((member, index) => (
          <div key={index} className="max-w-xs text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-64 h-80 object-cover rounded-3xl mx-auto shadow-md"
            />
            <h3 className="text-xl font-semibold mt-6">{member.name}</h3>
            <p className="text-gray-500">{member.title}</p>
          <div className="flex justify-center gap-4 mt-4">
  <a
    href={member.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition"
  >
    <FaLinkedin />
  </a>
  <a
    href={member.twitter}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition"
  >
    <FaTwitter />
  </a>
</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
