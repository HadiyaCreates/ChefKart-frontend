
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const tabs = ["Partner", "Must Read", "Trending", "Food Recipe", "News"];

const contentData = {
  Partner: [
    {
      title:
        "ChefKart will never send you to a house where you are not respected" ,
      name: "Unknown Women",
      date: "June 8, 2023",
      time: "3 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_06_10_at_4_17_36_PM_3a8dfffd4e.png&w=1920&q=75",
      id: "partner-1",
    },
    {
      title: "Empowering the domestic working community",
      name: "Subi Kumari",
      date: "February 10, 2023",
      time: "3 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_ZO_03_0008b023df.webp&w=1920&q=75",
      id: "partner-2",
    },
  ],
  "Must Read": [
    {
      title: "How to use a Home Chef Subscription to make cooking easier",
      name:"Streamlining your kitchen routine",
      date: "July 15, 2023",
      time: "2 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_image_82ea3de818.png&w=1920&q=75",
      id: "mustread-1",
    },
    {
      title: "What to do when your cook is on leave?",
      name:"Interesting Alternatives",
      date: "April 16, 2023",
      time: "3 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FScreenshot_2023_06_24_at_3_54_55_PM_1d2b58b7d7.png&w=1920&q=75",
      id: "mustread-2",
    },
    {
      title: "The Importance of Hiring the Best Cook for Home in Gurgaon/Noida",
      name:"Get the perfect cook",
      date: "April 17, 2023",
      time: "4 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FFood_d7b9aaa238.jpg&w=1920&q=75",
      id: "mustread-3",
    },
    {
      title: "Spice Up Your Next Party with Fun Party Games",
      name:"Party Games to Elevate Your Next Event",
      date: "May 18, 2023",
      time: "5 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2F1256_x_568_98d8d86af3.jpg&w=1920&q=75",
      id: "mustread-4",
    },
    {
      title: "ChefKart's Monthly Subscription vs Online Food Delivery: Making Healthier and More Cost-Effective Choices",
      name:"Healthier and More Convenient Meals with ChefKart's Monthly Subscription",
      date: "April 19, 2023",
      time: "2 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fonline_offline_final_6f0f608a66.webp&w=1920&q=75",
      id: "mustread-5",
    },
  ],
  Trending: [
    {
      title: "Impact of ChefKart's Cooking Services on Customers",
      name:"Enhancing Home Dining",
      date: "November 1, 2023",
      time: "4 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fblog_banner_02_c53b8b734b.webp&w=1920&q=75",
      id: "trending-1",
    },
    {
      title: "ChefKart’s most-loved one-time cooking service, Chefit.",
      name:"Now in South Delhi",
      date: "June 12, 2023",
      time: "3 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FBlog_Banner_1_V6_287615be2c.png&w=2048&q=75",
      id: "trending-2",
    },
    {
      title: "Accio Potterheads! Here are Magical Delights from the Harry Potter Series to Send You to the Wizarding World",
      name:"Delicious Harry Potter Dishes",
      date: "September 29, 2023",
      time: "2 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FHP_F1_philosophers_stone_great_hall_halloween_floating_pumpkins_feast_web_landscape_25931ea743.jpeg&w=2048&q=75",
      id: "trending-3",
    }
  ],
  "Food Recipe": [
    {
      title: "Know what are superfoods and their benefits",
      name:"Take a look at superfoods",
      date: "March 22, 2023",
      time: "3 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2FSuperfoods_Good_Flour_blog_6b225efd3b.webp&w=2048&q=75",
      id: "recipe-1",
    },
    {
      title: "Must-Try Indian Breakfast Recipes to Start Your Day Right",
      name:"Must-Try Indian Breakfast Recipes: Start Your Day Right",
      date: "May 14, 2023",
      time: "4 min",
      img: "https://thechefkart.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fchefkart-strapi-media%2Fbreakfast_final_8f4844b3ed.webp&w=2048&q=75",
      id: "recipe-2",
    }
  ],
  News: [
   
  ],
};

// export default function Tab() {
//   const [activeTab, setActiveTab] = useState("Partner");
//   const navigate = useNavigate();

//   const handleCardClick = (item) => {
//     navigate(`/detail/${item.id}`, { state: item });
//   };

//   return (
//     <div className="p-6">
//       {/* Tabs */}
//       <div className="flex space-x-4 mb-6 justify-center">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded ${
//               activeTab === tab ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700"
//             }`}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
//         {contentData[activeTab].map((item, idx) => (
//           <div
//             key={idx}
//             onClick={() => handleCardClick(item)}
//             className="cursor-pointer w-[400px] h-[350px] bg-white rounded-xl shadow-md overflow-hidden"
//           >
//             <img
//               src={item.img}
//               alt=""
//               className="w-full h-[200px] object-cover"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg mb-1 line-clamp-2">{item.title}</h3>
//               {item.name && <p className="text-sm text-gray-500 mb-1 font-medium">{item.name}</p>}
//               <div className="text-sm text-gray-500">
//                 {item.date} • {item.time}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
export default function Tab() {
  const [activeTab, setActiveTab] = useState("Partner");
  const navigate = useNavigate();

  const handleCardClick = (item) => {
    navigate(`/detail/${item.id}`, { state: item });
  };

  return (
    <div className="p-6">
      {/* Tabs */}
      {/* <div className="flex space-x-4 mb-6 justify-center flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded ${
              activeTab === tab ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div> */}
<div className="flex space-x-4 mb-6 justify-center flex-wrap mt-4">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 rounded mb-2 ${
        activeTab === tab ? "bg-purple-700 text-white" : "bg-gray-100 text-gray-700"
      }`}
    >
      {tab}
    </button>
  ))}
</div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {contentData[activeTab].map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(item)}
            className="cursor-pointer w-full sm:w-[400px] h-[350px] bg-white rounded-xl shadow-md overflow-hidden mx-auto"
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">{item.title}</h3>
              {item.name && <p className="text-sm text-gray-500 mb-1 font-medium">{item.name}</p>}
              <div className="text-sm text-gray-500">
                {item.date} • {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
