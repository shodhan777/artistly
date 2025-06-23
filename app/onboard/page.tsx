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
    <section className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Onboard a New Artist</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <label className="block mb-1">Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="border px-2 py-1 w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1">Category:</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
            className="border px-2 py-1 w-full"
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
          <label className="block mb-1">Price Range:</label>
          <input
            name="priceRange"
            value={form.priceRange}
            onChange={handleChange}
            required
            className="border px-2 py-1 w-full"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1">Location:</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            className="border px-2 py-1 w-full"
          />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </section>
  );
}
