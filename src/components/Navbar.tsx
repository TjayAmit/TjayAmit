"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");
	const [theme, setTheme] = useState("dark");
	const [loading, setLoading] = useState(false);

	// Scroll handler
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);

			const sections = ["about", "projects", "side-projects", "contact"];
			const offset = 150;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= offset && rect.bottom >= offset) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Mobile menu body scroll lock
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	// Theme toggle (with persistence)
	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
		localStorage.setItem("theme", newTheme);
	};

	// Load saved theme
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme") || "dark";
		setTheme(savedTheme);
		document.documentElement.classList.toggle("dark", savedTheme === "dark");
	}, []);

	const downloadResume = () => {
		setLoading(true);
		const link = document.createElement("a");
		link.href = "/assets/resume.pdf"; // ← update with your real resume path
		link.download = "Tristan_Jay_Resume.pdf";
		link.click();
		setTimeout(() => setLoading(false), 800);
	};

	const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
		e.preventDefault();
		setIsOpen(false);
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	const navItems = [
		{ name: "About", href: "about" },
		{ name: "Projects", href: "projects" },
		{ name: "Side Projects", href: "side-projects" },
		{ name: "Contact", href: "contact" },
	];

	return (
		<>
			{/* Desktop + Mobile Navbar */}
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled
						? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-sm border-b border-gray-200/50 dark:border-gray-800/50"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-6 lg:px-8">
					<div className="flex justify-between items-center h-20">
						{/* Logo */}
						<Link
							href="/"
							className="flex items-center space-x-2 group"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
								setIsOpen(false);
							}}
						>
							<div className="relative w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-md group-hover:shadow-lg transition-all">
								TJ
							</div>
							<span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Tjay
              </span>
						</Link>

						{/* Desktop Nav */}
						<div className="hidden md:flex items-center space-x-1">
							{navItems.map((item) => (
								<Link
									key={item.href}
									href={`#${item.href}`}
									onClick={(e) => handleNavClick(e, item.href)}
									className="relative px-5 py-2.5 group"
								>
                  <span
					  className={`relative z-10 font-medium transition-colors duration-300 ${
						  activeSection === item.href
							  ? "text-indigo-600 dark:text-indigo-400"
							  : "text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
					  }`}
				  >
                    {item.name}
                  </span>
									{/* Underline animation */}
									<span
										className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transform transition-transform duration-300 origin-left ${
											activeSection === item.href
												? "scale-x-100"
												: "scale-x-0 group-hover:scale-x-100"
										}`}
									/>
								</Link>
							))}
						</div>

						{/* Right Actions (Desktop) */}
						<div className="hidden md:flex items-center space-x-4">
							{/* Theme Toggle */}
							<button
								onClick={toggleTheme}
								className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
								aria-label="Toggle theme"
							>
								{theme === "dark" ? (
									<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
										<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
									</svg>
								) : (
									<svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</button>

							{/* Resume Button */}
							<button
								onClick={downloadResume}
								disabled={loading}
								className="relative px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
							>
                <span className="relative z-10 flex items-center gap-2">
                  {loading ? (
					  <>
						  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
							  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
							  <path
								  className="opacity-75"
								  fill="currentColor"
								  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							  />
						  </svg>
						  Loading...
					  </>
				  ) : (
					  <>
						  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							  <path
								  strokeLinecap="round"
								  strokeLinejoin="round"
								  strokeWidth={2}
								  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
							  />
						  </svg>
						  Resume
					  </>
				  )}
                </span>
								<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
							</button>
						</div>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
							aria-label="Toggle menu"
						>
							<div className="w-6 h-6 relative flex items-center justify-center">
                <span
					className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300 ${
						isOpen ? "rotate-45" : "-translate-y-2"
					}`}
				></span>
								<span
									className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${
										isOpen ? "opacity-0" : ""
									}`}
								></span>
								<span
									className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300 ${
										isOpen ? "-rotate-45" : "translate-y-2"
									}`}
								></span>
							</div>
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setIsOpen(false)}
			/>

			{/* Mobile Navigation Panel */}
			<div
				className={`fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white dark:bg-gray-950 z-50 transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				} shadow-2xl md:hidden`}
			>
				<div className="flex flex-col h-full">
					{/* Header */}
					<div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Tjay
            </span>
						<button
							onClick={() => setIsOpen(false)}
							className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							aria-label="Close menu"
						>
							<svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>

					{/* Nav Items */}
					<div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={`#${item.href}`}
								onClick={(e) => handleNavClick(e, item.href)}
								className={`block px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
									activeSection === item.href
										? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
										: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
								}`}
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Bottom Actions */}
					<div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-4">
						{/* Theme Toggle */}
						<button
							onClick={toggleTheme}
							className="w-full flex items-center justify-between px-5 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
						>
							<span className="font-medium">Theme</span>
							<div className="flex items-center gap-3">
								{theme === "dark" ? (
									<svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
										<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
									</svg>
								) : (
									<svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</div>
						</button>

						{/* Resume */}
						<button
							onClick={downloadResume}
							disabled={loading}
							className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
						>
							{loading ? (
								<>
									<svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										/>
									</svg>
									Loading...
								</>
							) : (
								<>
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
										/>
									</svg>
									Download Resume
								</>
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}