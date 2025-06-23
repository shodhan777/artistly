import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide">Artistly</h1>

      <nav className="flex gap-6">
        <Link href="/" className="hover:text-gray-200 transition">Home</Link>
        <Link href="/artists" className="hover:text-gray-200 transition">Artists</Link>
        <Link href="/onboard" className="hover:text-gray-200 transition">Onboard Artist</Link>
        <Link href="/dashboard" className="hover:text-gray-200 transition">Dashboard</Link>
      </nav>
    </header>
  );
}
