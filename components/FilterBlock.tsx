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
    <div className="border p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Filter Artists</h2>

      {/* Category Filter */}
      <div className="mb-2">
        <label className="block mb-1">Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Location Filter */}
      <div>
        <label className="block mb-1">Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          className="border px-2 py-1 w-full"
        />
      </div>
    </div>
  );
}
