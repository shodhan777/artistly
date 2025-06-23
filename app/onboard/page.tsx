"use client";
import { useState } from "react";
import categories from "../../data/categories.json";

export default function OnboardArtist() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    priceRange: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Artist:", form);
    alert("Artist submitted successfully!");
    setForm({ name: "", category: "", priceRange: "", location: "" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Onboard a New Artist</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium text-blue-700">Name:</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter artist's name"
              className="border px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium text-blue-700">Category:</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="border px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block mb-1 font-medium text-blue-700">Price Range:</label>
            <input
              name="priceRange"
              value={form.priceRange}
              onChange={handleChange}
              required
              placeholder="e.g., 5000 - 10000"
              className="border px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium text-blue-700">Location:</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              placeholder="City or region"
              className="border px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-gray-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
