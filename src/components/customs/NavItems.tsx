"use client";

import type { NavItem } from "@/data/portfolio";
import type { MouseEvent } from "react";
import NavBarItem from "@/components/customs/NavBarItem";

interface NavItemsProps {
	items: NavItem[];
	activeSection: string;
	onClick: (e: MouseEvent, sectionId: string) => void;
	mobile?: boolean;
}

export default function NavItems({
	items,
	activeSection,
	onClick,
	mobile = false,
}: NavItemsProps) {
	return (
		<>
			{items.map((item) => (
				<NavBarItem
					key={item.href}
					item={item}
					activeSection={activeSection}
					onClick={onClick}
					mobile={mobile}
				/>
			))}
		</>
	);
}
