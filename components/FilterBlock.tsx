interface FilterBlockProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  location: string;
  setLocation: (location: string) => void;
}

export default function FilterBlock({
  categories,
  selectedCategory,
  setSelectedCategory,
  location,
  setLocation,
}: FilterBlockProps) {
  return (
    <div className="bg-white p-4 mb-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Filter Artists</h2>

      {/* Category */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Category:</label>
        <select
          value={selectedCategory || undefined}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="block mb-1 font-medium">Location:</label>
        <input
          type="text"
          value={location || ""}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="border px-3 py-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </div>
  );
}
