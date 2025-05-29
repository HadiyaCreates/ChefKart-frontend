

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("");
  const [tabData, setTabData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:8000/blog/getAll");
       const response = await axios.get(`${process.env.REACT_APP_API_URL}/blog/getAll`);
        const data = response.data;

        // Group by category
        const groupedData = data.reduce((acc, item) => {
          const category = item.category || "Others";
          if (!acc[category]) acc[category] = [];
          acc[category].push({
            id: item._id,
            title: item.title,
            name: item.category,
            date: new Date(item.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            time: "3 min", // can replace with dynamic value if available
            img: item.image,
          });
          return acc;
        }, {});

        setTabData(groupedData);
        setActiveTab(Object.keys(groupedData)[0]); // default to first category
      } catch (err) {
        console.error("Error fetching blog data", err);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (item) => {
    navigate(`/detail/${item.id}`, { state: item });
  };

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 justify-center flex-wrap mt-4">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded mb-2 ${
              activeTab === tab
                ? "bg-purple-700 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {tabData[activeTab]?.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleCardClick(item)}
            className="cursor-pointer w-full sm:w-[400px] h-[350px] bg-white rounded-xl shadow-md overflow-hidden mx-auto"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                {item.title}
              </h3>
              {item.name && (
                <p className="text-sm text-gray-500 mb-1 font-medium">
                  {item.name}
                </p>
              )}
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
