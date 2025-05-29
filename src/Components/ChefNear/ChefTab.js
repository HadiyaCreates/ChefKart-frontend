import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ChefTab() {
  const [activeTab, setActiveTab] = useState("");
  const [tabData, setTabData] = useState({});
  const [selectedChef, setSelectedChef] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("http://localhost:8000/chef/getAll");
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/chef/getAll`);
        const data = response.data;

        // Group by cuisine or region, or just use "All"
        const groupedData = data.reduce((acc, item) => {
          const category = item.cuisine || "All";
          if (!acc[category]) acc[category] = [];
          acc[category].push({
            id: item._id,
            name: item.name,
            photo: item.photo,
            experience: item.experience,
            specialty: item.specialty,
            bio: item.bio,
          });
          return acc;
        }, {});

        setTabData(groupedData);
        setActiveTab(Object.keys(groupedData)[0]);
      } catch (err) {
        console.error("Error fetching chef data", err);
      }
    };

    fetchData();
  }, []);

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

      {/* Chef Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {tabData[activeTab]?.map((chef, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedChef(chef)}
            className="cursor-pointer w-full sm:w-[400px] h-[350px] bg-white rounded-xl shadow-md overflow-hidden mx-auto"
          >
            <img
              src={chef.photo}
              alt={chef.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                {chef.name}
              </h3>
              <div className="text-sm text-gray-500">
                {chef.specialty}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chef Detail Modal */}
      {selectedChef && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setSelectedChef(null)}
            >
              ✕
            </button>
            <img
              src={selectedChef.photo}
              alt={selectedChef.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-2">{selectedChef.name}</h2>
            <p className="text-center text-gray-600 mb-2">{selectedChef.specialty}</p>
            <p className="text-center text-gray-500 mb-2">Experience: {selectedChef.experience} years</p>
            <p className="text-center">{selectedChef.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}