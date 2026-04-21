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
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
				alt="Laravel"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		php: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
				alt="PHP"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		fastapi: (
			<img
				src="https://cdn.simpleicons.org/fastapi/009688"
				alt="FastAPI"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		python: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
				alt="Python"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		typescript: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
				alt="TypeScript"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		javascript: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
				alt="JavaScript"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		flutter: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
				alt="Flutter"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		dart: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
				alt="Dart"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		redis: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
				alt="Redis"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		docker: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
				alt="Docker"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		apache: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
				alt="Apache"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		nginx: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg"
				alt="Nginx"
				className="w-5 h-5"
				loading="lazy"
			/>
		),
		react: (
			<img
				src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
				alt="React"
				className="w-5 h-5"
				loading="lazy"
			/>
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
