import Link from "next/link";
import categories from "../data/categories.json";

export default function Home() {
  return (
    <section className="text-center p-6 min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      
      {/* Title/Introduction */}
      <h1 className="text-3xl font-bold mb-2">Welcome to Artistly</h1>
      <p className="text-gray-700 mb-4">Find and book talented artists for your events.</p>
      <Link
        href="/artists"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
      >
        Explore Artists
      </Link>
      <div className="h-8"></div>
      <div className="max-w-max mx-auto bg-white p-6 rounded shadow mb-10">
        <h2 className="text-2xl font-bold mb-2">Why Choose Artistly?</h2>
        <p className="text-gray-700">
          Artistly makes it simple to discover and book talented performers for your events.
          Whether you are planning a wedding, corporate event, or private party,
          we connect you with verified artists from singers to DJs and more.
          Enjoy a stress-free booking experience with our carefully curated artist listings.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={category}
            className={`p-6 h-48 flex items-center justify-center rounded shadow hover:shadow-lg transition text-white font-semibold ${
              index % 4 === 0
                ? "bg-pink-500"
                : index % 4 === 1
                ? "bg-purple-500"
                : index % 4 === 2
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          >
            <h2 className="text-lg">{category}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
