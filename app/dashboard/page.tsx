"use client";
import { useState } from "react";
import artists from "../../data/artists.json";
import Table from "@/components/Table";

export default function Dashboard() {
  const [search, setSearch] = useState("");

  const filteredArtists = artists.filter((artist) =>
    artist.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
      <div className="w-full max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Manager Dashboard</h1>

        {/* Search Bar with Label */}
        <div className="flex flex-col items-center mb-6">
          <label className="mb-2 font-medium text-gray-700">Search by Artist Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border bg-blue-100 px-4 py-2 w-full sm:w-1/2 md:w-1/3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Centered Table */}
        <div className="flex justify-center">
          <div className="w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
            <Table data={filteredArtists} />
          </div>
        </div>
      </div>
    </section>
  );
}
