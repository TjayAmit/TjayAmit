"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import type { NavItem } from "@/data/portfolio";

interface NavBarItemProps {
	item: NavItem;
	activeSection: string;
	onClick: (e: MouseEvent, sectionId: string) => void;
	mobile?: boolean;
}

export default function NavBarItem({
	item,
	activeSection,
	onClick,
	mobile = false,
}: NavBarItemProps) {
	if (mobile) {
		return (
			<Link
				href={`#${item.href}`}
				onClick={(e) => onClick(e, item.href)}
				className={`block px-5 py-4 rounded-xl font-medium transition-all duration-300 ${
					activeSection === item.href
						? "bg-indigo-600 text-white"
						: "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
				}`}
			>
				{item.name}
			</Link>
		);
	}

	return (
		<Link
			href={`#${item.href}`}
			onClick={(e) => onClick(e, item.href)}
			className="relative px-3 lg:px-4 py-2 group rounded-md"
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
			<span
				className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400 transform transition-transform duration-300 origin-left ${
					activeSection === item.href
						? "scale-x-100"
						: "scale-x-0 group-hover:scale-x-100"
				}`}
			/>
		</Link>
	);
}
