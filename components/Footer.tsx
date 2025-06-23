export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center">
       
        <p className="text-sm">&copy; {new Date().getFullYear()} Artistly. All rights reserved.</p>
       
        <div className="space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-gray-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition">Terms</a>
          <a href="#" className="hover:text-gray-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
