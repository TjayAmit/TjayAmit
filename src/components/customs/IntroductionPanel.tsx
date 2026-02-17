"use client";

import type { ReactNode } from "react";
import SocialMediaLinks from "@/components/customs/SocialMediaLinks";
import type { TechStackItem } from "@/data/introduction";

interface IntroductionPanelProps {
	isTypingComplete: boolean;
	revealProgress: number;
	role: string;
	summary: string;
	aboutTitle: string;
	aboutParagraphs: string[];
	techTitle: string;
	techStack: TechStackItem[];
}

export default function IntroductionPanel({
	isTypingComplete,
	revealProgress,
	role,
	summary,
	aboutTitle,
	aboutParagraphs,
	techTitle,
	techStack,
}: IntroductionPanelProps) {
	const introOpacity = Math.max(0, 1 - revealProgress * 1.2);

	const iconMap: Record<TechStackItem["key"], ReactNode> = {
		laravel: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M2 7.8 12 2l10 5.8v8.4L12 22l-4.2-2.4V15l4.2 2.4 6-3.5V10l-6 3.5L6 10v4.9L2 12.5V7.8Zm4 0 6 3.5 6-3.5-6-3.5-6 3.5Z" />
			</svg>
		),
		fastapi: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M13.2 2 6 11.5h4.4L8.6 22 18 9.8h-4.2L13.2 2Z" />
			</svg>
		),
		typescript: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M3 3h18v18H3V3Zm10.3 6.3h6.2V11h-2v6h-2.2v-6h-2V9.3ZM9.8 9.2c-1.7 0-2.8.9-2.8 2.3 0 1.2.7 1.9 2.3 2.3 1 .3 1.3.5 1.3.9 0 .5-.4.7-1 .7-.8 0-1.5-.2-2.2-.8V17c.8.5 1.7.7 2.6.7 1.8 0 2.9-.9 2.9-2.4 0-1.2-.7-1.9-2.2-2.3-1-.2-1.4-.5-1.4-.9s.4-.7 1-.7c.7 0 1.3.2 2 .7V9.9c-.7-.4-1.5-.7-2.5-.7Z" />
			</svg>
		),
		flutter: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M14.3 2 5 11.3l2.8 2.8L20 2H14.3ZM7.8 16.8l3.9 3.9h5.7l-6.8-6.8-2.8 2.9Z" />
			</svg>
		),
		react: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				aria-hidden="true"
			>
				<circle cx="12" cy="12" r="1.5" fill="currentColor" />
				<ellipse cx="12" cy="12" rx="9" ry="3.8" strokeWidth="1.4" />
				<ellipse
					cx="12"
					cy="12"
					rx="9"
					ry="3.8"
					transform="rotate(60 12 12)"
					strokeWidth="1.4"
				/>
				<ellipse
					cx="12"
					cy="12"
					rx="9"
					ry="3.8"
					transform="rotate(120 12 12)"
					strokeWidth="1.4"
				/>
			</svg>
		),
		node: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M12 2.5 4.5 6.8v10.4L12 21.5l7.5-4.3V6.8L12 2.5Zm0 2 5.7 3.3v8.5L12 19.5l-5.7-3.2V7.8L12 4.5Z" />
			</svg>
		),
		socket: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M12 2 5 6v8l7 4 7-4V6l-7-4Zm0 2.2 4.8 2.7v5.6L12 15.2l-4.8-2.7V6.9L12 4.2Z" />
			</svg>
		),
	};

	return (
		<div className="relative z-10 text-center lg:text-left pb-20 min-h-[125vh]">
			<div className="min-h-[58vh] flex flex-col justify-start">
				<div
					className="transition-opacity duration-200"
					style={{ opacity: introOpacity }}
				>
					<div className="flex items-center justify-center lg:justify-start">
						<p
							className={`text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white typing-text ${
								isTypingComplete ? "complete" : ""
							}`}
						>
							{role}
						</p>
					</div>

					<p className="mt-4 text-sm sm:text-md text-gray-600 dark:text-white leading-relaxed">
						{summary}
					</p>

					<p className="mt-8 text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-400">
						Let&apos;s connect
					</p>
					<SocialMediaLinks className="mt-3 flex items-center justify-center lg:justify-start gap-4" />
				</div>
			</div>

			<div
				className="transition-all duration-300"
				style={{
					opacity: revealProgress,
					transform: `translateY(${(1 - revealProgress) * 24}px)`,
				}}
			>
				<h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
					{aboutTitle}
				</h2>
				<div className="mt-4 space-y-4">
					{aboutParagraphs.map((paragraph) => (
						<p
							key={paragraph}
							className="text-sm sm:text-md text-gray-600 dark:text-white leading-relaxed"
						>
							{paragraph}
						</p>
					))}

					<div>
						<p className="text-sm sm:text-md text-gray-600 dark:text-white leading-relaxed font-medium">
							{techTitle}
						</p>
						<ul className="mt-3 flex flex-wrap gap-2">
							{techStack.map((item) => (
								<li
									key={item.label}
									className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm sm:text-md text-gray-700 dark:text-gray-200"
								>
									<span className={item.colorClass}>{iconMap[item.key]}</span>
									<span>{item.label}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
