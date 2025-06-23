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
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Our Artists</h1>

      {/* FilterBlock */}
      <FilterBlock
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        location={location}
        setLocation={setLocation}
      />

      {/* Artist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredArtists.map((artist) => (
          <div key={artist.id} className="border m-2 p-4">
            <h2 className="text-lg font-semibold">{artist.name}</h2>
            <p>Category: {artist.category}</p>
            <p>Location: {artist.location}</p>
            <p>Price Range: {artist.priceRange}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
