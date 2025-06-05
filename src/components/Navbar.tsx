"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	function downloadResume() {
		console.log("Click downloadResume");
	}

	return (
		<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 shadow-sm">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<span className="font-semibold text-gray-100 text-lg">
								Portfolio
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1">
						<Link
							href="#about"
							className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
						>
							About
						</Link>
						<Link
							href="#projects"
							className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
						>
							Projects
						</Link>
						<Link
							href="#skills"
							className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
						>
							Skills
						</Link>
						<Link
							href="#contact"
							className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
						>
							Contact
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isOpen ? (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								) : (
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>

					{/* Resume Button */}
					<div className="hidden md:flex items-center ml-4">
						<button
							type="button"
							onClick={downloadResume}
							className="h-10 flex items-center px-6 cursor-pointer bg-white rounded-3xl"
						>
							<span className="font-semibold text-black text-lg">Resume</span>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<Link
							href="#about"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
						>
							About
						</Link>
						<Link
							href="#projects"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
						>
							Projects
						</Link>
						<Link
							href="#skills"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
						>
							Skills
						</Link>
						<Link
							href="#contact"
							className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
						>
							Contact
						</Link>
						<button
							type="button"
							onClick={downloadResume}
							className="w-full mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500 hover:bg-blue-600"
						>
							Download Resume
						</button>
					</div>
				)}
			</div>
		</nav>
	);
}
