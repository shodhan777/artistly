import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Artistly</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/artists">Artists</Link>
        <Link href="/onboard">Onboard Artist</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
}
