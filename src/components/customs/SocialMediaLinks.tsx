"use client";

interface SocialMediaLinksProps {
	className?: string;
}

const socialMedia = [
	{
		name: "LinkedIn",
		href: "https://linkedin.com/in/yourusername",
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		name: "Instagram",
		href: "https://instagram.com/yourusername",
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm8.9 1.85a1.05 1.05 0 110 2.1 1.05 1.05 0 010-2.1zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
			</svg>
		),
	},
	{
		name: "Gmail",
		href: "mailto:your.email@example.com",
		icon: (
			<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2h-3V9.9l-6 4.5-6-4.5V19H3a2 2 0 01-2-2V7a2 2 0 012-2zm2 3.2l7 5.25 7-5.25V7l-7 5.25L5 7v1.2z" />
			</svg>
		),
	},
];

export default function SocialMediaLinks({ className = "mt-4 flex items-center gap-4" }: SocialMediaLinksProps) {
	return (
		<div className={className}>
			{socialMedia.map((item) => (
				<a
					key={item.name}
					href={item.href}
					target={item.name !== "Gmail" ? "_blank" : undefined}
					rel={item.name !== "Gmail" ? "noopener noreferrer" : undefined}
					aria-label={item.name}
					className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
				>
					{item.icon}
				</a>
			))}
		</div>
	);
}
