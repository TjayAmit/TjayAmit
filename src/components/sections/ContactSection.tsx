"use client";

import { PROFILE, CONTACT_INFO } from "@/data/portfolio";
import SocialMediaLinks from "@/components/customs/SocialMediaLinks";

export default function ContactSection() {
	const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}&su=Hello from Portfolio&body=Hi Tristan,`;

	return (
		<section
			id="contact"
			className="py-16 md:py-20 bg-gray-50 dark:bg-gray-950"
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				<div className="rounded-3xl border border-gray-200/80 dark:border-gray-800 bg-white/90 dark:bg-gray-900/70 backdrop-blur-md overflow-hidden">
					<div className="grid lg:grid-cols-2">
						<div className="p-7 md:p-10 lg:p-12 bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
							<p className="text-xs uppercase tracking-[0.16em] font-semibold text-white/85 mb-4">
								Get In Touch
							</p>
							<h2 className="text-3xl md:text-4xl font-bold leading-tight">
								Let&apos;s connect
							</h2>
							<p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-md">
								Have a project in mind or just want to connect? Feel free to reach out.
							</p>
						</div>

						<div className="p-7 md:p-10 lg:p-12 flex flex-col justify-center">
							<a
								href={gmailLink}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center justify-center w-full py-4 px-6 rounded-lg font-medium text-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
							>
								Say Hello
							</a>
							<div className="mt-6">
								<div className="relative">
									<div className="absolute inset-0 flex items-center">
										<div className="w-full border-t border-gray-300 dark:border-gray-700" />
									</div>
									<div className="relative flex justify-center text-sm">
										<span className="px-4 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
											Or contact me on other platforms
										</span>
									</div>
								</div>
							</div>
							<div className="mt-6 flex justify-center">
								<SocialMediaLinks className="flex items-center gap-4" />
							</div>
						</div>
					</div>
				</div>

				<div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-400">
					<p>Developed by {PROFILE.fullName}</p>
					<p className="md:text-right">
						Tools: Next.js, TypeScript, Tailwind CSS | @2026 All rights
						reserved.
					</p>
				</div>
			</div>
		</section>
	);
}
