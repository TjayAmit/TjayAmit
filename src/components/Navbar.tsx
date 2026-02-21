"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data/portfolio";
import DownloadResume from "@/components/customs/DownloadResume";
import NavItems from "@/components/customs/NavItems";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);

			const offset = 150;
			let nextSection = "";
			for (const section of NAV_ITEMS.map((item) => item.href)) {
				const element = document.getElementById(section);
				if (!element) continue;

				const rect = element.getBoundingClientRect();
				if (rect.top <= offset && rect.bottom >= offset) {
					nextSection = section;
					break;
				}
			}
			setActiveSection(nextSection || NAV_ITEMS[0]?.href || "");
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
		e.preventDefault();
		setIsOpen(false);

		const element = document.getElementById(sectionId);
		if (!element) return;

		const offset = 80;
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - offset;
		window.scrollTo({ top: offsetPosition, behavior: "smooth" });
	};

	return (
		<>
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					scrolled
						? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-sm border-b border-gray-200/70 dark:border-gray-800/80"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
						<Link
							href="/"
							className="group"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
								setIsOpen(false);
							}}
						>
							<HexLogo />
						</Link>

						<div className="hidden md:flex items-center gap-1 lg:gap-2">
							<NavItems
								items={NAV_ITEMS}
								activeSection={activeSection}
								onClick={handleNavClick}
							/>
							<DownloadResume />
						</div>

						<button
							onClick={() => setIsOpen(!isOpen)}
							className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-900/90 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							aria-label="Toggle menu"
						>
							<div className="w-6 h-6 relative flex items-center justify-center">
								<span
									className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300 ${isOpen ? "rotate-45" : "-translate-y-2"}`}
								/>
								<span
									className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
								/>
								<span
									className={`absolute w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300 ${isOpen ? "-rotate-45" : "translate-y-2"}`}
								/>
							</div>
						</button>
					</div>
				</div>
			</nav>

			<div
				className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
				onClick={() => setIsOpen(false)}
			/>

			<div
				className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white dark:bg-gray-950 z-50 transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				} shadow-2xl md:hidden`}
			>
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
						<HexLogo />
						<button
							onClick={() => setIsOpen(false)}
							className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
							aria-label="Close menu"
						>
							<svg
								className="w-6 h-6 text-gray-700 dark:text-gray-300"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<div className="flex-1 overflow-y-auto py-7 px-5 space-y-2">
						<NavItems
							items={NAV_ITEMS}
							activeSection={activeSection}
							onClick={handleNavClick}
							mobile
						/>
					</div>

					<DownloadResume variant="mobile" />
				</div>
			</div>
		</>
	);
}

function HexLogo() {
	return (
		<div className="relative w-11 h-11 text-indigo-600 dark:text-indigo-400">
			<svg
				className="w-full h-full transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400"
				viewBox="0 0 50 48"
				fill="none"
				aria-hidden="true"
			>
				<polygon
					points="25,2 45,13 45,35 25,46 5,35 5,13"
					stroke="currentColor"
					strokeWidth="2"
					fill="transparent"
				/>
			</svg>
			<span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
				TJ
			</span>
		</div>
	);
}
