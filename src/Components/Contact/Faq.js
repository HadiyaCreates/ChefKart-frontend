import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Importing icons for the arrow

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What does ChefKart do?",
      answer:
        "ChefKart is a platform that seamlessly connects households with the ideal cook based on their specific needs and requirements.",
    },
    {
      question: "What are your services?",
      answer:
        "ChefKart provides three types of cooking services; Monthly Subscription (cook for a month), Chefit (one-time cooking services) and Chef for Party.",
    },
    {
      question: "How are cooks onboarded?",
      answer:
        "Cooks list themselves on the ChefKart Partner App. We register cooks after background verification and criminal record checks. They undergo assessments and mandatory training to ensure they meet our standards and are suitable for household assignments. Ongoing training ensures continuous upskilling.",
    },
    {
      question: "How to reach ChefKart Support?",
      answer:
        "You can reach out to our Customer Support through the Help & Support section on our App.",
    },
    {
      question: "Do you have an app?",
      answer:
        "ChefKart is available on both App Store and Play Store. You can easily download it on any smartphone.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl text-[#f81] font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 shadow-lg rounded-lg bg-white"
          >
            <div
              onClick={() => toggleAnswer(index)}
              className="flex items-center justify-between w-full cursor-pointer p-4"
            >
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              <div
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? (
                  <IoIosArrowUp size={20} />
                ) : (
                  <IoIosArrowDown size={20} />
                )}
              </div>
            </div>
            <div
              className={`overflow-hidden mt-2 transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 p-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
