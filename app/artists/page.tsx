"use client";
import { useState } from "react";
import artists from "../../data/artists.json";
import categories from "../../data/categories.json";
import FilterBlock from "@/components/FilterBlock";

export default function ArtistListing() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [location, setLocation] = useState("");

  const filteredArtists = artists.filter((artist) => {
    const matchesCategory =
      selectedCategory === "" || artist.category === selectedCategory;
    const matchesLocation =
      location === "" ||
      artist.location.toLowerCase().includes(location.toLowerCase());

    return matchesCategory && matchesLocation;
  });

  return (
    <section className="p-8 min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Title */}

        <h1 className="text-4xl font-bold text-center text-gray-800">Our Artists</h1>

        {/* Filter Section */}
        <div className="max-w-xl mx-auto ">
          <FilterBlock
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            location={location}
            setLocation={setLocation}
          />
        </div>

        {/* Artists */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="border rounded p-6 shadow bg-amber-300 hover:shadow-lg transition flex flex-col justify-between"
            >
              <h2 className="text-xl font-semibold mb-4 text-purple-700">{artist.name}</h2>
              <div className="space-y-1 text-gray-700">
                <p><span className="font-medium">Category:</span> {artist.category}</p>
                <p><span className="font-medium">Location:</span> {artist.location}</p>
                <p><span className="font-medium">Price Range:</span> {artist.priceRange}</p>
              </div>
            </div>
          ))}
        </div>


        {/* No Result */}
        {filteredArtists.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No artists found matching your criteria.</p>
        )}
      </div>
    </section>
  );
}
