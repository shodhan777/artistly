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
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manager Dashboard</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border px-2 py-1 mb-4 w-full md:w-1/3"
      />

      <Table data={filteredArtists} />
    </section>
  );
}
