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
		php: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M3 12c0-4.4 3.8-8 9-8s9 3.6 9 8-3.8 8-9 8-9-3.6-9-8Zm6.4-2.3h2.1c1.5 0 2.3-.7 2.3-1.9s-.8-1.9-2.3-1.9H8.1v8.2h1.3V9.7Zm1.9-2.7c.8 0 1.2.3 1.2.8s-.4.8-1.2.8H9.4V7h1.9Z" />
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
		python: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M12 2c-3.3 0-3.1 1.4-3.1 1.4V5h3.2v.5H7.7S5.6 5.3 5.6 8.8c0 3.5 1.8 3.4 1.8 3.4h1.1v-1.5s-.1-1.8 1.8-1.8h3.2s1.8 0 1.8-1.7V4.9S15.5 2 12 2Zm-1.8 1.1a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4Zm1.8 18.9c3.3 0 3.1-1.4 3.1-1.4V19h-3.2v-.5h4.4s2.1.2 2.1-3.3c0-3.5-1.8-3.4-1.8-3.4h-1.1v1.5s.1 1.8-1.8 1.8h-3.2S8.7 15 8.7 16.7v2.4S8.5 22 12 22Zm1.8-1.1a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z" />
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
		javascript: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M3 3h18v18H3V3Zm10.2 13.5c.4.7 1 1.2 2 1.2.8 0 1.3-.4 1.3-1 0-.7-.5-1-1.5-1.4l-.5-.2c-1.4-.6-2.3-1.3-2.3-2.8 0-1.4 1.1-2.5 2.8-2.5 1.2 0 2.1.4 2.8 1.5l-1.5.9c-.3-.6-.7-.8-1.2-.8-.6 0-.9.3-.9.8 0 .6.3.8 1.2 1.2l.5.2c1.6.7 2.5 1.4 2.5 3 0 1.7-1.3 2.6-3.1 2.6-1.8 0-2.9-.8-3.5-1.9l1.4-.8Zm-6.5.2c.3.5.6.9 1.2.9.6 0 .9-.2.9-1v-5.3h1.9v5.3c0 1.6-.9 2.4-2.4 2.4-1.4 0-2.2-.7-2.6-1.5l1-.8Z" />
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
		dart: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M12.8 2.1 4 10.9v8.7l4.4 2.3h6.8l4.8-4.8V9.6l-7.2-7.5Zm-.5 2.5 5 5.2-3.5 3.4-5-5.2 3.5-3.4Zm-5 13.7v-6l3.5 3.7-3.5 2.3Zm5.8 1.2H9.2l4.6-3 3.7-3.5v3.7l-4.4 2.5Z" />
			</svg>
		),
		redis: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M12 3 4 6.5v3L12 13l8-3.5v-3L12 3Zm-8 8.5v3L12 18l8-3.5v-3L12 15l-8-3.5Zm0 5v1.8L12 22l8-3.7v-1.8L12 20l-8-3.5Z" />
			</svg>
		),
		docker: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M9 6h2v2H9V6Zm2.5 0h2v2h-2V6ZM6.5 9h2v2h-2V9ZM9 9h2v2H9V9Zm2.5 0h2v2h-2V9Zm2.5 0h2v2h-2V9Zm-7.5 3h9.2c.3 1.2 1.1 1.9 2.5 1.8 1.1-.1 2-.7 2.7-1.7-.4-.2-.9-.4-1.2-.8.4-.2 1-.3 1.4-.2.2-.8-.1-1.7-.8-2.3-.6.4-1 .9-1.2 1.5H17c-.4-1.1-1.4-1.8-2.6-1.8H6v2.5h-.5V12h1Z" />
			</svg>
		),
		apache: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M5 18.5 10.5 5h2.2L7.2 18.5H5Zm6.2 0L15.8 7h2.2l-4.6 11.5h-2.2Z" />
			</svg>
		),
		nginx: (
			<svg
				className="w-5 h-5"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
			>
				<path d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2Zm-2.4 6.1h1.8l3 5V8.6h1.7v6.8h-1.8l-3-5v4.5H9.6V8.1Z" />
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
							{techStack.map((item, index) => (
								<li
									key={`${item.key}-${item.label}-${index}`}
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
