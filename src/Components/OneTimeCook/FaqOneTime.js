import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"; // Importing icons for the arrow

const FaqOneTime = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Chefit?",
      answer:
        "Chefit is a one-time cooking service where our trusted and verified cooks prepare healthy meals in the comfort of your kitchen.",
    },
    {
      question: "What is the price for Chefit?",
      answer:
        "The base price for the Chefit service is ₹499. For each additional person, there is an extra charge of ₹100 per person.",
    },
    {
      question: "How can I find out if this service is available in my area?",
      answer:
        "To check service availability, enter your address and select your area. The home page on the mobile app will then display a list of services offered at your location.",
    },
    {
      question: "Will Chefit provide groceries along with the service?",
      answer:
        "No, groceries are not provided. You need to manage the groceries yourself.",
    },
        {
      question: "What can I expect my cook to do post cooking?",
      answer:
        "No, we do not provide post-service utensil cleaning. The cook will tidy the cooking area, transfer food to serving bowls, and place used utensils in the sink with water. The kitchen and countertops will be left clean.",
    },
     {
      question: "How many dishes can the cook prepare?",
      answer:
        "The cook can prepare up to 4 dishes as part of the service, which includes a variety of daily home-cooked meals like Dal, Chawal, Roti, and Sabzi (Roti and Chawal are included within the dishes).",
    },
     {
      question: "How long will a cook stay at my booking?",
      answer:
        "The cook will spend for 1.5 hours for up to 4 people. For each additional 1-2 people, an extra 30 minutes is added. For example, a booking for 5-6 people, the cook will be there for 2 hours.",
    },
     {
      question: "Is Chefit suitable for parties or get-togethers?",
      answer:
        "Chefit specializes in providing daily home-cooked meals, preparing up to four different dishes. For events like house parties or get-togethers, we recommend our Chef for Party service, which offers professional, multi-cuisine expertise tailored to your gathering's needs.",
    },
     {
      question: "Can I hire the same professional for the 'cook for a month' service?",
      answer:
        "No, Chefit provides a one-time cooking service. For a monthly arrangement, we recommend booking through our 'Cook for a Month' service by scheduling a trial. For any concerns, please contact our customer support.",
    },
     {
      question: "What are the cancellation and refund policies?",
      answer:
        "We provide a 100% refund if you cancel before a cook has been assigned. If you cancel after a cook has been assigned, a 20% cancellation fee will be charged.",
    },
     {
      question: "When will the cook be assigned for a Chefit booking?",
      answer:
        "A cook will be assigned at least 60 minutes before your scheduled booking time.",
    },
        {
      question: "How can I get support related to my booking?",
      answer:
        "For support, contact us through the ‘Help & Support section’ on the ChefKart App. Our support team is available from 06:00 AM to 09:30 PM.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-xl lg:text-3xl text-[#f81] font-semibold text-center mb-6">Frequently Asked Questions</h2>
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

export default FaqOneTime;