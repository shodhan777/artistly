import Image from "next/image";
import Link from "next/link";
import categories from "../data/categories.json";

const categoryImages: Record<string, string> = {
  Singer: "/category-icons/singer.png",
  Dancer: "/category-icons/dancer.png",
  DJ: "/category-icons/dj.png",
  Speaker: "/category-icons/speaker.png",
};

export default function Home() {
  return (
    <section className="text-center p-6 min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      
      {/* Introduction */}
      <h1 className="text-3xl font-bold mb-2">Welcome to Artistly</h1>
      <p className="text-gray-700 mb-4">Find and book talented artists for your events.</p>

      <Link
        href="/artists"
        className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
      >
        Explore Artists
      </Link>

      {/* Category Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {categories.map((category) => (
          <div
            key={category}
            className="border rounded shadow hover:shadow-md transition bg-white flex flex-col items-center overflow-hidden"
          >
            {/* Shared Background Block */}
            <div className="w-full bg-pink-100 flex flex-col items-center p-4">
              <h2 className="text-lg font-semibold mb-2">{category}</h2>

              <div className="w-300 h-300 relative">
                {categoryImages[category] && (
                  <Image
                    src={categoryImages[category]}
                    alt={category}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
