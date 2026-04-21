interface ExperienceItem {
	year: string;
	role: string;
	company: string;
	summary: string;
}

const EXPERIENCE_ITEMS: ExperienceItem[] = [
	{
		year: "2024 - Present",
		role: "Computer Programmer II",
		company: "Zamboanga City Medical Center",
		summary:
			"Built Mearb e-bidding system and company public dashboard with real-time analytics, facilitated UMIS integration and employee clinic deployment, established company-wide CI/CD pipeline using GitHub Actions and Docker on on-premise server to proactively address future deployment challenges, and mentored team on best practices for long-term system sustainability.",
	},
	{
		year: "2023",
		role: "Computer Programmer I",
		company: "Zamboanga City Medical Center",
		summary:
			"Architected on-premise production environment. Led the development of centralized User Management System, standardized authentication via SSO across core systems, and delivered major telemedicine upgrade adding WebRTC video conferencing support.",
	},
	{
		year: "2022",
		role: "Admin Aid III",
		company: "Zamboanga City Medical Center",
		summary:
			"Transformed Telemedicine from a student prototype into a production-ready internal system foundation, establishing the groundwork for hospital-wide telemedicine implementation.",
	},
	{
		year: "2021",
		role: "Freelance Developer",
		company: "Cecile's Pharmacy",
		summary:
			"Developed PR/PO procurement system using Node.js and React.js to digitize requisition workflows, enabling automated purchase request generation based on inventory and sales data.",
	},
];

export default function ExperienceSection() {
	return (
		<section
			id="experience"
			className="py-16 md:py-20 bg-white dark:bg-gray-950"
		>
			<div className="max-w-5xl mx-auto px-6 lg:px-8">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10">
					Experience
				</h2>

				<div className="relative">
					<div className="pointer-events-none absolute left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-indigo-400/25 to-transparent dark:from-indigo-400/70 dark:via-indigo-500/30" />

					<div className="space-y-4 md:space-y-5">
						{EXPERIENCE_ITEMS.map((item) => (
							<article
								key={`${item.year}-${item.role}`}
								className="relative pl-9 md:pl-10"
							>
								<div className="absolute left-0 top-2.5 w-5 h-5 rounded-full bg-indigo-600/15 dark:bg-indigo-400/20 border border-indigo-500/40 dark:border-indigo-400/50 flex items-center justify-center">
									<div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
								</div>

								<div>
									<div className="flex flex-wrap items-center gap-2.5 mb-2.5">
										<p className="inline-flex px-2 py-1 rounded-md bg-indigo-50 dark:bg-indigo-900/40 text-[11px] tracking-[0.1em] uppercase font-semibold text-indigo-700 dark:text-indigo-300">
											{item.year}
										</p>
										<p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300">
											{item.company}
										</p>
									</div>
									<h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
										{item.role}
									</h3>
									<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-2">
										{item.summary}
									</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
