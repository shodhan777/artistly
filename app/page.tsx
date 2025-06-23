import Link from "next/link";
import categories from "../data/categories.json";

export default function Home() {
  return (
    <section className="text-center p-4">
      {/* Hero Section */}
      <h1 className="text-3xl font-bold">Welcome to Artistly</h1>
      <p className="mt-2">Find and book talented artists for your events.</p>

      <Link
        href="/artists"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Explore Artists
      </Link>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 mt-6">
        {categories.map((category) => (
          <div key={category} className="border m-2 p-2">
            <h2 className="text-lg font-medium">{category}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
