import React, { useState } from "react";
import Chefs from "./Chefs";
import ChefCard from "./ChefCard";

const ChefNear = () => {
  const [filters, setFilters] = useState({ city: "", area: "", locality: "" });
  const [selectedChef, setSelectedChef] = useState(null);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value.toLowerCase() });
  };

  const filteredChefs = Chefs.filter((chef) => {
    return (
      chef.city.toLowerCase().includes(filters.city) &&
      chef.area.toLowerCase().includes(filters.area) &&
      chef.locality.toLowerCase().includes(filters.locality)
    );
  });

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Trending Cooks</h1>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            name="city"
            placeholder="Search City"
            onChange={handleChange}
            className="px-4 py-2 border rounded w-full md:w-1/3"
          />
          <input
            type="text"
            name="area"
            placeholder="Search Area"
            onChange={handleChange}
            className="px-4 py-2 border rounded w-full md:w-1/3"
          />
          <input
            type="text"
            name="locality"
            placeholder="Search Locality"
            onChange={handleChange}
            className="px-4 py-2 border rounded w-full md:w-1/3"
          />
        </div>

        {/* Chef Cards */}
        <div className="space-y-4">
          {filteredChefs.length > 0 ? (
            filteredChefs.map((chef) => (
              <ChefCard key={chef.id} chef={chef} onClick={() => setSelectedChef(chef)} />
            ))
          ) : (
            <p className="text-center text-gray-500">No chefs found for selected filters.</p>
          )}
        </div>
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
              src={selectedChef.image}
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
};

export default ChefNear;