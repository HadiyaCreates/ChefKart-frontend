import React, { useState } from "react";
import axios from "axios";

const CreateChefForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    profilepic: "",
    defaultCookImage: "",
    city: "",
    state: "",
    area: "",
    country: "",
    pincode: "",
    email: "",
    phone: "",
    experience: "",
    starRating: "",
    totalRatings: "",
    languages: "",
    veg: false,
    nonVeg: false,
    aboutCook: "",
    housesServed: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const chefData = {
      name: formData.name,
      Address: formData.address,
      profilepic: formData.profilepic,
      default_cook_image: formData.defaultCookImage,
      city: formData.city,
      state: formData.state,
      area: formData.area,
      country: formData.country,
      pincode: formData.pincode,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      verified: true,
      starRating: parseFloat(formData.starRating),
      totalRatings: parseInt(formData.totalRatings),
      language: formData.languages.split(",").map((l) => l.trim()),
      veg: formData.veg,
      nonVeg: formData.nonVeg,
      aboutCook: formData.aboutCook,
      cuisineRatings: [],
      availableLocations: [],
      availability: [],
      housesServed: parseInt(formData.housesServed),
    };

    try {
      await axios.post("http://localhost:8000/chef/create", chefData);
      alert("Chef created successfully!");
      setFormData({
        name: "",
        address: "",
        profilepic: "",
        defaultCookImage: "",
        city: "",
        state: "",
        area: "",
        country: "",
        pincode: "",
        email: "",
        phone: "",
        experience: "",
        starRating: "",
        totalRatings: "",
        languages: "",
        veg: false,
        nonVeg: false,
        aboutCook: "",
        housesServed: "",
      });
    } catch (error) {
      console.error("Error creating chef:", error);
      alert("Failed to create chef.");
    }
  };

  return (
    <div
    //   style={{
    //     maxWidth: 400,
    //     margin: "50px auto",
    //     padding: 20,
    //     border: "1px solid #ddd",
    //     borderRadius: 8,
    //     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    //     fontFamily: "Arial, sans-serif",
    //   }}
     style={{
    maxWidth: 400,
    margin: "50px auto",
    padding: 20,
    border: "1px solid #ddd",
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundImage: "url('https://example.com/your-bg.jpg')",
    backgroundSize: "cover",      // Cover entire area
    backgroundPosition: "center", // Center the image
    backgroundRepeat: "no-repeat",
  }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 20 }}>Create Chef</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="profilepic"
          placeholder="Profile Picture URL"
          value={formData.profilepic}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="defaultCookImage"
          placeholder="Default Cook Image URL"
          value={formData.defaultCookImage}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          type="number"
          name="starRating"
          placeholder="Star Rating (e.g. 4.5)"
          step="0.1"
          value={formData.starRating}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="number"
          name="totalRatings"
          placeholder="Total Ratings"
          value={formData.totalRatings}
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          type="text"
          name="languages"
          placeholder="Languages (comma separated)"
          value={formData.languages}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={{ display: "block", marginBottom: 10 }}>
          <input
            type="checkbox"
            name="veg"
            checked={formData.veg}
            onChange={handleChange}
          />{" "}
          Veg
        </label>

        <label style={{ display: "block", marginBottom: 10 }}>
          <input
            type="checkbox"
            name="nonVeg"
            checked={formData.nonVeg}
            onChange={handleChange}
          />{" "}
          Non-Veg
        </label>

        <textarea
          name="aboutCook"
          placeholder="About Cook"
          value={formData.aboutCook}
          onChange={handleChange}
          style={{ ...inputStyle, height: 80 }}
        />

        <input
          type="number"
          name="housesServed"
          placeholder="Houses Served"
          value={formData.housesServed}
          onChange={handleChange}
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 10,
            marginTop: 15,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Create Chef
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: "100%",
  padding: 8,
  marginBottom: 12,
  borderRadius: 4,
  border: "1px solid #ccc",
  fontSize: 16,
  boxSizing: "border-box",
};

export default CreateChefForm;
