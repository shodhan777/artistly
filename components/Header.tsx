import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide">Artistly</h1>

      <nav className="flex gap-6 pr-10">
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
        <Link href="/artists" className="hover:text-gray-300 transition">Artists</Link>
        <Link href="/onboard" className="hover:text-gray-300 transition">Onboard Artist</Link>
        <Link href="/dashboard" className="hover:text-gray-300 transition">Dashboard</Link>
      </nav>
    </header>
  );
}
