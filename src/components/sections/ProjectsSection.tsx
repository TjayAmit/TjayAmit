"use client";

import NextImage from "next/image";
import { PROJECTS, type Project } from "@/data/portfolio";

export default function ProjectsSection() {
	return (
		<section
			id="projects"
			className="py-20 md:py-24 bg-gray-50 dark:bg-gray-950"
		>
			<div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
				<div className="space-y-14 md:space-y-20">
					{PROJECTS.map((project, index) => (
						<FeaturedProjectCard
							key={project.id}
							project={project}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

function FeaturedProjectCard({ project, index }: ProjectCardProps) {
	const imageOnLeft = index % 2 === 1;

	return (
		<article
			className={`grid lg:grid-cols-2 gap-8 xl:gap-12 items-center ${imageOnLeft ? "lg:[&>*:first-child]:order-2" : ""}`}
		>
			<div className="space-y-5 relative z-10">
				<p className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-400">
					Featured Project
				</p>
				<h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
					{project.title}
				</h3>
				<div
					className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg w-full lg:w-[calc(100%+20%)] ${
						imageOnLeft ? "lg:ml-[-20%]" : ""
					}`}
				>
					<p className="text-sm md:text-base text-gray-800 dark:text-gray-100 leading-relaxed">
						{project.description}
					</p>
				</div>
				<ul className="mt-5 flex flex-wrap gap-2.5">
					{project.tags.map((tag) => (
						<li
							key={`${project.id}-${tag}`}
							className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/10 border border-white/20 text-gray-900 dark:text-gray-100 text-xs md:text-sm"
						>
							<img
								src={getTagIcon(tag)}
								alt={`${tag} icon`}
								width={16}
								height={16}
								className="w-4 h-4 object-contain"
								loading="lazy"
							/>
							<span>{tag}</span>
						</li>
					))}
				</ul>
			</div>

      <div className="relative z-0">
        <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-indigo-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -inset-6 rounded-[2.25rem] bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(255,255,255,0.35)_0%,rgba(99,102,241,0.18)_45%,rgba(0,0,0,0)_75%)] dark:bg-[radial-gradient(circle,rgba(30,41,59,0.4)_0%,rgba(99,102,241,0.22)_45%,rgba(0,0,0,0)_75%)]" />

        <div className="relative overflow-hidden rounded-2xl border border-white/40 dark:border-gray-700/60 shadow-2xl min-h-[280px] sm:min-h-[340px]">
          {project.image ? (
            <NextImage
							src={project.image}
							alt={project.title}
							fill
							sizes="(max-width: 1024px) 100vw, 50vw"
							className="object-cover"
						/>
					) : (
						<div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-400 dark:text-gray-600">
							<svg
								className="w-20 h-20"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</div>
					)}
				</div>
			</div>
		</article>
	);
}

function getTagIcon(tag: string): string {
	const iconMap: Record<string, string> = {
		Laravel:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
		PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
		React:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		WebSocket: "https://cdn.simpleicons.org/socketdotio/010101",
		MySQL:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		FastAPI: "https://cdn.simpleicons.org/fastapi/009688",
		Python:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
		Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
		Flutter:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
		"Node.js":
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		MongoDB:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		Stripe: "https://cdn.simpleicons.org/stripe/635bff",
		"Tailwind CSS":
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		"Next.js":
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		TypeScript:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		"Framer Motion": "https://cdn.simpleicons.org/framer/0055FF",
		Express:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
		PostgreSQL:
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		Jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
	};

	return iconMap[tag] ?? "https://cdn.simpleicons.org/devdotto/6b7280";
}
