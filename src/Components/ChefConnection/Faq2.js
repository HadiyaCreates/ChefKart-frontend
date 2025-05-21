import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Importing icons for the arrow

const Faq2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How to join ChefKart?",
      answer:
        "To join ChefKart, click on the ‘Join ChefKart’ button above and fill the form or call us at 9871231115.",
    },
    {
      question: "Who can join ChefKart?",
      answer:
        "Every cook who has cooking talent and is above 18 years of age can join ChefKart.",
    },
    {
      question: "What are the requirements to join ChefKart?",
      answer:
        "To join ChefKart, you must have Aadhar card, smart phone, bank account and passport photo.",
    }
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

export default Faq2;
