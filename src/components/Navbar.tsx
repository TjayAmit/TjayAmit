import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link href="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-100 text-lg">Portfolio</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link href="#about" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">About</Link>
            <Link href="#projects" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Projects</Link>
            <Link href="#skills" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Skills</Link>
            <Link href="#contact" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}